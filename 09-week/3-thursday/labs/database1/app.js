const promise = require('bluebird')
// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
}

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'practice',
    user: 'postgres'
};

//load and init pg-promise

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);
console.log(db);


// db.query("SELECT * FROM restaurants WHERE name = 'BAHN MI'")
// .then((results)=>{
//     console.log(results);
// })


// db.result("INSERT INTO pgpromise VALUES (DEFAULT, 'Kazim','Chicago');")
// .then((result)=>{
//     console.log(result);
// });


// db.query("SELECT * FROM pgpromise")
// .then((results)=>{
//     results.forEach((person)=>{
//         console.log(`Good Morning ${person.name}`);
//     })
// })


db.one("INSERT INTO pgpromise VALUES (DEFAULT, 'Alina','Moscow') RETURNING id")
.then((result)=>{
    console.log(result);
    db.query(`SELECT * FROM pgpromise WHERE id = ${result.id}`)
    .then((results)=>{
        console.log(`return from query`);
    })
    console.log('record was inserted');
})