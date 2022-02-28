import React from 'react'
import SlideshowShort from '../components/SlideshowShort'
import signup from '../images/signup.svg'

function Register() {
     return (
          <>
             <SlideshowShort title='Registration Form' color1='KINDLY FILL THE FORM WITH THE APPROPRIATE DETAILS'/> 
             <main className='course-registration grid21 container' >
                  <div className='reg-image'>
                    <img src={signup} alt='Signup on Orisfina Bootcamp' />
                  </div>
                  <div className='reg-form'>
                       <h1 className='course-header t-center mb-m'>Signup to Orisfina Bootcamp</h1>
                       <form name='Registration Form' method='POST' action='/success'>
                       <input type="hidden" name="form-name" value="Registration Form" />
                            <div className='form-group'>
                              <label className='form-label'> Email </label>
                              <input type='text' name='email' className='group-field' required />
                            </div>
                            <div className='form-group'>
                              <label className='form-label'> Fullnames </label>
                              <input type='text' name='fullnames' className='group-field' required />
                            </div>
                            <div className='form-group'>
                              <label className='form-label'> Phone </label>
                              <input type='tel' name='tel' className='group-field' required />
                            </div>
                            <div className='form-group'>
                                   <label className='form-label'> Sex:</label>
                                   <label htmlFor="male">Male</label> 
                                   <input type="radio" id="male" name="sex" value="Male" />
                                   <label htmlFor="css" className='ml-s'>Female</label>
                                   <input type="radio" id="female" name="sex" value='Female' />   
                            </div>
                            <div className='form-group'>
                                 <label className='form-label' htmlFor='courses'>Select Course:</label>
                                   <select name="courses" id="courses">
                                   <option value="Frontend Web Development">Frontend Web Development</option>
                                   <option value="Backend Web Development">Backend Web Development</option>
                                   <option value="Graphics Design">Graphics Design</option>
                                   <option value="Application Package">Application Package</option>
                                   <option value="Mobile App Development">Mobile App Development</option>
                                   <option value="Mobile App Development">Hardware Engineering</option>
                                   </select>
                            </div>
                            <div className='form-group'>
                                 <input type='submit' className='btn btn_signup mt-m' value='Sign Up' />
                            </div>
                       </form>
                  </div>
             </main>
          </>
     )
}

export default Register
