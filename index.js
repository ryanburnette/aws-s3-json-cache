'use strict';

var AWS = require('aws-sdk');
var S3 = new AWS.S3({ apiVersion: '2006-03-01' });

module.exports = function(opts) {
  if (!opts) {
    opts = {};
  }

  var Bucket = opts.bucket;

  var obj = {};

  obj.get = function(Key) {
    return S3.getObject({
      Bucket,
      Key
    })
      .promise()
      .then(function(data) {
        return JSON.parse(data.Body.toString('utf8'));
      });
  };

  obj.put = function(Key, Body) {
    Body = JSON.stringify(Body);
    return S3.putObject({
      Bucket,
      Key,
      Body
    }).promise();
  };

  obj.list = function() {
    return S3.listObjects({
      Bucket,
      MaxKeys: 1000
    })
      .promise()
      .then(function(res) {
        return res.Contents.map(function(el) {
          return el.Key;
        });
      });
  };

  return obj;
};
