import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function User() {
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect( () =>{ 
    fetchData()
    },[])

let fetchData = async() =>{
    try{
        setLoading(true)
        const users= await axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/users");
        console.log(users);
        setUsers(users.data);
        setLoading(false)
    }catch (error){
        alert()
    }

}
let deleteUser = async (userId) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      try {
        await axios.delete(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
        alert("User deleted successfully");
      } catch (error) {
        alert("Error deleting user");
      }
    }
     };
    
  return (
    
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 class="h3 mb-2 text-gray-800">Users List</h1>
       <Link to={"/user_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
      </div>
          {
            isLoading ? <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div> : <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div> 
            <div class="card-body">
            <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>city</th>
                                
                                <th>Action</th>

                            </tr>
                        </thead>
                    
                        <tbody>
                           
                           {users.map((user) =>{
                            return  <tr key={user.id}>
                                <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.country}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            
                            <td>
                               <span> <Link to={`/user/${user.id}`} className='btn btn-warning mr-2'>View</Link></span>
                            
                            
                               <span> <Link to={`/edit-user/${user.id}`} className='btn btn-primary mr-2'>Edit</Link></span>
                               <span> <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Del</button></span>
                            </td>
                        </tr>
                           })

                           }

                        </tbody>
              
              
              </table>

              </div>
              </div>                 
</div>
          }         
          
      </div>
   
  )
}

export default User
