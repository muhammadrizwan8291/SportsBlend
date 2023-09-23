import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCategory } from '../../Redux/CategorySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar';

function CategoryHome() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  const handleDelete = (id) => {
    dispatch(deleteCategory({ id: id }));
  }

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='container'>
        <Link to="/categoryCreate" className='btn btn-success my-3'>Create+</Link>
        <div className='table-responsive'>
          <table className='table table-sm justify-content-center'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    {category.image && (
                      <img
                        src={category.image}
                        alt={`Category ${category.id}`}
                        className="img-thumbnail" style={{width : '10%', height: '20%'}} // Apply the small-image class
                      />
                    )}
                  </td>
                  <td>
                    <Link to={`/categoryUpdate/${category.id}`} className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
                    <button onClick={() => handleDelete(category.id)} className='btn btn-sm btn-danger ns-2'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CategoryHome;
