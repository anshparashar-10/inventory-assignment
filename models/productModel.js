import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const productSchema = mongoose.Schema({
  Iname: {
    type: String,
  },
  category: {
    type: String,
  },
  Icode: {
    type: Number,
  },
  unit: {
    type: String,
  },
  OpStock: {
    type: Number,
  },
  LoStock: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, "book");

// const product = mongoose.model("books", productSchema);
// export default product;

export default mongoose.model("books", productSchema);
