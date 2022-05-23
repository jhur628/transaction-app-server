const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Server running...'))
});
