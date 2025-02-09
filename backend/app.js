import sequelize from "./config/db.js"



sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync()
    .then(() => {
        console.log('Database synchronized successfully!');
    })
    .catch(err => {
        console.error('Database sync failed:', err);
    });