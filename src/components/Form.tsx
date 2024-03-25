import React, { useState } from 'react';

function buttonclick(){
    console.log(FormData);
    alert("Form Submitted");
}

const Form = () => {
  
  const submitForm=(event:React.FormEvent)=>
  event.preventDefault();

  const [FormData,setFormData]=useState({
      first_name : '',
      lastname:'',
      email:''
     
  });

  return (
    <div>Enter Contact details 
        <form onSubmit={buttonclick}>
            <label htmlFor="firstname">FirstName:</label><br />
            <input type="text" id="fname" name="firstname" required/><br />

            <label htmlFor="lastname">LastName:</label><br />
            <input type="text" id="lname" name="lastname" required/><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required/><br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" required/><br />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form;