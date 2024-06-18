import React from 'react';

const UncontrolledLogin = () => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();

 
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;


    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

   

    
    const formData = new FormData(event.target); 
    const usernameFormData = formData.get('username');
    const passwordFormData = formData.get('password');

    console.log('Username (DOM):', username);
    console.log('Password (DOM):', password);
    console.log('Username (FormData):', usernameFormData);
    console.log('Password (FormData):', passwordFormData);

    s
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" ref={usernameRef} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" ref={passwordRef} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default UncontrolledLogin;
