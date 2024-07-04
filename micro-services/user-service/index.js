require('dotenv').config();
const connectDB = require('./config/database');
const app = require('./app');

const PORT = process.env.PORT || 3001;

connectDB();

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
