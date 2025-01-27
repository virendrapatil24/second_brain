import { useRef } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Singup = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const firstNameRef = useRef<HTMLInputElement>();
    const lastNameRef = useRef<HTMLInputElement>();
    const apiURL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const singup = async () => {
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            const email = emailRef.current?.value;
            const firstName = firstNameRef.current?.value;
            const lastName = lastNameRef.current?.value;

            const response = await axios.post(`${apiURL}/api/v1/user/signup`, {
                username,
                password,
                email,
                firstName,
                lastName,
            })

            if (response.status === 201) {
                navigate("/login");
            } else {
                const message = response.data.message || "Something went wrong!";
                alert(message);
            }
        } catch (err) {
            console.error("Sign up failed:", err);
            alert("Sign up failed");
        }
    }

    return (
        <div className='flex h-screen w-full bg-slate-200 justify-center items-center'>
            <div className='w-full max-w-md bg-white p-4 rounded-lg' >

                <h2 className='text-turquoise-900 p-2'>Create a new account to get started.</h2>

                <Input placeholder='Username' reference={usernameRef} />

                <Input placeholder='Password' reference={passwordRef} />

                <Input placeholder='Email' reference={emailRef} />

                <Input placeholder='First Name' reference={firstNameRef} />

                <Input placeholder='Last Name' reference={lastNameRef} />

                <div className='flex flex-col justify-center items-center w-full p-4'>
                    <Button text="Sign Up" variant='secondary' className="w-full" onClick={singup} />
                    <h4 className='text-xs text-slate-400 pt-1'>note all the fields are mandatory</h4>
                </div>

            </div>
        </div>
    )
}

export default Singup