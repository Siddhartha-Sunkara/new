import express from "express"
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js"
const router = express.Router()

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"

router.put('/:id', verifyUser, updateUser)
//delete new User

router.delete('/:id', verifyUser, deleteUser)
//get single User

router.get('/:id', verifyUser, getSingleUser)
//get all User

router.get('/', verifyAdmin, getAllUser)

export default router