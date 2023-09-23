import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { addProduct } from '../../Redux/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductCreate() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate here

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
    const newProduct = {
      id: products.length + 1, // Fix the typo here
      name,
      price,
      image,
      description,
    };
    dispatch(addProduct(newProduct));
    navigate('/productHome'); // Use navigate here to navigate to '/productHome'
  };

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-dark text-white p-5">
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor='name'>Name </label>
              <input type='text' name='name' placeholder = "Enter Product Name" className='form-control' onChange={(e) =>setName(e.target.value)} required></input>
            </div>
            <div>
              <label htmlFor='price'>Price </label>
              <input type='text' name='price' placeholder = "Enter Product Price" className='form-control' onChange={(e) => setPrice(e.target.value)} required></input>
            </div>
            <div>
              <label htmlFor='image'>Image </label>
              <input type='file' accept='/image' name='name'   className='form-control' onChange={handleImageUpload}  required></input>
            </div>
           
            <div>
              <label htmlFor='description'>Description </label>
              <input type='text' name='description' placeholder = "Enter Product Description" className='form-control' onChange={(e) => setDescription(e.target.value)} required></input>
              <br></br>
              <button className='btn btn-primary'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
