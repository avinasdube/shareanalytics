// PhoneOTPContainer.tsx

import React, { useState } from "react";
import "./LoginForm.scss"; // Import the SCSS file

const PhoneOTPContainer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPContainer, setShowOTPContainer] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleGetOTP = () => {
    // Logic for sending OTP to the entered phone number
    setShowOTPContainer(true);
  };

  const handleCancel = () => {
    // Logic for canceling OTP request
    setShowOTPContainer(false);
  };

  const handleAgreeToTermsChange = () => {
    // Toggle the agreeToTerms state
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <div className="phone-otp-container">
      <p>Enter Phone Number</p>
      {!showOTPContainer ? (
        <div className="phone-input-container">
          <img src="/phone-icon.svg" alt="Phone Icon" className="phone-icon" />
          <input
            type="text"
            placeholder="Your Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="phone-input"
          />
          <button className="get-otp-button" onClick={handleGetOTP}>
            Get OTP
          </button>
        </div>
      ) : (
        <div className="otp-container">
          <div className="otp-header">
            <span>OTP Sent to {phoneNumber}</span>
            <button className="close-button" onClick={handleCancel}>
              &#x2716;
            </button>
          </div>
          {/* Display OTP input and verification button here */}
        </div>
      )}
      {/* New container for terms and conditions */}
      <div className="terms-container">
        <input
          type="checkbox"
          checked={agreeToTerms}
          onChange={handleAgreeToTermsChange}
        />
        <span>I agree to the terms and conditions</span>
      </div>
    </div>
  );
};

export default PhoneOTPContainer;
