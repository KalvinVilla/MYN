import { mysql_request } from "../../src/mysql"

export const create_host = async (name, type_id, ip, mac_address, room_id, switch_id, vlan_id) => {
    return await mysql_request(`INSERT INTO host (id, name, type_id, ip, mac_address, room_id, switch_id, vlan_uid) VALUES ('NULL', '${name}', '${type_id}', '${ip}', '${mac_address}', '${room_id}', '${switch_id}', '${vlan_id}')`)
}

export const read_host = async () => {
    return await mysql_request("SELECT * FROM host;")
}

export const update_host = async (name, type_id, ip, mac_address, room_id, switch_id, vlan_id) => {
    return await mysql_request(`UPDATE host SET host = '${name}', type_id = '${type_id}', ip = '${ip}', mac_address = '${mac_address}', room_id = '${room_id}', switch_id = '${switch_id}', vlan_id = '${vlan_id}'`)
}

export const delete_host = async (id) => {
    return await mysql_request(`DELETE FROM host WHERE id = '${id}'`)
}

export const get_host_by_id = async (id) => {
    return await mysql_request(`SELECT * FROM host WHERE id = '${id}'`)
}

export const get_host_by_name = async (name) => {
    return await mysql_request(`SELECT * FROM host WHERE name = '${name}'`)
}