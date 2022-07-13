import express from 'express';
import { auth_user, new_user } from '../controller/db/user.js';
import logger from './logger.js'

const router = express.Router()
const log = logger(import.meta)

/**
 * USER
 */
router.post('/db/user/new/', new_user)
router.post('/db/user/auth', auth_user)
//router.post('/user/register/', null)

/**
 * HOST
 */
//router.post('/user/auth/', null)

/**
 * ZABBIX
 */

 log.info('Every roots initalized')

 export default router