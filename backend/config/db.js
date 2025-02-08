import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a Sequelize instance using values from .env
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, 
    dialect: process.env.DB_DIALECT, 
    logging:false
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Sync models (optional based on your needs)
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized successfully!');
    })
    .catch(err => {
        console.error('Database sync failed:', err);
    });


export default sequelize