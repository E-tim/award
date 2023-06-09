import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query } from "firebase/firestore"
import {getDownloadURL, ref,listAll } from 'firebase/storage'
import { db, storage } from '../../firebase'

const FemaleClassic = () => {

  const [list, setList] = useState([])

  useEffect(()=> {
    const q = query(collection(db, 'f-classic'))
    onSnapshot(q, (snapList)=> {
      setList(snapList.docs.map((doc)=> ({...doc.data(), id: doc.id})))
      // console.log(snapList.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    })
  }, [])

  const [imageURLs, setImageURLs] = useState([]);
  useEffect(()=>{
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, 'f-classic') ;
        const result = await listAll(storageRef);

        const imageURLPromises = result.items.map(async (item) => {
          // Retrieve the download URL for each image
          const url = await getDownloadURL(item);
          return url;
        });

        // Step 3: Store the image URLs in an array
        const imageUrls = await Promise.all(imageURLPromises);
        setImageURLs(imageUrls);
      } catch (error) {
        // Handle any errors that occur while retrieving images
        console.error(error);
      }
    };

    fetchImages();
  },[])

  let ress = Array.from(imageURLs, (val, index) => [val, list[index]])


  return (
    <div className='flex justify-center'>

      <div>
        {
          ress.map((item, index)=> (
            <div key={index} className='my-[50px]' >
              <img className='w-[100%] h-[450px]' src={item} alt='myalt' />
              <p className='text-center w-[200px] bg-[#bf80ff] p-5 text-[22px] text-[blue]'>Point: {item[1].point}</p>
            </div>
          ) )
        }
      </div>

    </div>
  )
}

export default FemaleClassic