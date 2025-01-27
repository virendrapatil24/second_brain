import { useRef } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface LogInPageProps {
    setIsUserLoggedIn: (status: boolean) => void;
}

const Login = ({ setIsUserLoggedIn }: LogInPageProps) => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const apiURL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const login = async () => {
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            const response = await axios.post(`${apiURL}/api/v1/user/login`, {
                username,
                password,
            })

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem("secondBrainAuthToken", token);
                setIsUserLoggedIn(true)
                navigate("/");
            } else {
                const message = response.data.message || "Something went wrong!";
                alert(message);
            }

        } catch (err) {
            console.error("Login failed:", err);
            alert("Login failed");
        }
    }

    return (
        <div className='flex h-screen w-full bg-slate-200 justify-center items-center'>
            <div className='w-full max-w-md bg-white p-4 rounded-lg' >

                <h2 className='text-turquoise-900 p-2'>Create a new account to get started.</h2>

                <Input placeholder='Username' reference={usernameRef} />

                <Input placeholder='Password' reference={passwordRef} />

                <div className='flex flex-col justify-center items-center w-full p-4'>
                    <Button text="Login" variant='secondary' className="w-full" onClick={login} />
                    <h4 className='text-xs text-slate-400 pt-1'>note all the fields are mandatory</h4>
                </div>

            </div>
        </div>
    )
}


export default Login