import { TextInput, rem, PasswordInput, Button } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { loginUser } from "../../Services/UserService"
const form={
    email:"",
    password:"",
}
export const Login = () => {
     const [data,setData] = useState(form)
    
        const handleChange = (event:any)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
    
        const handleSubmit =()=>{
            loginUser(data)
            .then((res)=>{console.log(res)})
            .catch((error)=> console.log(error.response.data))
            
        }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
            <div className="text-5xl font-semibold">Login Your Account</div>
            <TextInput name="email" value={data.email} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" onChange={handleChange} />

            <PasswordInput name="password" value={data.password} withAsterisk leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="*********" onChange={handleChange} />

            <Button onClick={handleSubmit} autoContrast variant="filled" color="darkorchid">Login</Button>
            <div className="mx-auto">
                Don't have an account ? <NavLink to={"/signup"} className="text-[var(--color-electric-violet-500)] hover:underline">Sign up</NavLink>
            </div>
        </div>
    )
}