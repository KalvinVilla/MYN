import ldap from 'ldapjs';
import logger from './logger.js'

const log = logger(import.meta)

// const client = ldap.createClient({
//     url: [`ldap://${process.env.LDAP_HOST}`],
//     port: process.env.LDAP_PORT
// });


// client.on('error', (err) => {
//     log.error(err)
// })

/*
    NEED FIXE 
*/
export const ldap_authentification = async (user, password) => {
    new Promise((resolve, reject) => {
        try {
            client.bind(`${user}@fr.kavi.ad`, password, (err, res) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(res);
                }
    
    
            })
        } catch (err) {
            reject(err)
        }

})

}

export function ldap_user(user) {
    client.bind('villakl@fr.kavi.ad', 'Window7', (err, res) => {
        if(err) {
            log.error(err)
            return
        } 
    
        const username = "villakl"
    
        log.info("ldap connexion sucessfully")
        var base = 'dc=fr,dc=kavi,dc=ad';
        var search_options = {
            scope: 'sub',
            filter: '(&(objectClass=person)(sAMAccountName=' + username + '))', //filter: '(&(objectClass=*)(CN=' + username + '))',
            attrs: 'memberOf'
        };
    
        client.search(base, search_options, function (err, res) {
            if (err) {
                log.info('Error occurred while ldap search');
            } else {
                res.on('searchEntry', function (entry) {
                    log.info(entry.object, 'Entry');
                });
                res.on('searchReference', function (referral) {
                    //log.log('Referral', referral);
                });
                res.on('error', function (err) {
                    log.error([err], 'Error is');
                });
                res.on('end', function (result) {
                    client.unbind((err) => {
                        if(err === null) {
                            log.info("ldap disconnected sucessfully")
                        } else {
                            log.error(err)
                        }
                    });
                    log.info('Result is end');
                });
            }
        });
    
      });
}