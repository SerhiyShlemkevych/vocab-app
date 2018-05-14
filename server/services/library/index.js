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
const { includes } = require('lodash');

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

const incWordPriority = async (id) => {
  const library = await db.get('library');
  const target = library.find(item => item.id == id);
  target.priority++;
  await db.put('library', library);
}

const decWordPriority = async (id) => {
  const library = await db.get('library');
  const target = library.find(item => item.id == id);
  target.priority--;
  await db.put('library', library);
}

const markWordsRevised = async (ids) => {
  const now = new Date();
  const library = await db.get('library');
  library.filter(item => includes(ids, item.id))
    .forEach(item => {
      item.revisedDate = now;
    });
  await db.put('library', library);
}

const get = async () => {
  return db.get('library');
};

module.exports = {
  get,
  markWordsRevised,
  incWordPriority,
  decWordPriority
};
