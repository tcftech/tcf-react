import React, { useState } from 'react'

export default function Imageupload() {

    const [images, setImages] = useState([]);

    const [imageUrls, setImageUrls] = useState("");

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls1 = files.map(file => URL.createObjectURL(file));
    
    setImageUrls(imageUrls1[0]);
    
   
  };

  const addimg=()=>{
    console.log(imageUrls);
    
    setImages([...images,imageUrls]);
  }

  return (
    <div>
        <input type="file" onChange={handleImageChange} />

        <button onClick={addimg}>submit</button>
      
     {
        images?.map((image, index) => (  
            <img src={image} alt={`uploaded-${index}`} style={{ width: '300px', height: '400px' }} />
        ))
     }

    </div>
  )
}
