
import { Schema } from "mongoose";

const tourPackageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    startingPrice: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        default: null
    },
    imageUrl: {
        type: String,
        required: true
    },
    highlights: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        enum: ['Cultural', 'Adventure', 'Beach', 'Hill Station', 'Wildlife', 'Pilgrimage', 'Heritage'],
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },   
});

export default tourPackageSchema;