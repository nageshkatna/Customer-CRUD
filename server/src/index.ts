import  mongoose from 'mongoose'
import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config/config';
import customerRoutes from './routes/customerRouter'

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const CONNECTION_URL:string = config.mongo.url;
const PORT:Number | String = process.env.PORT || config.server.port

mongoose.connect(CONNECTION_URL, config.mongo.options)
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)

app.use('/',customerRoutes)
// app.listen("3001", ():void => {
//     console.log("Server is running")
// })