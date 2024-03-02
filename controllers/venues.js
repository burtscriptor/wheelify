//const Venues = require('..model/venues');



const index = (request, respond) => {
    respond.render('venues/index', { title: 'Venues' });
}

const newVenue = (request, respond) => {
    respond.render('venues/new', { title: 'Add Venue'});
}
module.exports = {
    index,
    new: newVenue,
}