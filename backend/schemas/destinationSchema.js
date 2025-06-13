import { Schema } from "mongoose";

const destinationSchema = new Schema({
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
      startingPrice: {
        type: Number,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      highlights: {
        type: [String],
        default: []
      },
      rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
      }
    }, 
);

export default destinationSchema;