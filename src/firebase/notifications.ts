import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config";

const notificationsCollection = collection(db, "notifications");

export const createNotification = async (message: string) => {
  await addDoc(notificationsCollection, {
    message,
    read: false,
    createdAt: new Date(),
  });
};

export const getNotifications = async () => {
  const querySnapshot = await getDocs(notificationsCollection);
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const markAsRead = async (id: string) => {
  const notificationDoc = doc(db, "notifications", id);
  await updateDoc(notificationDoc, { read: true });
};
