require('dotenv').load();

var Cache = require('./index.js');

var cache = new Cache({bucket:process.env.BUCKET_NAME});

var obj = {foo:'foo',bar:'bar'};

cache.put('foo',obj)
  .then(res => console.log(res));

cache.get('foo')
  .then(obj => console.log(obj));

cache.list()
  .then(ids => console.log(ids));
