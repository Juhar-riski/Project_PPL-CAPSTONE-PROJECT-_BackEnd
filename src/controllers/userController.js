import { createUser, findNimUser, findEmailUser, comparePassword, findIdUser } from "../services/userService.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import convertToJson from "../utils/convertToJson.js";
import bcrypt from "bcrypt";

const registUserController = asyncWrapper (async (req, res) => {
    const { name, nim, email, numberPhone, password } =req.body;
    if( !name || !nim || !email || !numberPhone || !password){
        return res.status(400).json({
            status : "failed",
            message: "Input Yang Diberikan Tidak Valid."
        });
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const checkNimUser = await findNimUser(nim);
    if(checkNimUser){
        return res.status(409).json({
            status: "failed",
            message: "Nim Telah Digunakan."
        });
    };
    const checkEmailUser = await findEmailUser(email);
    if(checkEmailUser){
        return res.status(409).json({
            status: "failed",
            message: "E-mail Telah Digunakan."
        });
    }
    const userCreate = await createUser({
        name, 
        nim, 
        email, 
        numberPhone, 
        password: hashedPassword,
    });
    return res.status(201).json({
        status: 'success',
        data: convertToJson(userCreate)
    });
});

const loginController = asyncWrapper (async (req, res) => {
    const { nim, password } = req.body;
    if(!nim || !password){
        return res.status(400).json({
            status: 'failed',
            message: 'NIM atau password harus diisi.'
        });
    }
    const nimUser = await findNimUser(String(nim));
    if(!nimUser){
        return res.status(404).json({
            status: 'failed',
            message: 'NIM tidak ditemukan.'
        });
    }
    const validPass = await comparePassword(password, nimUser.password);
    if(!validPass){
        return res.status(403).json({
            status: 'failed',
            message: 'Password Salah.'
        });
    }
    return res.status(200).json({
        status: 'success',
        data: convertToJson(nimUser)
    });
});

const profileUserController = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const showProfileUser = await findIdUser(BigInt(id));
    if(!showProfileUser){
        return res.status(404).json({
            status: 'failed',
            message: 'Id Tidak Ditemukan.'
        });
    }
    return res.status(200).json({
        status: 'Succes',
        data: convertToJson(showProfileUser)
    });
});



export { registUserController, loginController, profileUserController }