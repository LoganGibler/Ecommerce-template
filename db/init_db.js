const { client } = require("./index")

async function dropTables(){
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS users;
        `)
    } catch (error) {
        
    }
}
async function buildTables(){
    try {
        console.log("Starting to build tables")
        await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            cart INTEGER
        );
        `)
        console.log("Finished building tables")
    } catch (error) {
        throw error
    }
}

async function createInitialUsers(){
    try {
        
    } catch (error) {
        
    }
}

async function rebuildDB(){
    try {
        console.log("starting to build DB")
        client.connect();
        await dropTables()
        await buildTables()
    } catch (error) {
        console.log("error during rebuild DB")
        throw error
    }
}

rebuildDB()
    .catch(console.error)
    .finally(()=>client.end())