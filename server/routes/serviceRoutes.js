import express from 'express';
import { deleteService, getAllServices, registerService, updateService } from '../controllers/serviceControllers.js';

const router = express.Router();

/**REGISTER ROUTES || POST */
router.post('/register', registerService);

/**GET SERVICES || GET */
router.get('/allservices', getAllServices);

/**UPDATE SERVICE || PUT */
router.put('/update/:id', updateService);

/**DELETE SERVICE || DELETE */
router.delete('/delete/:id', deleteService);

export default router;