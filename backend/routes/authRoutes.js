import express from 'express';

// import controllers
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router
    .route('/login')
    .get(login)

router  
    .route('/register')
    .post(register)

export default router;