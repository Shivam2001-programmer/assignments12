import React, { useState } from "react";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import AadharCard from "./AadharCard";

function App() {
  const [userData, setUserData] = useState(null);

  const handleRegistration = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      <h1>Aadhar Card Registration</h1>
      {!userData ? (
        <RegistrationForm onRegistration={handleRegistration} />
      ) : (
        <AadharCard userData={userData} />
      )}
    </div>
  );
}

export default App;
