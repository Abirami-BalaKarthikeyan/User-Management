import React, { useState } from "react";
import "./App.css";

function App() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User", // Default role
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;

    // Basic validation
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");

    alert("User Created Successfully!");
  };

  return (
    <div className="App">
      <h1>User Management Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Error message */}
        {error && <p className="error">{error}</p>}

        {/* Submit Button */}
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default App;
