import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {getCustomerByEmail, getAllCustomer, createCustomer, getCustomerById, updateCustomer , deleteCustomer} from '../controllers/customerController'
const router = express.Router();

//Retrieving customer
router.get('/getbyemail/:email', getCustomerByEmail);
router.get('/getbyid/:id', getCustomerById);
router.get('/:page',getAllCustomer);

//Creating customer
router.post('/create', createCustomer);

//Updating customer
router.put('/update/:id', updateCustomer)

//Deleting customer
router.delete('/delete/:id', deleteCustomer)
    
export default router