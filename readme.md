# @ryanburnette/aws-s3-json-cache

## Description

A basic JavaScript object cache for S3.

## Configuration

AWS-SDK looks for configuration on `process.env`. Configure per [those docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html).

## Usage

```javascript
var Cache = require('@ryanburnette/aws-s3-json-cache');

var cache = new Cache({
  bucket:'my-bucket'
});

var obj = {foo:'foo',bar:'bar'};

cache.put('obj',obj)
  .then(res => console.log(res));
// => { ETag: '"baa4abdb95dba99d1946dfb15b3c1ce8"' }

cache.get('obj')
  .then(obj => console.log(obj));
// => { foo: 'foo', bar: 'bar' }

cache.list()
  .then(ids => console.log(ids));
// => [ 'bar', 'baz', 'foo' ]
```

## TODO

- Get back more than 1000 keys when using `#list()`
