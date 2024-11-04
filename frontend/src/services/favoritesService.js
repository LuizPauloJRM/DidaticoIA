import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const favoritesCollection = collection(db, "favorites");

export const addFavorite = async (userId, favoriteData) => {
  await addDoc(favoritesCollection, {
    userId,
    ...favoriteData,
  });
};

export const removeFavorite = async (favoriteId) => {
  await deleteDoc(doc(favoritesCollection, favoriteId));
};

export const getFavorites = async (userId) => {
  const snapshot = await getDocs(favoritesCollection);
  return snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((favorite) => favorite.userId === userId); // Filtrar pelos favoritos do usuário
};
