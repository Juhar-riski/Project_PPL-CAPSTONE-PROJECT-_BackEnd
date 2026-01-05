import userRouter from "./userRouter.js";
import productRouter from "./productRouter.js";
import notif from "./notificationRouter.js";

const configureRoutes = (app) => {
    app.use('/api', userRouter);
    app.use('/api', productRouter);
    app.use('/api', notif);
};

export default configureRoutes;