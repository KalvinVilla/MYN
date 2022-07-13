import { mysql_request } from "../../src/mysql.js"

export const create_user = async (uid, name, mail, ad_account, password) => {
    return await mysql_request(`INSERT INTO user (uid, name, mail, ad_account, password) VALUES ('${uid}', '${name}', '${mail}', '${ad_account}', '${password}')`)
}

export const read_user = async () => {
    return await mysql_request("SELECT * FROM user;")
}

export const update_user = async (name, type_id, ip, mac_address, room_id, switch_id, vlan_id) => {
    return await mysql_request(`UPDATE user SET host = '${name}', type_id = '${type_id}', ip = '${ip}', mac_address = '${mac_address}', room_id = '${room_id}', switch_id = '${switch_id}', vlan_id = '${vlan_id}'`)
}

export const delete_user = async (id) => {
    return await mysql_request(`DELETE FROM user WHERE uid = '${uid}'`)
}

export const get_user_by_uid = async (uid) => {
    return await mysql_request(`SELECT * FROM user WHERE uid = '${uid}'`)
}

export const get_user_by_name = async (name) => {
    return await mysql_request(`SELECT * FROM user WHERE name = '${name}'`)
}

export const is_user = async (uid, name) => {
    return await mysql_request(`SELECT * FROM user WHERE uid = '${uid}' AND name = '${name}'`)
}