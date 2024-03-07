const Venue = require('../models/venue');


const index = async (request, respond) => {

    const reviews = await Venue.find({ 'reviews.user': request.user._id });
    console.log('This is reviews = ', reviews, "this is request.user.id =", request.user._id);
    const reviewShow = reviews.map(review => review.reviews).flat()
    console.log('this is review show= ', reviewShow);
    console.log('this is userName=  ', reviewShow.userName);
    respond.render('users/dashboard', { title: 'Dashboard', reviewShow });
}

const edit = async (request, respond) => {
   
    const review = await Venue.find({ 'reviews._id': request.params.id })
    console.log('this is review', review)
    const reviewIds = review.map(review => review.reviews).flat()
    console.log('this is Rids', reviewIds);
    //const singleReview = reviewIds.map( (review) => review.filter((r)=> r._id === request.params.id ))
    const singleReview = reviewIds.filter( (review) => review._id == request.params.id)
    //console.log('from edit this is req.P.id=', request.params.id);
    console.log('this is review from edit=', singleReview)
    respond.render('users/edit', { title: 'Edit Review', singleReview: singleReview });
}

const update = async(request, respond) => {
    console.log('this is reqpID from update', request.params)
    console.log('this is reqpbody from update', request.body)
    

    const venue = await Venue.findOne(
        { 'reviews._id': request.params.id },
        
    );
    const reviewIndex = venue.reviews.findIndex(r => r._id.equals(request.params.id))
    venue.reviews.splice(reviewIndex, 1)
    const newReview = {}
    for(let key in request.body) {
        newReview[key]=!!request.body[key];
    }
    newReview.comment = request.body.comment;
    newReview.venueName = request.body.venueName;
    newReview.user = request.user;
    venue.reviews.push(newReview);
    await venue.save();

    
    respond.redirect('/users/dashboard');
}
module.exports = {
    index,
    edit,
    update
}