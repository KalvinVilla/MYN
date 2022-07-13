import { create_user, get_user_by_name, is_user } from "../../model/db/user.js"
import { MISSING_ARGUMENT, USER_ALREADY_EXISTING, USER_WRONG_CREDENTIALS } from "../../src/response.js"
import { generate_uid } from "../../src/utils.js"
import logger from "../../src/logger.js"
import { compare_password, hash_password } from "../../src/password.js"
import { ldap_authentification } from "../../src/ldap.js"


const log = logger(import.meta)

export const new_user = async (req , res) => {
    const { name, mail, ad_account, password } = req.body
    const uid = generate_uid();

    if(typeof(name) === 'undefined' || typeof(mail) === 'undefined' || typeof(ad_account) === 'undefined') {
        res.status(200).json(MISSING_ARGUMENT)
        return;
    }

    const user = await is_user(uid);
    if(typeof user !== 'undefined' && user.length > 0) {
        res.status(200).json(USER_ALREADY_EXISTING)
        return;
    }

    let final_password = "NULL"
    if(typeof(password) !== 'undefined') 
        final_password = await hash_password(password)
    

    const response = await create_user(uid, name, mail, ad_account, final_password)
    log.info([response], 'Add new local user on mysql db : ')

    res.status(201).json({
        result: response
    })
}

export const auth_user = async (req , res) => {
    const { name, password } = req.body

    if(typeof(name) === 'undefined' || typeof(password) === 'undefined') {
        res.status(200).json(MISSING_ARGUMENT)
        return;
    }

    let user = (await get_user_by_name(name))[0]
    if(typeof user === 'undefined') {
        // FIXE LDAP AUTH
        // await ldap_authentification(name, password).then(response => {
        //     log.info(response, "ldap")
        //     res.status(200).json({
        //         result: "Good"
        //     })
        // })
            res.status(200).json(USER_WRONG_CREDENTIALS)
        return
    } else {
        if(user.ad_account === 0) {
            const compared_password = await compare_password(password, user.password)
    
            if(compared_password === false) {
                res.status(200).json(USER_WRONG_CREDENTIALS)
                return;
            }
        
            log.info(user, 'Getting user : ')
        
            res.status(201).json({
                result: {
                    uid: user.uid,
                    name: user.name
                }
            })
            return;
        } else {
            if(ldap_authentification(name, password)) {
                log.info("AD User is good")
            } else {
                log.info("AD user error")
            }
            res.status(201).json({
                result: "Prank"
            })
        }
    }




}