import product from "../models/productModel.js";

export const addData = async (request, response) => {
  //   const data = request.body;
  try {
    const { Iname, category, Icode, unit, OpStock, LoStock, price } =
      request.body;

    const newProd = new product({
      Iname,
      category,
      Icode,
      unit,
      OpStock,
      LoStock,
      price,
    }).save();

    response.status(201).send({
      success: true,
    });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }

  //   const newProduct = new product(data);
  //   try {
  //     await newProduct.save();
  //     response.status(201).json(newUser);
  //   } catch (error) {
  //     response.status(409).json({ message: error.message });
  //   }
};

export const getData = async (request, response) => {
  try {
    const datas = await product.find({});
    response.status(200).json(datas);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const getDat = async (request, response) => {
  try {
    const data = await product.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editdata = async (request, response) => {
  let prod = request.body;
  const editdata = new product(prod);

  try {
    await product.updateOne({ _id: request.params.id }, editdata);
    response.status(201).json(editdata);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (req, res) => {
  try {
    await product.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Deleted !~" });
  } catch (error) {
    console.log(error);
  }
};
