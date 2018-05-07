const fs = require('fs');
const globby = require('globby');
const {
  promisifyAll,
  promisify,
  map: promiseMap
} = require('bluebird');
const config = require('config');
const path = require('path');
const db = require('../../db');
const uuid = require('uuid').v4;

let getMetadata = require('musicmetadata');
getMetadata = promisify(getMetadata);


const patch = async (items) => {
  const patchedItems = db.get('library')
    .map(target => {
      const patchData = items.find(i => i.id === target.id);
      return patchData
        ? {
          ...target,
          ...patchData
        }
        : target
    });
};

const get = async () => {
  return db.get('library');
};

module.exports = {
  get
};
