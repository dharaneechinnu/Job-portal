import React, { useEffect, useState } from 'react';
import api from '../API/api';
import './AlPost.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
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
    <div className='all-post'>
     <Link to='/view'>  <FaArrowLeftLong className='back-arow' /></Link>
      <div className="pic">
       
        <h2 className='all-tag'><span>H</span>ere You can Find Job</h2>
        <h2 className='all-tag'><span>W</span>ere here to Find you Need</h2>
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
