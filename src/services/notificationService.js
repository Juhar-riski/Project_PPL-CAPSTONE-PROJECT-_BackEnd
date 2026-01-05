// services/notificationService.js
import { prisma } from "../config/db.js";

export const createNotification = async ({ userId, productId }) => {
  return prisma.notification.create({
    data: {
      userId,
      productId,
    },
  });
};

export const getUserNotifications = async (userId) => {
  return prisma.notification.findMany({
    where: { userId },
    include: {
      product: {
        select: {
          nameProduct: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const markNotificationRead = async (id) => {
  return prisma.notification.update({
    where: { id },
    data: { isRead: true, updatedAt: new Date(), },
  });
};

export const deleteNotif = async (id) => {
    return prisma.notification.delete({
        where: { id: id },
    });
};

export const findIdNotif = async (id) => {
  return prisma.notification.findUnique({
    where: { id: id },
  });
};