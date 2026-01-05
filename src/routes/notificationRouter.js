import express from "express";
import {
  getNotificationsController,
  readNotificationController,
  deleteNotifController
} from "../controllers/notificationController.js";

const notif = express.Router();

notif.get("/notifications/:userId", getNotificationsController);
notif.put("/notifications/:id/read", readNotificationController);
notif.delete("/notifications/:id/delete", deleteNotifController);


export default notif;