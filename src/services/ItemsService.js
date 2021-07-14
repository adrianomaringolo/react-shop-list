import { db } from "./../firebase";

const itemsRef = db.collection("items");

export const ItemsService = {
  getItems: async () => {
    let result = [];
    const snapshot = await itemsRef.get();
    
    // change to create a ID attribute
    snapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });

    return result;
  },
  addItem: async (itemText) => {
    return await itemsRef.doc().set({
      text: itemText,
      checked: false,
      createdAd: new Date().toISOString(),
    });
  },
  checkItem: async (itemId, checked) => {
    return await itemsRef.doc(itemId).update({
      checked,
      updatedAt: new Date().toISOString(),
    });
  },
  removeItem: async (itemId) => await itemsRef.doc(itemId).delete(),
  removeAll: async () => {
    (await itemsRef.get()).forEach(async (doc) => {
      await itemsRef.doc(doc.id).delete()
    });
  },
};
