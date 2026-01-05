import asyncWrapper from "../utils/asyncWrapper.js";
import convertToJson from "../utils/convertToJson.js";
import { deleteNotif, getUserNotifications, markNotificationRead, findIdNotif } from "../services/notificationService.js";
import { putConfirmInProduct, findProductById } from "../services/productService.js";

export const getNotificationsController = asyncWrapper(async (req, res) => {
  const { userId } = req.params;

  const notifications = await getUserNotifications(BigInt(userId));

  return res.status(200).json({
    status: "success",
    data: convertToJson(notifications),
  });
});

export const readNotificationController = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const findId = await findIdNotif(BigInt(id));
  await putConfirmInProduct(BigInt(findId.productId));

  await markNotificationRead(BigInt(id));
  

  return res.status(200).json({
    status: "success",
    message: "Notification dibaca",
  });
});

export const deleteNotifController = asyncWrapper(async (req, res) => {
    const {id} = req.params;

    await deleteNotif(BigInt(id));

    return res.status(200).json({
        status: "success",
        message: "Notification dihapus",
    });
})