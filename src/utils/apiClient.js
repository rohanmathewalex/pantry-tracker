// src/utils/apiClient.js
import { getDatabase, ref, get } from 'firebase/database';
import { database } from '../firebase/firebase'; // Adjust path as needed

export const fetchPantryItems = async () => {
  const dbRef = ref(database, 'items');
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return {};
    }
  } catch (error) {
    console.error('Error fetching pantry items:', error);
    throw error;
  }
};
