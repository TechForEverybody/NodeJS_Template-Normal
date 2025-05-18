import { index } from '../controllers'
import express from 'express'

const ExpressRouter = express.Router()

ExpressRouter.get('/', index)
export default ExpressRouter
