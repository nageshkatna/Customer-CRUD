import express, {Request, Response, NextFunction, response} from 'express'
import CustomerModel from '../models/customerModel'
import { UserDocument } from '../models/customerModel';
import mongoose, { ObjectId } from 'mongoose'

//Retrieving Data
export const getCustomerByEmail = async (req:Request, res:Response, next: NextFunction) => {
    
    const data:string = req.params.email
    await CustomerModel.find({email: data})
    .then((customer: any) => {
        console.log(customer)
        let result = customer.map((elem: UserDocument) => ({
            'Id': elem._id,
            'Name': elem.name,
            'Address': {
                'Street_Name' : elem.street_name,
                'House_Number': elem.house_number,
                'City': elem.city,
                'State': elem.state                
            },
            'Phone_Number': elem.phone_number,
            'Email': elem.email
        }))
        res.status(200).json(result);
    })
    .catch((error: any) => {
        res.status(404).send({"error":error});
    })    
}

export const getCustomerById = async (req:Request, res:Response, next: NextFunction) => {
    
    const data = req.params.id
    await CustomerModel.findById(data)
    .then((customer: any) => {
        customer = [customer]
        let result = customer.map((elem: UserDocument) => ({
            'Id': elem._id,
            'Name': elem.name,
            'Address': {
                'Street_Name' : elem.street_name,
                'House_Number': elem.house_number,
                'City': elem.city,
                'State': elem.state                
            },
            'Phone_Number': elem.phone_number,
            'Email': elem.email
        }))
        res.status(200).json(result);
    })
    .catch((error: any) => {
        console.log("catch")
        res.status(404).send({"error":error});
    })  
}

export const getAllCustomer = async (req:Request, res:Response, next: NextFunction) => {
    await CustomerModel.find()
    .then((customer: any) => {
        let result = customer.map((elem: UserDocument) => ({
            'Id': elem._id,
            'Name': elem.name,
            'Address': {
                'Street_Name' : elem.street_name,
                'House_Number': elem.house_number,
                'City': elem.city,
                'State': elem.state                
            },
            'Phone_Number': elem.phone_number,
            'Email': elem.email
        }))
        res.status(200).json(result);
    })
    .catch((error: any) => {
        res.status(404).send({"error":error});
    })    
}

//Ceating Data
export const createCustomer = async (req:Request, res:Response) => {
    console.log("creating")
    const customerData: UserDocument = req.body
    const createdCustomer = new CustomerModel(customerData);
    await createdCustomer.save()
    .then(savedCustomer => {
        res.send(savedCustomer)
    })
    .catch(error => {
        console.log(error)
    })
}

//Updating Data
export const updateCustomer = async (req:Request, res:Response, next: NextFunction) => {
    
    const id:string = req.params.id;
    const customerData: UserDocument = req.body;
    await CustomerModel.findByIdAndUpdate(id, customerData)
    .then((customer: any) => {
        res.status(200).json(customer);
    })
    .catch((error: any) => {
        res.status(404).send({"error":error});
    })    
}

//Deleting Data
export const deleteCustomer = async (req:Request, res:Response, next: NextFunction) => {
    
    const id:string = req.params.id;
    await CustomerModel.findByIdAndDelete(id)
    .then((successResponse) => {
        res.status(200).json(successResponse);
    })
    .catch((error: any) => {
        res.status(404).send({"error":error});
    })    
}