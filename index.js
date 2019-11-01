const {db} = require('./server/db'); 
const app = require('./server')

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
db.sync().then(()=>{
  console.log("database synced");
  app.listen(port, ()=> console.log(`Your server, listening on port ${port}`)); 
})