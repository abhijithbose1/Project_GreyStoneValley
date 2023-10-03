const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema(
    {
        resortName: {
            type: String,
            unique: true,
            required: true,
        },
        location: { type: String },
        address: { type: String },
        contacts: { type: Array },
        description: { type: String },
        nearByActivities: { type: Array },
        amenities: { type: Array },
        inclutions: { type: Array },
        exclutions: { type: Array },
        offers: { type: Array },
        review: { type: Array },
        images: { type: Array },
        videos: { type: Array },
        events: { type: Array }

    }
);

module.exports = { Resort: mongoose.model('Resort', resortSchema) }

