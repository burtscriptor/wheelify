const Venue = require('../models/venue');
//const cloudinary = require('../utilies/cloudinary');

const index = async (request, respond) => {
    const venues = await Venue.find({});
    console.log("this is ", venues);
    respond.render('venues/index', { title: 'Venues', venues: venues });
}

const show = async (request, respond) => {
   
    const venue = await Venue.findById(request.params.id);
    respond.render('venues/show', { title:`${venue.name}`, venue: venue});
    console.log("this is", request.params.id);
}

const newVenue = (request, respond) => {
    respond.render('venues/new', { title: 'Add Venue'});
}

const create = async(request, respond) => {
    console.log(request.body);
    try { 
        // const result = await cloudinary.upload(request.file.path);
        // console.log(result);
        // const venue = await new Venue({
        //     ...request.body,
        //     image: result.secure_url,
        //     cloudinary_id: result.public_id
        //})
        const venue = await Venue.create(request.body);
        respond.redirect(`/venues`);
    } catch {
        console.log(err);
        respond.redirect('venues/new', { errorMsg: err.message });
    }
}

module.exports = {
    index,
    new: newVenue,
    create,
    show,
}