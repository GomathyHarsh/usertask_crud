import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`);
      console.log(response.data);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      alert('Error fetching user data');
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <h1>User Information</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{user.country}</td>
              </tr>
              <tr>
                <td>State:</td>
                <td>{user.state}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{user.city}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ViewUser;
