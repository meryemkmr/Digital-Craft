let db = require('./models')


// db.user.create({
// firstName:'Meryem',
// lastName: 'Komur',
// email: 'meryem@meryem.com'
// })
// db.user.create({
// firstName:'Alina',
// lastName: 'Belova',
// email: 'meryem@meryem.com'
// })
// db.user.create({
// firstName:'Diego',
// lastName: 'Fisher',
// email: 'meryem@meryem.com'
// })



// db.user.findAll()
// .then((results)=>{
//     // console.log(results)
//     results.forEach(record=>{
//         console.log(`${record.firstName} ${record.lastName} ${record.email}`)
//     })
// })



// save data...


// db.user.findByPk(3)
//     .then(record => {
//         console.log(
//             record.id,
//             record.firstName, 
//             record.lastName, 
//             record.email);
//     })


// find all where...


// db.user.findAll({where: {firstName: 'Alina'}})
//     .then((results) => {
//         results.forEach(person => {
//             console.log(person.firstName, person.lastName);
//         });
//     })



// Delete row


// db.user.destroy({where: {id:2}})
//     .then((rowDeleted) => {
//         console.log(rowDeleted)
//         if( rowDeleted == 1){
//             console.log('Deleted successfully');
//         }
//     })


// let sequelize = db.sequelize;
// sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT })
//     .then(results => {
//         results.forEach(record => {
//             console.log(record.firstName);
//         })
//     })



// update date


db.user.findByPk(1)
.then(user =>{
    user.firstName = 'Mery';

    user.save()
    .then(()=>{
        console.log('record saved');
    })
})