import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    country: '',
    state: '',
    city: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  const { username, email, country, state, city } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`, user);
      // navigate('/');
      alert("Successfully Edited")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Country</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your country"
              name="country"
              value={country}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>State</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your state"
              name="state"
              value={state}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>City</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your city"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
