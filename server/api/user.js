const Sequelize = require('sequelize');

const db = require('./db');

const User = db.define('user', {
}, {
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
});

// instance methods
User.prototype.correctPassword = function (candidatePassword) {

};

// class methods
User.generateSalt = function () {
  
};

User.encryptPassword = function (plainText, salt) {
  
};

function setSaltAndPassword (user) {
  
}

module.exports = User;
Hint: