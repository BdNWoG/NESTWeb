// Add the "use client" directive at the top of the file
"use client";

import { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data); // Handle response data
      // Redirect or show an alert based on 'data'
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Sign In</button>
    </form>
  );
};

export default SignInForm;
