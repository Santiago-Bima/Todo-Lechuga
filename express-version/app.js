var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var fileUpload=require('express-fileupload');
var cors=require('cors');

require('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var menuRouter=require('./routes/menu');
var nosotrosRouter = require('./routes/nosotros');
var contactanosRouter=require('./routes/contactanos');
var loginRouter=require('./routes/login');
var registroRouter=require('./routes/register');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('appName', 'Todo Lechuga')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'nosequeclavecrear123',
    resave: false,
    saveUninitialized: true,
}))

secured=async(req, res, next)=>{
  try{
    console.log(req.session.username);
    if(req.session.username) next();
    else res.redirect('/login');
  }catch(e){
    console.log(e);
  }
}

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.post('/salir', function(req,res){
    req.session.destroy()
    res.redirect('/')
})

app.use('/', indexRouter);
app.use('/menu',secured, menuRouter);
app.use('/contactanos', contactanosRouter);
app.use('/nosotros', nosotrosRouter);

app.use('/login', loginRouter);
app.use('/registro', registroRouter);

app.use('/api', cors(), apiRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, ()=>{
  console.log(app.get('appName'));
  console.log('Server on port', 3001);
})

module.exports = app;
