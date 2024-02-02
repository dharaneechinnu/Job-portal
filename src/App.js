import React, {      useState } from 'react';
import './Login/log.css';
import Log from './Login/Log';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Reg from './Register/Reg';
import Api from './API/api'
import Home from './Home/Home';
import CreatePost from './CreatePost/CreatePost';
import EditPost from './EditPost/EditPost';
import AllPost from './Allpost/AllPost';
import Abo from './About/Abo';
import Cont from './contact/Cont';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [postTitle,setPostTitle]= useState('')
  const [postMail,setMail] = useState('')
  const [number,setnumber]= useState('');
  const [postbody,setPostBody] = useState('')
  const [Name,setname] =useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const [time,settime]= useState('')
  const [search, setSearch] = useState('');
  const [userid,setuserids] = useState('')
  const [userId,setuserId] = useState('')
  const[locations,setlocations] = useState('')
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const history = useNavigate()
 
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post('/auth', { password: password, Name: Name,email:email });
      const { userId, Name: userName } = response.data;
  
      // Set the user's name in your state
      setUserName(userName);
      console.log(userName);
      console.log('User ID:', userId);
  
      // Set userId after successful authentication
      setuserId(userId);
  
      // Use 'history.push' to navigate to the '/home' route
      history('/home');
    } catch (error) {
      console.error("Error in API call:", error);
    }
  };
  

  const handlesign = async(e) =>{
    e.preventDefault();
    await Api.post('/user',{Name,email,password})
    .then(users => console.log(users),
    history('/')
    )
    .catch(err => console.log(err))

  }
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      // Assuming userName is the authenticated user's name
      setUserName(userName);
  
      await Api.post('/add', {
        userid,
        time,
        postMail,
        postTitle,
        postbody,
        locations,
        number,
      })
        .then((adds) => {
          console.log(adds);
          // Redirect to '/home' using react-router-dom history
          history('/home');
        })
        .catch((error) => console.error('Error adding post:', error));
    } catch (error) {
      console.error('Error in handleAdd:', error);
    }
  };
  const filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();
    return (
      post.postTitle.toLowerCase().includes(searchText) ||
      post.postbody.toLowerCase().includes(searchText) ||
      post.postMail.toLowerCase().includes(searchText) ||
      String(post.number).includes(searchText)
    );
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };  


  

  const handleDelete =async (postId) => {
   await Api.delete(`/posts/${postId}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };
  
  return (
    <>
   
      <Routes>
   <Route
  path='/'
  element={
    <Log
      name={Name}
      setname={setname}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      setEmail={setEmail}
    />
  }
/>
    <Route path='/register' element={<Reg
    name={Name}
    setname={setname}
     handlesign={handlesign}
     email={email}
     setEmail={setEmail}
     setPassword={setPassword}
     password={password}
    />}/>
   <Route path='/home' element={<Home
   search={search}
   handleSearchChange={handleSearchChange}
   handleDelete={handleDelete}
   filteredPosts={filteredPosts}
   loading={loading}
   error={error}
   setError={setError}
   setLoading={setLoading}
   setPosts={setPosts}
    userName={userName}
    userid={userid}
    email={email}
   />}/>
   <Route path='/Job' element={<AllPost userName={userName}/>} />
   <Route path='/Add' element={<CreatePost
    handleAdd={handleAdd}
    setPostBody={setPostBody}  
    setMail={setMail}
    setnumber={setnumber}
    setPostTitle={setPostTitle}
    postMail={postMail}
    postTitle={postTitle}
    number={number}
    postbody={postbody}
    userId={userId}
    setuserid={setuserId}
    time={time}
    settime={settime}
    userid={userid}
    setuserids={setuserids}
    locations={locations}
    setlocations={setlocations}
    />}/>
    <Route path="/edit/:id" element={<EditPost/>}/>
    <Route path='/about' element={<Abo userName={userName}/>}/>
    <Route path='/contact' element={<Cont userName={userName}/>}/>
   </Routes>
    </>
  );
}

export default App;
