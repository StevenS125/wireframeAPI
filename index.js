import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//serving static files(images)
app.use(express.static('public'));


app.get('/', (req, res) =>
    res.send(`server is runnin on port ${port}`)
);


app.listen(PORT, () =>
    console.log(`you are listening on port ${PORT}`)
);