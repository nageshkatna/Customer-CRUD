import { Schema, model, connect, Mongoose } from "mongoose"
import mongoose from 'mongoose'


export interface UserDocument extends mongoose.Document {
    name: String;
    street_name: String;
    house_number: Number;
    city: String;
    state: String;
    phone_number: String;
    email: String;
    createdAt: Date;
}

const customerSchema = new mongoose.Schema<UserDocument>({
    name: {
        type: String,
        required: true
    },
    street_name: {
        type: String,
        required: true
    },
    house_number: {
        type:Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const CustomerModel = model<UserDocument>('Customer', customerSchema);

export default CustomerModel