const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')
const members = require('./Members')

//initialize a variable called app with express
const app = express();

//init middleware
app.use(logger);

//init body-parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//init handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//homepage route
app.get('/', (req, res) => 
    res.render('index', {
        titles: "Member App",
        members
    })
);

//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API route
app.use('/api/members', require('./routes/api/members'))

//check the port set n the environment, which if not found will result to the set default port.
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 