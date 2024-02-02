import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import home from '../Picture/home.jpg';
import { FaCirclePlus, FaPen, FaTrash } from "react-icons/fa6";
import Nav from '../Nav/Nav';
import api from '../API/api';

const Home = ({ setPosts, setLoading, userName, handleDelete, loading, error, email, filteredPosts }) => {
  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get('/posts', { params: { email: email } });
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setPosts, setLoading, email]);

  return (
    <div>
      <Nav userName={userName} />
      <div className="pic">
        <img src={home} alt="" srcSet="" className="img2" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="post-list">
          {filteredPosts.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Locations</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post._id}>
                    <td>{post.userid}</td>
                    <td>{post.postTitle}</td>
                    <td>{post.postbody}</td>
                    <td>{post.locations}</td>
                    <td>{post.postMail}</td>
                    <td>{post.number}</td>
                    <td>{post.time}</td>
                    <td>
                      <Link to={`/edit/${post._id}`}>
                        <button className='edit'><FaPen /></button>
                      </Link>
                      <button className='del' onClick={() => handleDelete(post._id)}><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='no-item-container'>
              <p className='no_item'>No items found</p>
            </div>
          )}
        </div>
      )}

      <div className="add">
        <Link to='/Add'>
          <FaCirclePlus />
        </Link>
      </div>
    </div>
  );
};

export default Home;
