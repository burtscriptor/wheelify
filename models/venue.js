const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    venueName: { type: String },
    wheelChairAdopted: { type: Boolean },
    wheelChairFriendly: { type: Boolean },
    designatedDisableParking: { type: Boolean },
    easyParkingNearby: { type: Boolean },
    hillsOnApproach: { type: Boolean },
    unevenPavementOnApproach: { type: Boolean },
    veganFriendly: { type: Boolean },
    glutenFree: { type: Boolean },
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
});


const venueSchema = new Schema({
    name: { type: String, required: true },
    foodType: { type: String },
    address: { type: String },
    reviews: [reviewSchema]
}, {
    timestamps: true,
    methods: {
        wheelChairAdopted() {
            let wheelChairAdoptedNum = 0;
            this.reviews.forEach(function (review) {
                if (review.wheelChairAdopted === true) {
                    wheelChairAdoptedNum++;
                }
            });

            return wheelChairAdoptedNum
           
        },
        totalNumReviews() {
            return this.reviews.length;
        },
        wheelChairFriendly() {
            let wheelChairFriendlyNum = 0;
            this.reviews.forEach(function (review) {
                if (review.wheelChairFriendly === true) {
                    wheelChairFriendlyNum++;
                }
            });
            return wheelChairFriendlyNum;
        },
        designatedDisableParking() {
            let designatedDisableParkingNum = 0;
            this.reviews.forEach(function (review) {
                if (review.designatedDisableParking === true) {
                    designatedDisableParkingNum++;
                }
            });
            return designatedDisableParkingNum;
        },
        easyParkingNearby() {
            let easyParkingNearbyNum = 0;
            this.reviews.forEach(function (review) {
                if (review.easyParkingNearby === true) {
                    easyParkingNearbyNum++;
                }
            });
            return easyParkingNearbyNum;
        },
        hillsOnApproach() {
            let hillsOnApproachNum = 0;
            this.reviews.forEach(function (review) {
                if (review.hillsOnApproach === true) {
                    hillsOnApproachNum++;
                }
            });
            return hillsOnApproachNum;
        },
        unevenPavementOnApproach() {
            let unevenPavementOnApproachNum = 0;
            this.reviews.forEach(function (review) {
                if (review.unevenPavementOnApproach === true) {
                    unevenPavementOnApproachNum++;
                }
            });
            return unevenPavementOnApproachNum;
        },
        veganFriendly() {
            let veganFriendlyNum = 0;
            this.reviews.forEach(function (review) {
                if (review.veganFriendly === true) {
                    veganFriendlyNum++;
                }
            });
            return veganFriendlyNum;
        },
        glutenFree() {
            let glutenFreeNum = 0;
            this.reviews.forEach(function (review) {
                if (review.glutenFree === true) {
                    glutenFreeNum++;
                }
            });
            return glutenFreeNum;
        }
    }
});



   // image: {type: String},
   // cloudinary_id: {type: String},

module.exports = mongoose.model('Venue', venueSchema);