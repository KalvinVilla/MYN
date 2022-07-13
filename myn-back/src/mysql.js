import mysql from 'mysql'
import logger from "./logger.js"

const log = logger(import.meta)

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
  });

db.connect(function(err) {
    if (err) throw err;
    log.info('Mysql database connected')
})


export const mysql_request = async (request) => {
    return new Promise((resolve, reject) => {
            db.query(request, function (err, result) {
                if (err) { 
                    reject(err)
                } else {
                    resolve(result)
                }
          })
    })
} 

export const mysql_ping = async (request) => {
    return await mysql_request("SHOW VARIABLES LIKE '%version%'")
} 