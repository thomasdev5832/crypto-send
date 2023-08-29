import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
export const DetailsContext = createContext();

import { contractAddress, contractABI } from "../utils/Contract";

const DetailsProvider = ({children}) => {
    
    const [account, setAccount] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [transactions, setTransactions] = useState([]);

    const [Data, setData] = useState({
        receiverAddress: "",
        amount: "",
        message: "",
    });

    const getContract = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const transactionContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
        return transactionContract;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({ ...Data, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!Data.receiverAddress || !Data.amount || !Data.message){
            alert("Please fill all the fields");
            return;
        }

        if(!account){
            alert("Please connect your wallet");
            return;
        }

        if(!window.ethereum){
            alert("Install Metamask");
            return;
        }

        try {
            const {receiverAddress, amount, message} = Data;
            const transactionContract = getContract();

            const parsedAmount = ethers.utils.parseEther(amount);
            await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        from: account,
                        to: receiverAddress,
                        value: parsedAmount._hex,
                        allowUnlimitedContractSize: true,

                    },
                ],
            });

            const transactionHash = await transactionContract.sendEth(
                receiverAddress,
                parsedAmount,
                message
            );
            //console.log("Success: ",transactionHash);
            setIsLoading(true);
            await transactionHash.wait();
            setIsLoading(false);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }

    }

    const getTransactionHistory = async () => {
        try {
            if(!window.ethereum){
                alert("Install Metamask");
            }

            const transactionContract = getContract();
            const transactions = await transactionContract.getTransactions();

             setTransactions(transactions);
        } catch (err) {
            console.log(err);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            /*if(!window.ethereum){
                alert("Install Metamask");
                return;
            }*/
            
            const account = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            if (account.length > 0) setAccount(account[0]);

            getTransactionHistory();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const connectWallet = async () => {

        try {
            if(!window.ethereum){
                alert("Install Metamask");
                return;
            }
            const account = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccount(account[0]);
            window.location.reload();

        } catch (err) {
            console.log(err);
        }

    }
  
    return (
    <DetailsContext.Provider value={{connectWallet, account, handleChange, handleSubmit, isLoading, transactions}}>
        {children}
    </DetailsContext.Provider>
  )
};

export default DetailsProvider;