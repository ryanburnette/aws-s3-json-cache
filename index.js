'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3({apiVersion:'2006-03-01'});

module.exports = function (opts={}) {
  let obj = {};

  if (!opts.bucket) throw new Error('opts.bucket required');

  obj.get = function (id) {
    if (!id) throw new Error('id required');

    return S3.getObject({
      Bucket: opts.bucket,
      Key: id,
    }).promise()
      .then(data => data.Body)
      .then(data => data.toString('utf8'))
      .then(str => JSON.parse(str));
  };

  obj.put = function (id,obj) {
    if (!id) throw new Error('id required');
    if (!obj) throw new Error('obj required');

    return S3.putObject({
      Bucket: opts.bucket,
      Key: id,
      Body: JSON.stringify(obj)
    }).promise();
  };

  obj.list = function () {
    return S3.listObjects({
      Bucket: opts.bucket,
      MaxKeys: 1000
    }).promise()
      .then(res => res.Contents.map(el => el.Key));
  };

  return obj;
};
