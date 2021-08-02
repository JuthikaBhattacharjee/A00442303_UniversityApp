const SERVER_PORT = 9898;
var express = require('express');
var mongodb = require('mongodb');

var connectionString;

var allowCrossDOmain = function(req,res,next){
    res.header('Acess-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow_Headers','content-type');
    next();
};

var app=express();
app.use(express.bodyParser());
app.use(allowCrossDOmain);
app.use('/scripts', express.static(--dirname + '/scripts'));
app.use('/css', express.static(--dirname + '/css'));
app.use(express.static(__dirname));

var server=app.listen(SERVER_PORT, function(){
    
    const SERVER_PORT=8124;
    
    var user='j_bhattacharjee';
    var password='A00442303';
    var database='j_bhattacharjee';
    
    var host='127.0.0.1';
    var port='27020';
    
    connectionString='mongodb://'+user+':'+password+'@'+host+':'+port+'/'+database;
    
    console.log('Listening on port %d', server.address().port);
    
});

app.post('/adduniversitydetails', function(request,response){
   console.log("Process being executed in"+__dirname);
   var name={reuest.body.name};
   var address={request.body.address};
   var phone={reuest.body.phone};
   mongodb.connect(connectionString,function(error,db)){
      if(error){
       throw(error);
   }
   collectionvalue=db.collection("universitydetails");
   collectionvalue.insert(request.body,
                         function(err,result){
     if(err){
    return response.send(400,'An has occurred');
    }
       db.close();
   });
   
});
