import express from "express";
import upload from "../middlewares/upload.js";
import { 
  createProductController, 
  getProductHomepageController, 
  deleteProductController,
  findProductByUserIdController,
  redirectToWaController,
  updateConfirmController 
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/products", upload.single("image"), createProductController);
productRouter.get('/products', getProductHomepageController);
productRouter.delete('/products/:id', deleteProductController);
productRouter.get('/products/:id', findProductByUserIdController);
productRouter.get('/products/:id/whatsapp', redirectToWaController);
productRouter.put('/products/:id', updateConfirmController);


export default productRouter;