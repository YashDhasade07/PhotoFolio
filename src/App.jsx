import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar'
import AlbumsList from './components/AlbumsList/AlbumsList'
import ImagesList from './components/ImagesList/ImagesList'
import Spinner from 'react-spinner-material';

import {
  createAlbum as createAlbumInDB,
  subscribeToAlbums,
  createImage as createImageInDB,
  subscribeToImages,
  updateImage as updateImageInDB,
  deleteImage as deleteImageFromDB
} from './firebaseConfig/firestoreService';

function App() {
  const [albums, setAlbums] = useState([])
  const [images, setImages] = useState([])
  const [albumId, setAlbumId] = useState(null)
  const [loading, setLoading] = useState(true);

  // Subscribe to albums collection with real-time updates
  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToAlbums((fetchedAlbums) => {
      setAlbums(fetchedAlbums);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Subscribe to images collection with real-time updates
  useEffect(() => {
    const unsubscribe = subscribeToImages((fetchedImages) => {
      setImages(fetchedImages);
    });

    return () => unsubscribe();
  }, []);

  const createAlbum = async (name) => {
    try {
      await createAlbumInDB(name);
      toast.success('Album created successfully!');
    } catch (error) {
      console.error('Failed to create album:', error);
      toast.error('Failed to create album. Please try again.');
    }
  };

  const deleteImage = async (id) => {
    try {
      await deleteImageFromDB(id);
      toast.success('Image deleted successfully!');
    } catch (error) {
      console.error('Failed to delete image:', error);
      toast.error('Failed to delete image. Please try again.');
    }
  };

  // useEffect(()=>console.log(image),[image])
  
 // Handle both image creation and update
  const uploadImages = async (data, id) => {
    try {
      if (id) {
        await updateImageInDB(id, data);
        toast.success('Image updated successfully!');
      } else {
        await createImageInDB(data);
        toast.success('Image added successfully!');
      }
    } catch (error) {
      console.error('Failed to upload image:', error);
      toast.error('Failed to upload image. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh'
        }}>
          <Spinner radius={120} color={"#0077ff"} stroke={6} visible={true} />
        </div>
      ) : albumId
        ? <ImagesList images={images.filter((image) => image.albumId === albumId)} uploadImages={uploadImages} albumId={albumId} setAlbumId={setAlbumId} deleteImage={deleteImage} />
        : <AlbumsList albums={albums} createAlbums={createAlbum} setAlbumId={setAlbumId} />
      }

    </>
  )
}

export default App
