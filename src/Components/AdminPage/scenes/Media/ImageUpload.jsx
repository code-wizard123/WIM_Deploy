import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function ImageUpload({ name }) {
  const [image, setImage] = useState("");
  const [converted, setConverted] = useState(false);

  function convertToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
        setConverted(true);
      };
      reader.onerror = (error) => {
        console.error("Error:", error);
      };
    }
  }

  // Function to handle the image upload
  const uploadImage = async () => {
    try {
      // Send a POST request to your Express backend
      const response = await axios.post('/upload/upload', { image });
      console.log('Request data:', response.config.data);
      console.log('Response data:', response.data);

    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="auth-wrapper" style={{ textAlign: 'center' }}>
      <div className="auth-inner" style={{ width: "auto" }}>
        <h2>{name}</h2>
        <br />
        <input
          className='btn1'
          accept="image/*"
          type="file"
          onChange={convertToBase64}
          style={{ marginBottom: '20px' }}
        />
        <br />
        <button
          className='btn1'
          onClick={() => setConverted(!converted)}
          type="button"
        >
          {converted ? "Hide Image" : "Show Image"}
        </button>
        <br />
        {/* Add an Upload button that calls the uploadImage function */}
        <button
          className='btn1'
          onClick={uploadImage}
          type="button"
        >
          Upload Image
        </button>
        <br />
        {converted && image && (
          <img
            width={screen.width / 2}
            height={screen.height / 2}
            src={image}
            alt="Converted to Base64"
            style={{ marginTop: '20px' }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
