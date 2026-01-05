import  Express  from "express";
import { registUserController, loginController, profileUserController } from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import { registerSchema, loginSchema } from "../utils/userSchema.js";


const userRouter = Express.Router();

userRouter.post('/registUsers',validate(registerSchema), registUserController);
userRouter.post('/loginUsers',validate(loginSchema), loginController);
userRouter.get('/profileUsers/:id', profileUserController);
export default userRouter;