import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
        <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label> Username: -</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
        <br/>
        <label>Email:-   </label>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
       <br/>
        {/* <button type="submit">Submit</button> */}
      </form>

      <h1>UserName :- {formData.username}</h1>
      <h2>Email :- {formData.email}</h2>

    </div>
  );
};

export default Form;
