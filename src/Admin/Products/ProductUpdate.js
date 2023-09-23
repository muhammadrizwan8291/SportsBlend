import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../Redux/ProductSlice';

function ProductUpdate() {
  const { id } = useParams(); // Move useParams inside the component function
  const products = useSelector((state) => state.products);
  const existingProduct = products.find((product) => product.id === parseInt(id));

  // Set default values based on the existing product or empty strings if no product found
  const defaultName = existingProduct ? existingProduct.name : '';
  const defaultPrice = existingProduct ? existingProduct.price : '';
  const defaultDescription = existingProduct ? existingProduct.description : '';
  const defaultImage = existingProduct ? existingProduct.image : '';

  const [name, setName] = useState(defaultName);
  const [price, setPrice] = useState(defaultPrice);
  const [description, setDescription] = useState(defaultDescription);
  const [image, setImage] = useState(defaultImage);
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Move useNavigate inside the component function

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result); // Store the image data as a base64 string
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: parseInt(id),
        name,
        price,
        description,
        image,
      })
    );
    navigate('/productHome'); // Use navigate here to navigate to '/productHome'
  };

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-dark text-white p-5'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name </label>
              <input
                type='text'
                name='name'
                placeholder='Enter Product Name'
                className='form-control'
                value={name} // Use value to set the controlled input
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor='price'>Price </label>
              <input
                type='text'
                name='price'
                placeholder='Enter Product Price'
                className='form-control'
                value={price} // Use value to set the controlled input
                onChange={(e) => setPrice(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor='image'>Image </label>
              <input
                type='file'
                accept='image/*' // Correct the 'accept' attribute
                name='image' // Change the name attribute
                className='form-control'
                onChange={handleImageUpload}
                required
              ></input>
            </div>

            <div>
              <label htmlFor='description'>Description </label> {/* Correct the label text */}
              <input
                type='text'
                name='description'
                placeholder='Enter Product Description'
                className='form-control'
                value={description} // Use value to set the controlled input
                onChange={(e) => setDescription(e.target.value)}
                required
              ></input>
              <br></br>
              <button className='btn btn-primary'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;
