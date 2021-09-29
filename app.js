// dependencies
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hash = require('bcrypt-nodejs');
var path = require('path');
var cors = require('cors');
let verifyToken = require('./routes/tokenMiddleware');
var validator = require('express-validator');
var helmet = require('helmet');
var rfs = require("rotating-file-stream");
// create instance of express
var app = express();
const hsts = require('hsts');//HTTP Strict Transport Security middleware

//Strict-Transport-Security header to the response use HTTPS for the next period of time
app.use(hsts({
  maxAge: 604800, // 1 week in seconds
  includeSubDomains: true
}));

//Create a session middleware
var expSession = require('express-session');
var sessionFileStore = require('session-file-store')(expSession);

var config = require('./configuration.json');
// const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');

var sessionFileStoreOptions = {
  path: './sessions/',
  useAsync: true,
  /* reapInterval: config.maxAge,
  maxAge: config.maxAge */
};

app.use(expSession({
  genid: function (req) {
    // return uuidv5('http://ec2-52-52-49-127.us-west-1.compute.amazonaws.com', uuidv5.URL); // use UUIDs for session IDs
    // return uuidv5('https://www.ciptszantmeter.com', uuidv5.URL); // use UUIDs for session IDs
    // return uuidv5('https://cpcinchdv000849.cts.com', uuidv5.URL); // use UUIDs for session IDs
    return uuidv4();
  },
  store: new sessionFileStore(sessionFileStoreOptions),
  secret: config.sessionSecretKey,
  saveUninitialized: false,
  resave: true,
  cookie: {
    path: "/",
   /*  sameSite: true, */ // true if https //'none'if cross-site
    httpOnly: false, // true if https
    secure: false, // true if https
    maxAge: config.maxAge//45000 //45secs //1800000 //30 mins //3000000 //50mins //900000 //15 mins //604800000 //7days //86400000 //1day //
  },
  name: "PerfAssure",
  // unset: 'destroy',//uncomment if https
})
);


//Enable logging
// create a write stream (in append mode)
//var accessLogStream = fs.createWriteStream(path.join(__dirname+'/logs/', 'access.log'), { flags: 'a' })
//var stdoutLogStream = fs.createWriteStream(path.join(__dirname+'/logs/', 'stdout.log'), { flags: 'a' })

//var accessLogStream = rfs(path.join(__dirname+'/logs/', 'access.log'), {
var accessLogStream = rfs(config.scriptLogPath+config.nodeAccessLogFile, {//'access.log', {
  size: config.logFileSize,//"10M",
  interval: config.logFileInterval,//"1d",
  path: path.join(__dirname, '/logs/'),
  //compress: "gzip" 
});

//var stdoutLogStream = rfs(path.join(__dirname+'/logs/', 'stdout.log'), {
var stdoutLogStream = rfs(config.scriptLogPath+config.nodeStdoutLogFile, {//'stdout.log', {
  size: config.logFileSize,//"10M",
  interval: config.logFileInterval,//"1d",
  path: path.join(__dirname, '/logs/'),
  //compress: "gzip" 
});

// setup the logger
//app.use(morgan('short', { stream: accessLogStream }));
app.use(morgan('[:date[iso]] - :remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms', { stream: accessLogStream }));
app.use(morgan('dev', { stream: stdoutLogStream }));

/* // setup the logger
app.use(morgan('combined', { stream: accessLogStream })) */
//Print in console as well
app.use(morgan("dev")); //log to console on development


var compression = require('compression');

//compression for responses, remove while using Nginx
app.use(compression());

//Code to handle XSS using express-validator
app.use(validator());
app.use(function (req, res, next) {
  for (var item in req.body) {
    req.sanitize(item).escape();
  }
  next();
});
/* //uncomment while Prod
app.use(helmet());
//Required to handle XSS - Content security policy (CSP)
//uncomment while Prod
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],//, '10.120.100.196:5000', '10.120.100.196:5001', '10.120.100.196:5002', '10.120.100.196:5003', '10.120.100.196:5005'],
    styleSrc: ["'self'", "'unsafe-inline'"],
    connectSrc: ["'self','localhost:8080','127.0.0.1:8080'"]//, '10.120.100.196:5000', '10.120.100.196:5001', '10.120.100.196:5002', '10.120.100.196:5003', '10.120.100.196:5005']
  }
})); */

