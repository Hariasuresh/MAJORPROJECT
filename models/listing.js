const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    description: String,
    image: {
        type:String,
        default:
            "https://unsplash.com/photos/silhouette-of-trees-near-body-of-water-during-sunset-lsoogGC_5dg",
        set: (v) =>v ===""
        ? "https://unsplash.com/photos/silhouette-of-trees-near-body-of-water-during-sunset-lsoogGC_5dg" 
        :v,
    }, 
    price: String,
    location: String,
    country: String,
});

const Listing =mongoose.model("Listing", listingSchema);
module.exports = Listing;