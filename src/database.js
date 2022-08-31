import pkg from 'mongoose';
const { connect} = pkg
connect("mongodb://Tester:2021UN4M@192.100.186.58:27010/app",{
    useNewUrlParser: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));