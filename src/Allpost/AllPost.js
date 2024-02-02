import React, { useEffect, useState } from 'react';
import api from '../API/api';
import './AlPost.css';
import Nav from '../Nav/Nav';
import upload from '../Picture/Upload img.jpg';
import { FaLocationDot } from "react-icons/fa6";

const AllPost = ({ userName }) => {
  const [posts, setPosts] = useState({ create: [], private: [] });
  const [titleSearch, setTitleSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  useEffect(() => {
    // Fetch all posts from the API
    api.get('/postes')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleTitleSearchChange = (e) => {
    setTitleSearch(e.target.value);
  };

  const handleLocationSearchChange = (e) => {
    setLocationSearch(e.target.value);
  };

  const allPosts = [...posts.create, ...posts.private];

  const filteredTitlePosts = allPosts.filter(post =>
    post.postTitle && post.postTitle.toLowerCase().includes(titleSearch.toLowerCase())
  );

  const filteredLocationPosts = allPosts.filter(post =>
    post.locations && post.locations.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const intersection = filteredTitlePosts.filter(post =>
    filteredLocationPosts.some(locPost => locPost._id === post._id)
  );

  return (
    <div>
      <Nav userName={userName} />
      <div className="pic">
        <img src={upload} alt="" className="img1" />
      </div>

      <div className="center">
        <label htmlFor="titleSearch" className='sear'>Search by Title:</label>
        <input
          type="text"
          id="titleSearch"
          value={titleSearch}
          onChange={handleTitleSearchChange}
          className='search-input'
          placeholder="Type title..."
        />
        <label htmlFor="locationSearch" className='sear'>Search by Location:</label>
        <input
          type="text"
          id="locationSearch"
          value={locationSearch}
          className='search-inputs'
          onChange={handleLocationSearchChange}
          placeholder="Type location..."
        />
      </div>
      <div className="all">
        {intersection.map((post) => (
          <div key={post._id} className="post-items">
            <h4 className='titles'>{post.postTitle}</h4>
            <h2 className='titles'>{post.userid}</h2>
            <h6 className='location'><FaLocationDot />{post.locations}</h6>
            <p className='bodys'>{post.postbody}</p>
            <p className='mails'>
              <a href={`mailto:${post.postMail}`}>{post.postMail}</a>
            </p>
            <h5 className='numbessr'>{post.number}</h5>
            {post.time && <h5 className='timess'>{post.time}</h5>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
