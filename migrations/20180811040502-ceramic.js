'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('ceramic', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    photo: {
      type: 'string',
    },
    tracking: {
      type: 'string',
    },
    weight: {
      type: 'decimal',
    },
    height: {
      type: 'decimal',
    },
    glaze: {
      type: 'string',
    },
    useremail: {
      type: 'string',
      foreignKey: {
        name: 'user_fk',
        table: 'user',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'email'}
    },
    date: {
      type: 'date'
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('ceramic');
  db.removeForeignKey('ceramic', 'user_ceramic_fk',
    {
      dropIndex: true,
    }, callback);
  

};

exports._meta = {
  "version": 1
};
