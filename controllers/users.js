const Venue = require('../models/venue');

const index = async (request, respond) => {

    const reviews = await Venue.find({ 'reviews.user': request.user._id });
    console.log('This is', reviews, "this is request.user.id", request.user._id);
    const reviewShow = reviews.map(review => review.reviews).flat()
    console.log('this is review show', reviewShow);
    respond.render('users/dashboard', { title: 'Dashboard', reviewShow });
}
module.exports = {
    index,
}