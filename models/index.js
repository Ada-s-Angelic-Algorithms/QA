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
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
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
  id: {
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
    allowNull: true
  },
  date_written: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  asker_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  asker_email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  reported: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  helpful: {
    type: DataTypes.INTEGER,
    allowNull: true
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
    allowNull: true
  },
  date_written: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  answerer_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  answerer_email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  reported: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  helpful: {
    type: DataTypes.INTEGER,
    allowNull: true
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
    allowNull: true
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