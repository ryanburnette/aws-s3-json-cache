# [aws-s3-json-cache][1]

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/aws-s3-json-cache)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/aws-s3-json-cache)

A JavaScript object cache on AWS S3.

## Usage

```
npm install @ryanburnette/aws-s3-json-cache
```

AWS-SDK looks for configuration on in the environment. Configure per [AWS SDK
documentation][2].

```js
var cache = require('@ryanburnette/aws-s3-json-cache')({
  bucket: 'my-bucket'
});

cache.put('obj', { foo: 'foo', bar: 'bar' }).then(function(r) {
  console.log(r);
});
// => { ETag: '"baa4abdb95dba99d1946dfb15b3c1ce8"' }

cache.get('obj').then(function(obj) {
  console.log(obj);
});
// => { foo: 'foo', bar: 'bar' }

cache.list().then(function(ids) {
  console.log(ids);
});
// => [ 'obj' ]
```

## Limitations

- List gets up to 1000 keys.

[1]: https://github.com/ryanburnette/aws-s3-json-cache
[2]:
  https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
