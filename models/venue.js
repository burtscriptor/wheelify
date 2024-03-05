const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
   
    venueName: {String},
    wheelChairAdpoted: {type: Boolean},
    wheelChairFriendly: {type: Boolean},
    designatedDisableParking: {type: Boolean},
    easyParkingNearby: {type: Boolean},
    hillsOnApproach: {type: Boolean},
    unevenPavementOnApproach: {type: Boolean},
    vegenFriendly: {type: Boolean},
    glutenFree: {type: Boolean},
    comment: {String},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
        timestamp: true
    });

const venueSchema = new Schema ({
    name: {type: String, required: true},
    address: {type: String},
    reviews: [reviewSchema],
    }, {
    timestamps: true
    });

   // image: {type: String},
   // cloudinary_id: {type: String},

module.exports = mongoose.model('Venue', venueSchema);