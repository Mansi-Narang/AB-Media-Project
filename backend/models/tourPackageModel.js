import { model } from "mongoose";
import tourPackageSchema from "../schemas/tourPackageSchema.js";
const tourPackages = new model('Tour Package', tourPackageSchema);
export default tourPackages;