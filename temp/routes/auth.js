import express from 'express'
import { login, logout } from '../controllers/auth.js'

const router = express.Router()
console.log("CALLED")

router.post("/login",login)
router.post("/logout",logout)

export default router