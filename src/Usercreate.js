import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Usercreate() {
    const navigate = useNavigate();
    const formik= useFormik({
        initialValues :{
            name:"",
            email:"",
            country:"",
            state:"",
            city:"",
            phone:"",
            DOB:"",
            gender:""
        },
        validate: (values) =>{
            let error = {};

            if(!values.name){
                error.name = "Please enter a value"
            }
            if(values.name && (values.name.length <=2 || values.name.length > 15)){
                error.name = "Username must between range 2 to 15 Characters"
            }
            if(!values.email){
                error.email = "Please enter email"
            }
            if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                error.email="Please enter a valid email";
            }
            // if(values.phone.toString().length !== 10){
            //     error.phone = "Please enter valid Number"  
            // }
            // let age=new Date().getFullYear() - parseInt(values.DOB.split("-")[0]);
            // if(age < 18){
            //     error.DOB="You must be above 18"
            // }

            return error;
        },
        onSubmit : async (values) =>{
            try{
                const userdata = await axios.post("https://5cdd0a92b22718001417c19d.mockapi.io/api/users",values);
                alert("success");
                navigate('/portal/user');
            }
            catch(error){
             alert("Error");
            }
        }
    });
    
    
    return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Username*</lable>
                    <input name="name" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.name} type={"text"} 
                    className={`form-control ${formik.touched.name && formik.errors.name ? 'error-box':''} ${formik.touched.name && !formik.errors.name ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.name && formik.errors.name ? <span style={{color:'red'}} >{formik.errors.name}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Email*</lable>
                    <input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email} type={"text"} 
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'error-box':''} ${formik.touched.email && !formik.errors.email ? 'success-box' : ""} `}/>
                 {   
                formik.touched.email && formik.errors.email ? <span style={{color:'red'}} >{formik.errors.email}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Country</lable>
                    <select  name="country" onChange={formik.handleChange} value={formik.values.country}className='form-control'>
                        <option>India</option>
                        <option>Canada</option>
                        <option>London</option>
                    </select>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>State</lable>
                    <select name="state" onChange={formik.handleChange} value={formik.values.state} className='form-control'>
                        <option>India</option>
                        <option>Canada</option>
                        <option>London</option>
                    </select>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>City</lable>
                    <select name="city" onChange={formik.handleChange}
                    
                    value={formik.values.city} 
                    className='form-control'>
                        <option>India</option>
                        <option>Canada</option>
                        <option>London</option>
                    </select>
                 </div>
            </div>
            {/* <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Phone No</lable>
                    <input name="phone" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.phone} type={"text"} 
                    className={`form-control ${formik.touched.phone && formik.errors.phone ? 'error-box':''} ${formik.touched.phone && !formik.errors.phone ? 'success-box' : ""} `}/>
                 {   
                formik.touched.phone && formik.errors.phone ? <span style={{color:'red'}} >{formik.errors.phone}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Date of Birth</lable>
                    <input name="DOB" onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                    value={formik.values.DOB}type={"date"} 
                    className={`form-control ${formik.touched.DOB && formik.errors.DOB ? 'error-box':''} ${formik.touched.DOB && !formik.errors.DOB ? 'success-box' : ""} `}/>
                     {   
                formik.touched.DOB && formik.errors.DOB ? <span style={{color:'red'}} >{formik.errors.DOB}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Gender</lable>
                    <select name="gender" onChange={formik.handleChange} value={formik.values.gender} className='form-control'>
                        <option>Female</option>
                        <option>Male</option>
                        <option>other</option>
                    </select>
                 </div>
            </div> */}
            <div className='col-lg-4'>
                <div className='form-group'>
                    <input type={"Submit"} className="btn btn-primary"/>
                    
                 </div>
            </div>
        </div>
        </form>
     
    </div>
  )
}

export default Usercreate
