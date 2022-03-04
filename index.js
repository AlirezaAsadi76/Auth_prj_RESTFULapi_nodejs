require('express-async-errors');
const express=require('express');

const router=require('./src/routes');

const app=express();

require('./StartUp/config')(app,express);
require('./StartUp/db')();
require('./StartUp/logging')();

app.use('/api',router);




const port=process.env.PORT||3000;
app.listen(port,() => {console.log(`connect to pport ${port}`)});
