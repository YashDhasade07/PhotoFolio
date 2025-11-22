// src/firebaseConfig/firestoreService.js
import { 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    doc,
    query,
    where,
    onSnapshot,
    serverTimestamp 
  } from 'firebase/firestore';
  import { db } from './firebase';
  
  // ==================== ALBUMS ====================
  
  // Create a new album
  export const createAlbum = async (albumName) => {
    try {
      const docRef = await addDoc(collection(db, 'albums'), {
        name: albumName,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, name: albumName };
    } catch (error) {
      console.error('Error creating album:', error);
      throw error;
    }
  };
  
  // Get all albums
  export const getAllAlbums = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'albums'));
      const albums = [];
      querySnapshot.forEach((doc) => {
        albums.push({ id: doc.id, ...doc.data() });
      });
      return albums;
    } catch (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
  };
  
  // Listen to albums in real-time (optional but recommended)
  export const subscribeToAlbums = (callback) => {
    return onSnapshot(collection(db, 'albums'), (snapshot) => {
      const albums = [];
      snapshot.forEach((doc) => {
        albums.push({ id: doc.id, ...doc.data() });
      });
      callback(albums);
    });
  };
  
  // ==================== IMAGES ====================
  
  // Create a new image
  export const createImage = async (imageData) => {
    try {
      const docRef = await addDoc(collection(db, 'images'), {
        ...imageData,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...imageData };
    } catch (error) {
      console.error('Error creating image:', error);
      throw error;
    }
  };
  
  // Get images by album ID
  export const getImagesByAlbum = async (albumId) => {
    try {
      const q = query(collection(db, 'images'), where('albumId', '==', albumId));
      const querySnapshot = await getDocs(q);
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() });
      });
      return images;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  };
  
  // Listen to images in real-time
  export const subscribeToImages = (callback) => {
    return onSnapshot(collection(db, 'images'), (snapshot) => {
      const images = [];
      snapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() });
      });
      callback(images);
    });
  };
  
  // Update an image
  export const updateImage = async (imageId, imageData) => {
    try {
      const imageRef = doc(db, 'images', imageId);
      await updateDoc(imageRef, imageData);
      return { id: imageId, ...imageData };
    } catch (error) {
      console.error('Error updating image:', error);
      throw error;
    }
  };
  
  // Delete an image
  export const deleteImage = async (imageId) => {
    try {
      await deleteDoc(doc(db, 'images', imageId));
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  };
  