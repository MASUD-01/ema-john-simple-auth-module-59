import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    // const handleEmailBlur = event => {
    //     setName(event.target.value)
    // }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value)
    }

    const handlecreateuser = (event) => {
        event.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handlecreateuser}>
                    <div className='input-group'>
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="text" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">PhoneNumber</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name='phone' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value='add shipping' />
                </form>
            </div>
        </div>
    );
};

export default Shipment;