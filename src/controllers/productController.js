import fs from "fs";
import convertToJson from "../utils/convertToJson.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import { 
  createProduct, 
  getProductByConfirmFalse, 
  deleteProduct, 
  findProductById,
  findProductByUserId,
  getProdAndWhatsApp,
  putConfirmInProduct 
} from "../services/productService.js";
import { findIdUser } from "../services/userService.js";
import { createNotification } from "../services/notificationService.js";

const createProductController = asyncWrapper(async (req, res) => {
  const { nameProduct, location, category, description, userId } = req.body;

  // Validasi body
  if (!nameProduct || !location || !category || !description || !userId) {
    if (req.file) fs.unlinkSync(req.file.path);

    return res.status(400).json({
      status: "failed",
      message: "Input yang diberikan tidak valid",
    });
  }

  // Validasi file
  if (!req.file) {
    return res.status(400).json({
      status: "failed",
      message: "Gambar wajib diupload",
    });
  }

  const product = await createProduct({
    nameProduct,
    location,
    category,
    description,
    userId: BigInt(userId),
    urlGambar: `/uploads/${req.file.filename}`,
  });

  return res.status(201).json({
    status: "success",
    data: convertToJson(product),
  });
});

const getProductHomepageController = asyncWrapper ( async (req, res) => {
  const getProductHomepage = await getProductByConfirmFalse()
  if(!getProductHomepage){
    return res.status(404).json({
      status: 'failed',
      message: 'Belum Ada Barang Donasi.'
    });
  }
  return res.status(200).json({
    status: 'Succes',
    data: convertToJson(getProductHomepage)
  });
})

const deleteProductController = asyncWrapper (async (req, res) => {
  const {id} = req.params;
  const findId = await findProductById(BigInt(id));
  if(!findId){
    return res.status(404).json({
      status: 'failed',
      message: 'Id tidak ditemukan.'
    });
  }
  await deleteProduct(BigInt(id));
  return res.status(200).json({
    status: 'Succes',
    message: 'Product berhasil dihapus.'
  });
})

const findProductByUserIdController = asyncWrapper(async (req, res) => {
  const {id} = req.params;
  const findUserId = await findIdUser(BigInt(id));
  if(!findUserId){
    return res.status(404).json({
      status: 'failed',
      message: 'Id Tidak Ditemukan.'
    });
  }
  const findProdUser = await findProductByUserId(BigInt(id));
  if(!findProdUser){
    return res.status(404).json({
      status: 'failed',
      message: 'Barang Donasi Belum Ada.'
    });
  }
  return res.status(200).json({
    status: 'Succes',
    data: convertToJson(findProdUser)
  });
});

const redirectToWaController = asyncWrapper(async (req, res) => {
  const {id} = req.params;

  const product = await getProdAndWhatsApp(BigInt(id));
  if(!product || !product.user?.numberPhone) {
    return res.status(404).json({
      status: "failed",
      message: "Barang atau nomor WhatsApp tidak ditemukan",
    });
  }

  await createNotification({
    userId: BigInt(product.userId), //pemilik brg
    productId: BigInt(product.id),
  });

  // Format nomor (Indonesia)
  let phone = product.user.numberPhone;
  if (phone.startsWith("0")) {
    phone = "62" + phone.slice(1);
  }

  const message = encodeURIComponent(
    `Halo ${product.user?.name}, saya pengguna aplikasi UniGive, dan saya tertarik dengan barang "${product.nameProduct}". Apakah masih tersedia?`
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return res.redirect(302, whatsappUrl);
});

const updateConfirmController = asyncWrapper(async (req, res) => {
  const {id} = req.params;
  const findProdById = await findProductById(BigInt(id));
  if(!findProdById){
    return res.status(404).json({
      status: 'failed',
      message: 'Barang Donasi Belum Ada.'
    });
  }
  const updateProd = await putConfirmInProduct(BigInt(id));
  return res.status(200).json({
    status: 'succes',
    data: convertToJson(updateProd)
  });
});



export { 
  createProductController, 
  getProductHomepageController, 
  deleteProductController,
  findProductByUserIdController,
  redirectToWaController,
  updateConfirmController
};