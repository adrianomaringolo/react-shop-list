import { db } from './../firebase'

const itemsRef = db.collection('items')

export const ItemsService = {
  getItems: async () => {
    let result = []
    const snapshot = await itemsRef.orderBy('name').get()
    
    if (snapshot.empty) {
      throw Error('No matching results')
    }

    // change to create a ID attribute
    snapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() })
    })

    return result
  },
  addItem: async (item) => {
    return await itemsRef.doc().set({
      ...item,
      updatedAt: new Date(),
    })
  },
  editItem: async (item) => {
    return await itemsRef.doc(activity.id).update({
      ...item,
      updatedAt: new Date(),
    })
  },
  removeItem: async (activityId) => await itemsRef.doc(activityId).delete(),
}
