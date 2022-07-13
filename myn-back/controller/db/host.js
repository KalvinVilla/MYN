import { create_host } from "../../model/db/host.js"
import { MISSING_ARGUMENT } from "../../src/response.js"
import logger from "../src/logger.js"


const log = logger(import.meta)

export const new_host = async (req , res) => {
    const { name, type_id, ip, mac_address, room_id, switch_id, vlan_uid } = req.body

    if(name === "undefined" || type_id === "undefined" || ip === "undefined" || mac_address === "undefined" || room_id === "undefined" || switch_id === "undefined" || vlan_uid === "undefined")  res.status(200).json(MISSING_ARGUMENT)

    const response = await create_host(name, type, ip, mac_address, room_id, switch_id, vlan_uid)
    log.info([response], 'Add new local user on mysql db : ')

    res.status(201).json({
        result: response
    })
}