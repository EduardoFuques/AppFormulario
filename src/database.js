import pkg from 'mongoose';
const { connect} = pkg
import { DB_CONNECT } from './server.js'

connect(DB_CONNECT,{
    useNewUrlParser: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));