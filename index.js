const express = require('express');

const app = express();

const connection = require('./config/db.config')
connection.once('open',() => console.log("DB Connected"))
connection.on('error',() => console.log('Error'))

app.use(express.json({extended:false}))
app.use('/',require('./routes/redirect'))
app.use('/api/url',require('./routes/url'))

const port = 3000 || process.env.PORT
app.listen(port, () => console.log("Application Started"));