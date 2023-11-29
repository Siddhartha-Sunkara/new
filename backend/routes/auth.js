
import express from "express";
import { login, oAuthLogin, register } from "../controllers/authController.js";

const router = express.Router()



router.post('/register', register)
router.post('/login', login)
router.post('/oauthlogin', oAuthLogin)

export default router