import express from 'express'
import { getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js'
import protect from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/sign-up', registerUser)
router.post('/sign-in', loginUser)

router.post('/logout', logoutUser);

router.get('/profile', protect, getUserProfile);

export default router;