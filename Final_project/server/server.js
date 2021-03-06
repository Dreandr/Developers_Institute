/*

Routes:

/ --> res = this is working

/signin --> POST  success/fail

/register --> POST = user

/profile/:userId --> GET = user


*/

const express = require('express');

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt-nodejs');

const cors = require('cors');

const knex = require('knex');


const app = express();


app.use(bodyParser.json());

app.use(cors());


//CONNECT TO LOCAL POSTGRESQL DATABASE
const db = knex({

     client: 'pg',
     connection: {
     host : '127.0.0.1',
     user : '',
     password : '1234567890',
     database : 'wordz_database'

    }

  });




  //Test DB Connection
  //console.log(db.select('*').from('users'));

  //Get Users data from Database
  db.select('*').from('accounts').then(data => {
    console.log('Users:', data);
  });




//Root Route
app.get('/', (req, res) => {

    // res.send('this is working');

    //response with the users database
    res.send(database.accounts);
})



//Check the input from the frontend sign in from with the user data from the database
app.post('/signin', (req, res) => {


    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      // console.log(isValid);
      if(isValid){
       return db.select('*').from('accounts')
        .where('email', '=', req.body.email)
        .then(user => {
          res.json(user[0])
        })
         .catch(err => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json("wrong credentials")
      }
    })
     .catch(err => res.status(400).json('wrong credentials'))



})




//Check input from the frontend register form with the data in the database, insert the data in the database
app.post('/register', (req, res) => {

    //Destructure the request from the body
    const { email, name, password } = req.body;

    //Security in server
    if(!email || !name || !password){
      return res.status(400).json('incorrect form submission');
    }

    //Bcrypt Hash
    const hash = bcrypt.hashSync(password);

    db.transaction(trx => {
        trx.insert({
          hash: hash,
          email: email

        })
         .into('login')
         .returning('email')
         .then(loginEmail => {
           return  trx('accounts')
           .returning('*')
           .insert({
             email: loginEmail[0],
             name: name,
             joined: new Date()
           })
            .then(user => {
              res.json(user[0]);
            })
         })
         .then(trx.commit)
         .catch(trx.rollback)
      })


       .catch(err => res.status(400).json('unable to register'));
})




//Profile params Route
app.get('/profile/:id', (req, res)=> {

    const { id } = req.params;

    db.select('*').from('accounts').where({id})
  .then(user => {
    if(user.length){
      res.json(user[0]);
    } else{
      res.status(400).json('Not found')
    }
  })
   .catch(err => res.status(400).json('Error getting user'))
})
//TEST ON BROWSER: http://localhost:3001/profile/1




app.listen(3001, ()=> {
    console.log('app is running on port 3001')
})
