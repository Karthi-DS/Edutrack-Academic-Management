import sequelize from "./config/db.js"

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized successfully!');
    })
    .catch(err => {
        console.error('Database sync failed:', err);
    });