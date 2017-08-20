let express = require('express');

let app = express();

let port =  process.env.port || 5000;
let bodyParser = require('body-parser');

let nav =  [ 
                {
                    Link:'/Books', 
                    Text: 'Book'
                },
                {
                    Link:'/Authors',
                    Text: 'Author'
                }
        ];

let bookRouter = require('./src/routes/bookRoutes')(nav);
let adminRouter = require('./src/routes/adminRoutes')(nav);
let authRouter = require('./src/routes/authRoutes');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.render('index', { title: 'hello from render',
     nav: [ 
        {
             Link:'/Books', 
             Text: 'Books'
        },
        {
              Link:'/Authors',
              Text: 'Authors'
        }] 
    });
});

// POST /api/users gets JSON bodies 
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
    console.log('');
})

app.listen(port, (err) => {
    console.log(`running server in ${port}`);
}); 

///test