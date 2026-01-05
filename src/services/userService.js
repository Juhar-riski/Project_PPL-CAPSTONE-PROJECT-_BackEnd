import { prisma } from "../config/db.js";
import bcrypt from "bcrypt"

const createUser = async (data) => {
    const { name, nim, email, numberPhone, password } = data;
    return await prisma.user.create({
        data: {name, nim, email, numberPhone, password}, 
    });
};

const findNimUser = async (nim) => {
    return await prisma.user.findUnique({ where : { nim },});
};

const findEmailUser = async (email) => {
    return await prisma.user.findUnique({
        where: {email: email},
    });
};

const comparePassword = async (password, hashedpassword) => {
    return bcrypt.compare(password, hashedpassword);
};

const findIdUser = async (id) => {
    return await prisma.user.findUnique({where: { id: id },});
};

export { createUser, findNimUser, findEmailUser, comparePassword, findIdUser }
