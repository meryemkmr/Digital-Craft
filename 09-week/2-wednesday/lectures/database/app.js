// promise library

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
    database: 'testdb',
    user: 'postgres'

}

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);

console.log(db);

// db.query("SELECT * FROM restauranthouston WHERE category = 'BBQ'")
//   .then((results)=> {

//     console.log(results);
//     // results.forEach(function (r) {
//     //   console.log(r.id, r.name. r.address, r.category);
//     // });
//   });


// db.result("INSERT INTO pgpromise VALUES (DEFAULT,'MERYEM','HOUSTON');")
// .then((result)=> {
//     console.log(result);
//   });

//   db.result("INSERT INTO pgpromise VALUES (DEFAULT,'KAZIM','CHICAGO');")
//   .then((result)=> {
//       console.log(result);
//     });

// db.query("SELECT * FROM pgpromise")
//   .then((results)=> {
//     results.forEach((person)=>{
//         console.log(`Good Morning ${person.name}`)
//       });
    
//   })

// db.one("INSERT INTO pgpromise VALUES (DEFAULT,'ALINA','MOSCOW') RETURNING id")
//   .then((results)=> {
//     console.log(results);
//     db.query(`SELECT * FROM pgpromise WHERE id =${results.id}`)
//     .then((results)=> {
//     console.log(`return from query`);
    
//   })
//   console.log('record was inserted');
// })



// db.result("INSERT INTO pgpromise VALUES (DEFAULT,$1,$2) ",['ALINA','MOSCOW'])
//   .then((result)=> {
    
//   console.log('record was inserted');
// })


// db.result("INSERT INTO pgpromise VALUES (DEFAULT,$1,$2) ",['MELIKE','ERBIL'])
//   .then((result)=> {
    
//   console.log('record was inserted');
// })


let firstName = 'AYDIN';
let city = 'ANKARA';
db.result("INSERT INTO pgpromise VALUES (DEFAULT,$1,$2) ",[firstName,city])
  .then((result)=> {
    
  console.log('record was inserted');
})