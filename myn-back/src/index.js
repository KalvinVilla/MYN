import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path';

import root from './root.js'

import logger from "./logger.js"
const log = logger(import.meta)

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/', root)


app.get('/', (req, res, next) => {
    res.status(201).json({
        result: process.env.npm_package_version
    })
    next()
})

app.listen(process.env.SERVER_PORT, () => {
    log.info(`Z3S started listening on port ${process.env.SERVER_PORT}`)
})