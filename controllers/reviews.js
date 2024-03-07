const Venue = require('../models/venue');

async function deleteReview(request, respond) {
 
  const review = await Venue.findOne({ 'reviews._id': request.params.id, 'reviews.user': request.user._id });
  
  review.reviews.remove(request.params.id);
  
  await review.save();
  
  respond.redirect(`/venues/${review._id}`);
}


const create = async (request, respond) => {
const venue = await Venue.findById(request.params.id);
 console.log("this is request", request.params.id)
  request.body.user = request.user._id;
  request.body.userName = request.user.name;
  request.body.userAvatar = request.user.avatar;

  venue.reviews.push(request.body);
  try {
    // Save any changes made to the movie doc
    await venue.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  respond.redirect('/venues');
}

// }

const newReview = async (request, respond) => {
    respond.render('reviews/new', { title: 'Add a Review'} );
}

module.exports = {
    create,
    delete: deleteReview,
    new: newReview,
}

