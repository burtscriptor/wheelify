require('dotenv').config();
require('./config/database');

const Venue = require('./models/venue');


// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

(async function() {
    let results = await Venue.deleteMany({});
    // results will be whatever the promise
    // returned by the deleteMany method resolves to
    console.log(results);
    
    const venuesPromise = Venue.create(data.venues);
  

  results = await Promise.all([venuesPromise]);

  console.log('Venues created', results[0]);
  

  

  
  
    // Lastly, use process.exit() to "cleanly" shut down the Node program
    process.exit();
  })();