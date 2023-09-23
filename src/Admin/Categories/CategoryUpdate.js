import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCategory } from '../../Redux/CategorySlice';
import Sidebar from '../Sidebar';

function CategoryUpdate() {
  const { id } = useParams();
  const categories = useSelector((state) => state.categories);
  const existingCategory = categories.find((category) => category.id === parseInt(id));
  const defaultName = existingCategory ? existingCategory.name : '';
  const defaultImage = existingCategory ? existingCategory.image : '';
  

  const [name, setName] = useState(defaultName);
  const [image, setImage] = useState(defaultImage);
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

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateCategory({
        id: parseInt(id),
        name,
        image, // Store the image data
      })
    );
    navigate('/categoryHome');
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-dark text-white p-5">
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleImageUpload}
              ></input>
            </div>
            {image && (
              <div className="mt-2">
                <img src={image} alt="Uploaded" className="img-thumbnail" />
              </div>
            )}
            <br></br>
            <button className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryUpdate;
