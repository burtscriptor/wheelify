const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = New Schema ({
    reviewID: 
    userID:
    wheelChairAdpoted: {type: Boolean, required: true},
    wheelChairFriendly: {type: Boolean, required: false},
    designatedDisableParking: {type: Boolean, required: false},
    easyParkingNearby: {type: Boolean, required: false},
    hillsOnApproach: {type: Boolean, required: false},
    unevenPavementOnApproach: {type: Boolean, required: false},
    vegenFriendly: {type: Boolean, required: false},
    glutenFree: {type: Boolean, required: false},
    comment: {String},

})

const venueSchema = new Schema ({
    name: {type: String, required: true},
    address: {String, required: false},
    usersRecommending: [ ],
    comments: [],



})