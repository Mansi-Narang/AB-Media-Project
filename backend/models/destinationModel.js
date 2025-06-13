import { model } from "mongoose";
import destinationSchema from "../schemas/destinationSchema.js";

const destinationModel = new model ("destination", destinationSchema);

export default destinationModel;