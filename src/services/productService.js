import { prisma } from "../config/db.js";


const createProduct = async (data) => {
    const {nameProduct, location, category, description, userId, urlGambar} = data;
    return prisma.product.create({
        data: {nameProduct, location, category, description, userId, urlGambar},
    });
};

const getProductByConfirmFalse = async () => {
    return await prisma.product.findMany({
        where: { 
            confirm: false,
        },
        include: { user: { select: {name: true,},},},
    });
};

const deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: { id: id,},
    });
};

const findProductById = async (id) => {
    return await prisma.product.findUnique({
        where : { id: id,},
    });
};

const findProductByUserId = async (userId) => {
    return await prisma.product.findMany({
        where : { 
            userId: userId,
        },
    });
};


const getProdAndWhatsApp = async (id) => {
    return prisma.product.findUnique({
        where: { id: id },
        include: {
            user: {
                select: {
                    name: true,
                    numberPhone: true,
                },
            },
        },
    });
};

const putConfirmInProduct = async (productId) => {
    return prisma.product.update({
        where: { id: productId },
        data: { confirm: true, updatedAt: new Date() },
    });
};


export { 
    createProduct,
    getProductByConfirmFalse,
    deleteProduct,
    findProductById,
    findProductByUserId,
    getProdAndWhatsApp,
    putConfirmInProduct
};