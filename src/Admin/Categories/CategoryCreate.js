import React, { useState } from 'react';
import { addCategory } from '../../Redux/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

function CategoryCreate() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result); // Store the image data as a base64 string
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = {
      id: categories.length + 1,
      name,
      image, // Store the image data
    };
    dispatch(addCategory(newCategory));
    navigate('/categoryHome');
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-dark text-white p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleImageUpload}
                required
              ></input>
            </div>
            {image && (
              <div className="mt-2">
                <img src={image} alt="Uploaded" className="img-thumbnail" />
              </div>
            )}
            <br></br>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryCreate;
