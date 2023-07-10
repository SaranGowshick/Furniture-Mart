const express= require ('express');
const mongoose= require ('mongoose');
const cors = require ('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Gowshick', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

const customer=require('./DataBase/customer');
app.post('/login',asyn (req,res) );
app.listen(3001,console.log("Server Started"));