import { useAuthContext } from "../context/UserContext";
import { useState, useEffect } from "react";
import axios from "axios";

const BillingAdress = () => {

    const [hideDelivery, setHideDelivery] = useState(false);
    const { user, dispatch } = useAuthContext();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [adress, setAdress] = useState();
    const [number, setNumber] = useState();
    const [flatNumber, setFlatNumber] = useState();
    const [postCode, setPostCode] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [error, setError] = useState();

    const toggle = () => {
        setHideDelivery(!hideDelivery);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUserData = {
            lastName,
            firstName,
            adress,
            number,
            flatNumber,
            postCode,
            city,
            country
        }

        try {
            const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/api/user/updateFacturation`, newUserData, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('session_user')}`
                }
            })

            dispatch({ type: 'UPDATE', payload: data })
            setHideDelivery(!hideDelivery)
            setError('');
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }

    useEffect(() => {
        setLastName(user.adressFacturation.lastName);
        setFirstName(user.adressFacturation.firstName);
        setAdress(user.adressFacturation.adress);
        setNumber(user.adressFacturation.number);
        setFlatNumber(user.adressFacturation.flatNumber);
        setPostCode(user.adressFacturation.postCode);
        setCity(user.adressFacturation.city);
        setCountry(user.adressFacturation.country);
    }, [user])

    return (
        <div className="bg-white basis-1/3 p-10 shadow-lg border rounded-lg  flex justify-between items-start">
            <div>
                <h1 className="mb-10 text-2xl md:text-3xl">Billing Adress</h1>
                <p className={`opacity-60 ${Object.keys(user.adressFacturation).length === 0 ? 'block' : 'hidden'}`}>There is no address registered yet.</p>
                <div className="opacity-60">
                    <p>{user.adressFacturation.lastName} {user.adressFacturation.firstName}</p>
                    <p>{user.adressFacturation.adress} {user.adressFacturation.number}</p>
                    <p>{user.adressFacturation.flatNumber}</p>
                    <p>{user.adressFacturation.postCode} {user.adressFacturation.city}</p>
                    <p>{user.adressFacturation.country}</p>
                </div>
            </div>
            <i className="fa-solid fa-pen p-3 transition-all cursor-pointer opacity-70 rounded-full hover:opacity-100 hover:bg-gray-200" onClick={toggle}></i>
            <form className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 px-5 py-10 flex flex-col w-11/12 md:w-[600px] rounded ${hideDelivery ? 'block' : 'hidden'}`} onSubmit={handleSubmit}>
                <i className="fa-solid fa-xmark absolute text-xl top-4 left-6 cursor-pointer" onClick={toggle}></i>
                <h1 className="text-center border-b mb-6 pb-3">Billing Adress</h1>
                <div className="flex gap-3">
                    <input className={`border p-1 w-full rounded-sm ${error && !firstName ? 'border-red-500' : ''}`} type='text' value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)}></input>
                    <input className={`border p-1 w-full rounded-sm ${error && !lastName ? 'border-red-500' : ''}`} type='text' value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className="flex gap-3 mt-5">
                    <input className={`border p-1 w-10/12 rounded-sm ${error && !adress ? 'border-red-500' : ''}`} type="text" value={adress} placeholder="Address" onChange={(e) => setAdress(e.target.value)}></input>
                    <input className={`border p-1 w-2/12 rounded-sm ${error && !number ? 'border-red-500' : ''}`} type="text" value={number} placeholder="Number" onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <input className={`border p-1 mt-5 rounded-sm ${error && !flatNumber ? 'border-red-500' : ''}`} type='text' value={flatNumber} placeholder="Flat Number,... (optional)" onChange={(e) => setFlatNumber(e.target.value)}></input>
                <div className="flex gap-3 mt-5">
                    <input className={`border p-1 w-4/12 rounded-sm ${error && !postCode ? 'border-red-500' : ''}`} type='text' value={postCode} placeholder="Postcode" onChange={(e) => setPostCode(e.target.value)}></input>
                    <input className={`border p-1 w-8/12 rounded-sm ${error && !city ? 'border-red-500' : ''}`} type='text' value={city} placeholder="City" onChange={(e) => setCity(e.target.value)}></input>
                </div>
                <input className={`border p-1 mt-5 rounded-sm ${error && !country ? 'border-red-500' : ''}`} type='text' value={country} placeholder="Country " onChange={(e) => setCountry(e.target.value)}></input>
                {error &&
                    <p className="text-red-500 mt-4">{error.response.data}</p>
                }
                <button className="bg-red-900 text-white py-2 px-1 mt-6">Save</button>
            </form>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-black opacity-20 ${hideDelivery ? 'block' : 'hidden'}`}></div>
        </div>
    )
}

export default BillingAdress;