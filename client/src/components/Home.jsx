import React from "react";
import Loader from "./Loader";

const Home = () => {

    const handleSubmit = () => {alert('Send ETH')};

  return (
    <div className="main_container">
        <div className="section_container">
            <div className="leftSection">
                <h1>Send and Receive cryptocurrencies easily on CryptoSend</h1>
                <p>Fast and easy - you want to be more secure send and receives.</p>
                {true ? (  
                    <button className="btn connect-btn">Connect Account</button>
                ) : null}
            </div>
            <div className="rightSection">
                <div className="inputBox">
                    <p>Account Number:</p>
                    <input 
                    type="text" 
                    placeholder="Receiver's address" 
                    name="receiverAddress" 
                    onChange={(e) => handleChange(e)} 
                    />
                    <input 
                    type="number" 
                    placeholder="Enter the amount" 
                    name="amount"
                    step="0.0001" 
                    onChange={(e) => handleChange(e)} 
                    />
                    <input 
                    type="text" 
                    placeholder="Enter your message" 
                    name="message" 
                    onChange={(e) => handleChange(e)} 
                    />
                    <hr />
                    {   
                        false ? ( <Loader /> 
                        ) : (
                        <button className="btn send-btn" onClick={handleSubmit}>
                        Send Eth
                    </button>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home