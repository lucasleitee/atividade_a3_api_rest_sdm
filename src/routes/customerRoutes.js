import express from 'express';
import customerController from '../controllers/CustomerController.js';

const router = express.Router();

router.get('/customers', customerController.getAll);
router.post('/customers', customerController.create);
router.delete('/customers/:id', customerController.delete);

export default router;
