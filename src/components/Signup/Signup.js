import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, hookError, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }
    const handlecreateuser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('your two passwords didn\'t match')
            return
        }
        if (password.length < 6) {
            setError('password must be 6 character or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handlecreateuser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="text" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'red' }}>{hookError}</p>
                    <input className='form-submit' type="submit" value='Sign up' />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>create a new account</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;