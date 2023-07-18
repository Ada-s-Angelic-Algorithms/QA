const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

const Product = db.define('Product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  slogan: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  default_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

const Question = db.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date_written: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  reported: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  question_helpfulness: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false
});

const Answer = db.define('Answer', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  reported: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  helpfulness: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: false
  }
}, {
  timestamps: false
});

const AnswerPhoto = db.define('AnswerPhoto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  answer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING(256),
    allowNull: false
  }
}, {
  timestamps: false
});

Product.hasMany(Question, { foreignKey: 'product_id' });
Question.belongsTo(Product, { foreignKey: 'product_id' });

Question.hasMany(Answer, { foreignKey: 'question_id' });
Answer.belongsTo(Question, { foreignKey: 'question_id' });

Answer.hasMany(AnswerPhoto, { foreignKey: 'answer_id' });
AnswerPhoto.belongsTo(Answer, { foreignKey: 'answer_id' });

module.exports = {Product, Question, Answer, AnswerPhoto}