/*app.use(helmet.csp({
  defaultSrc: ["'self'"],
  scriptSrc: ['*.google-analytics.com'],
  styleSrc: ["'unsafe-inline'"],
  imgSrc: ['*.google-analytics.com'],
  connectSrc: ["'none'"],
  fontSrc: [],
  objectSrc: [],
  mediaSrc: [],
  frameSrc: []
}));*/

//Dev
//enable CORS for all requests
app.use(cors());//comment while Prod

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});//comment while Prod

//Prod
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header("Strict-Transport-Security", "max-age=604800"); // 1 week in seconds
  // res.header("Access-Control-Allow-Origin", "http://ec2-52-52-49-127.us-west-1.compute.amazonaws.com");
  // res.header("Access-Control-Allow-Origin", "https://www.ciptszantmeter.com");//uncomment while Prod
  // res.header("Access-Control-Allow-Origin", "https://cpcinchdv000849.cts.com");//uncomment while Prod

  //console.log("method: " + req.method);
  if ((req.method == "GET") || (req.method == "POST") || (req.method == "PUT") || (req.method == "DELETE")) {
    next();
  } else {//405 Method Not Allowed
    fs.readFile(__dirname + "/error_pages/405.html", function (error, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  }
});



app.use(function (err, req, res, next) {
  if (res.headersSent) return next(err);
  //res.status(500).json("Internal Server Error");
  console.log("500 Internal Server Error");
  fs.readFile(__dirname + "/error_pages/500.html", function (error, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
});

// require routes
var userRoutes = require('./routes/userAPI.js');
var loginRouter = require('./routes/login.js');
var adminRoutes = require('./routes/admin.js');
var toolAPIRoutes = require('./routes/toolAPI.js');
var licenseRoutes=require('./routes/license.js');

const { createProxyMiddleware } = require('http-proxy-middleware');

let CIPTS_URL = config.CIPTS_serverURL;
// proxy middleware options

const proxyMiddlewareOptionsCIPTS = {
  target: CIPTS_URL, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/api/old-path': '/api/new-path', // rewrite path
  //   '^/api/remove/path': '/path' // remove base path
  // },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    'ec2-52-52-49-127.us-west-1.compute.amazonaws.com': CIPTS_URL
  }
};

// create the proxy (without context)
const proxyCIPTS = createProxyMiddleware(proxyMiddlewareOptionsCIPTS);

//app.use('/testAPI/*', verifyToken, proxyCIPTS);

app.use('/startup/', proxyCIPTS);
app.use('/testAPI/', verifyToken, proxyCIPTS);
app.use('/ZantmeterAPI/', verifyToken, proxyCIPTS);
app.use('/ElasticsearchAPI/', verifyToken, proxyCIPTS);
app.use('/AnalyseAPI/', proxyCIPTS);//comment in Prod
app.use('/LoadAgentAPI/', verifyToken, proxyCIPTS);
app.use('/devAPI/', proxyCIPTS);
app.use('/billingAPI/', proxyCIPTS);
app.use('/jenkinsESAPI/', verifyToken, proxyCIPTS);
app.use('/scrambleAPI/', proxyCIPTS);
app.use('/influxAPI/', verifyToken, proxyCIPTS);
let CIEEM_URL = config.CIEEM_serverURL;
// proxy middleware options

const proxyMiddlewareOptionsCIEEM = {
  target: CIEEM_URL, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/api/old-path': '/api/new-path', // rewrite path
  //   '^/api/remove/path': '/path' // remove base path
  // },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    'ec2-52-52-49-127.us-west-1.compute.amazonaws.com': CIEEM_URL
  }
};

// create the proxy (without context)
const proxyCIEEM = createProxyMiddleware(proxyMiddlewareOptionsCIEEM);

//app.use('/', indexRouter);
//app.use('/worker', verifyToken, workerRouter);
app.use('/worker', proxyCIEEM);
//app.use('/samplesAPI/', verifyToken, samplesRoutes);
app.use('/samplesAPI/', verifyToken, proxyCIEEM);
app.use('/seleniumAPI/', proxyCIEEM);
app.use('/script/', verifyToken, proxyCIEEM);
app.use('/fileupload/', proxyCIEEM);

app.use('/activemonitorFiles', proxyCIEEM);
let CxPerf_URL = config.CxPerf_serverURL;
// proxy middleware options

const proxyMiddlewareOptionsCxPerf = {
  target: CxPerf_URL, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/api/old-path': '/api/new-path', // rewrite path
  //   '^/api/remove/path': '/path' // remove base path
  // },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    'ec2-52-52-49-127.us-west-1.compute.amazonaws.com': CxPerf_URL
  }
};

// create the proxy (without context)
const proxyCxPerf = createProxyMiddleware(proxyMiddlewareOptionsCxPerf);

app.use('/cxperf/script/',verifyToken,proxyCxPerf);
app.use('/cxperf/testrun/',verifyToken,proxyCxPerf);
app.use('/cxperf/worker', proxyCxPerf);
app.use('/cxperf/seleniumAPI/', proxyCxPerf);
app.use('/cxperf/scrambleAPI/',proxyCxPerf)

let MobilePerf_URL = config.MobilePerf_serverURL;
let Accessibility_URL = config.Accessibility_serverURL;
// proxy middleware options

const proxyMiddlewareOptionsMobilePerf = {
  target: MobilePerf_URL, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/api/old-path': '/api/new-path', // rewrite path
  //   '^/api/remove/path': '/path' // remove base path
  // },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    'ec2-52-52-49-127.us-west-1.compute.amazonaws.com': MobilePerf_URL
  }
};

const proxyMiddlewareOptionsAccessibility = {
  target: Accessibility_URL, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/api/old-path': '/api/new-path', // rewrite path
  //   '^/api/remove/path': '/path' // remove base path
  // },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    'ec2-52-52-49-127.us-west-1.compute.amazonaws.com': Accessibility_URL
  }
};

// create the proxy (without context)
const proxyMobilePerf = createProxyMiddleware(proxyMiddlewareOptionsMobilePerf);

app.use('/mobileperfAPI/',verifyToken, proxyMobilePerf);
app.use('/mobileperfFiles', proxyMobilePerf);
app.use('/scrambleAPIForUxPerfMob',proxyMobilePerf);

const proxyAccessibility= createProxyMiddleware(proxyMiddlewareOptionsAccessibility);
app.use('/accessibility/',verifyToken, proxyAccessibility);
app.use('/scrambleAT',proxyAccessibility);
app.use('/uploads', proxyAccessibility);
app.use('/seleniumAPI',proxyAccessibility);
// define middleware
//app.use(express.static(path.join(__dirname, '../release')));
//app.use(express.static(path.join(__dirname, '../src')));
//
app.use(express.static(path.join(__dirname, '../public')));//Production
//app.use(morgan('dev'));

//Setting 50mb for uploading data - without this will get an error 'request entity too large'
// let limit_size = '100Mb';//'5Mb';//1024 * 1024 * 20;
// var jsonParser = bodyParser.json({ limit: limit_size, type: 'application/json' });
// var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: limit_size, type: 'application/x-www-form-urlencoding' });
/* 
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });
 */

var jsonParser = bodyParser.json({ limit: '500Mb', type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: '500Mb', type: 'application/x-www-form-urlencoding' });

app.use(jsonParser);
app.use(urlencodedParser);

//Catching all errors so that node does not crash
process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

// routes
/*app.use('/', express.Router().get('/', (req, res) => {
  res.status(200).send("IT'S WORKING!");//.json({ "status": "Test stopped" });
}));*/

app.get('/', function (req, res) {//Production
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Strict-Transport-Security", "max-age=604800"); // 1 week in seconds   
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, '../public', '/'));
});

app.use('/login', loginRouter);
app.use('/userAPI/', verifyToken, userRoutes);
app.use('/admin/', verifyToken, adminRoutes);
app.use('/toolAPI/', toolAPIRoutes);//not using verify token for scambled url
app.use('/license/',verifyToken,licenseRoutes);
/*app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../release', '/'));
  res.sendFile(path.join(__dirname, '../src', '/'));
});*/

// error hndlers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Strict-Transport-Security", "max-age=604800"); // 1 week in seconds   
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  //var err = new Error('Not Found');
  //err.status = 404;
  //next(err);

  console.log("404 Not Found");
  fs.readFile(__dirname + "/error_pages/404.html", function (error, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
});

app.use(function (err, req, res) {
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Strict-Transport-Security", "max-age=604800"); // 1 week in seconds   
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

  console.log(err.message);
  /*  res.status(err.status || 500);
   res.end(JSON.stringify({
     message: err.message,
     error: {}
   })); */
  fs.readFile(__dirname + "/error_pages/500.html", function (error, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
});



module.exports = app;
