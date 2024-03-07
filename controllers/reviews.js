const Venue = require('../models/venue');

async function deleteReview(request, respond) {
  const review = await Venue.findOne({ 'reviews._id': request.params.id, 'reviews.user': request.user._id });
  review.reviews.remove(request.params.id);
  await review.save();
  respond.redirect(`/users/dashboard`);
}

const create = async (request, respond) => {
  const venue = await Venue.findById(request.params.id);
  
  request.body.user = request.user._id;
  request.body.userName = request.user.name;
  request.body.userAvatar = request.user.avatar;

  venue.reviews.push(request.body);
  try {
    await venue.save();
  } catch (err) {
    console.log(err);
  }

  respond.redirect('/venues');
}

const newReview = async (request, respond) => {
  respond.render('reviews/new', { title: 'Add a Review'} );
}

module.exports = {
  create,
  delete: deleteReview,
  new: newReview,
}
