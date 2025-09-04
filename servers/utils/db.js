const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log('ConnectDB !!!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = ConnectDB