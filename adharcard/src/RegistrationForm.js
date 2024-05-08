import React, { useState } from "react";

function RegistrationForm({ onRegistration }) {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uid = generateUID();
    const userDataWithUID = { ...formData, uid };

    onRegistration(userDataWithUID);
  };

  const generateUID = () => {
    let uid = "";
    const characters = "0123456789";
    for (let i = 0; i < 16; i++) {
      uid += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return uid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
