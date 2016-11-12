var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
  user:'pazhamalai',
  database:'pazhamalai',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req, res) {
 pool.query('SELECT *FROM test',function(err,result){
    if(err){
        res.status(500).send(err.toString());
    } 
    else
    {
        res.send(JSON.stringify(result.rows));
    }
 });
});


app.get('/profile.html',function(req,res)
{
      res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/one.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.png'));
});


app.get('/ui/two.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.jpeg'));
});


app.get('/ui/three.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.jpeg'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/DSC05945.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC05945.jpg'));
});

app.get('/ui/bulbon.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bulbon.jpeg'));
});

app.get('/ui/bulboff.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bulboff.jpeg'));
});


var counter=0;
app.get('/counter', function(req, res){
   counter=counter + 1; 
   res.send(counter.toString());
});


var names=[];
app.get('/submit-name', function (req, res) {
  var name=req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

var articles={
   'articleone':{
    title:'Article One',
    content:` <link rel='stylesheet' type=text/css href='ui/style.css'>
    <div class="one">
<div>
       <a href='/' class='button'>Home</a>
       <a href='/profile.html' class='buttonone'>profile</a>
       <a href='/articletwo' class='buttonone'>Article two</a>
       <a href='/articlethree' class='buttonone'>Article three</a><br>
</div>

<div>
       <p class='two'>October 30</p>
</div>
<div>
       <p class='two'>This is my first article</p>
</div>
<div>
       <a href='https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fpixabay.com%2Fstatic%2Fuploads%2Fphoto%2F2015%2F04%2F04%2F19%2F13%2Fone-706897_640.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fen%2Fone-1-number-design-collection-706897%2F&docid=Dxk_1n6Yd4M41M&tbnid=H9VLy5g15akogM%3A&w=640&h=640&hl=en&bih=659&biw=1366&ved=0ahUKEwiF5ruwy4LQAhXIK48KHYslB3AQMwg-KAwwDA&iact=mrc&uact=8' target='_blank'><img src='/ui/one.png' alt='article one' class='photoone'/></a>
</div>

<div class='bulb'>
<button onclick="document.getElementById('image').src='/ui/bulbon.jpeg'">Turn on the light</button>
<img id='image' src='/ui/bulboff.jpeg' style="width:100px">
<button onclick="document.getElementById('image').src='/ui/bulboff.jpeg'">Turn off the light</button>

</div>
</div>
`

},
   'articletwo':{
       title:'Article Two',
       content:`   <div class='atwo'>
       <div>
<a href='/' class='button'>Home</a>
<a href='/profile.html' class='buttonone'>profile</a>
<a href='/articleone' class='buttonone'>Article one</a>
<a href='/articlethree' class='buttonone'>Article three</a>
</div>
<div>
<p class='two'>October 30</p>
</div>
<div>
<p class='two'>This is my second article</p>
</div>
<div>
<a href='https://www.google.co.in/imgres?imgurl=http%3A%2F%2Fwww.atvtoday.co.uk%2Fwp-content%2Fuploads%2F2014%2F03%2Fbbc-two.jpg&imgrefurl=http%3A%2F%2Fwww.atvtoday.co.uk%2F7483-bbc%2F&docid=oR48HW34-OwJFM&tbnid=03ZQgjlRbkXV4M%3A&w=874&h=339&hl=en&bih=659&biw=1366&ved=0ahUKEwizmrifzILQAhWIu48KHe9dAYsQMwhbKB4wHg&iact=mrc&uact=8' target='_blank'><img src='/ui/two.jpeg' alt='article two' class='img-medium'/></a>
</div>`
   },
   'articlethree':{
       title:'Article Three',
       content:` <div>
<a href='/' class='button'>Home</a>
<a href='/profile.html' class='buttonone'>profile</a>
<a href='/articleone' class='buttonone'>Article one</a>
<a href='/articletwo' class='buttonone'>Article two</a>
</div>
<div>
<p class='two'>October 30</p>
</div>
<div>
<p class='two'>This is my third article</p>
</div>
<div>
<a href='https://www.google.co.in/imgres?imgurl=http%3A%2F%2Fwww.freefoto.com%2Fimages%2F2000%2F03%2F2000_03_52---Number-Three_web.jpg&imgrefurl=http%3A%2F%2Fwww.freefoto.com%2Fpreview%2F2000-03-52%2FNumber-Three&docid=snq6DZOc3ApG4M&tbnid=fDyLAxJU8PMUmM%3A&w=400&h=600&hl=en&bih=659&biw=1366&ved=0ahUKEwiZxpCZzYLQAhWKt48KHazwDa44ZBAzCDgoNjA2&iact=mrc&uact=8' target='_blank'><img src='/ui/three.jpeg' alt='third article' class='photoone'/></a>
</div>`
   }
};
function createtemplate(data){
    var title=data.title;
    var content=data.content;
var htmltemplate=`<!DOCTYPE html>
<html>
<head>
    <link href='/ui/style.css' rel='stylesheet'/>
    <title>${title}</title>
</head>
<body>
    ${content}
</body>
</html>`
;
return htmltemplate;
}

app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
     res.send(createtemplate(articles[articlename]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
