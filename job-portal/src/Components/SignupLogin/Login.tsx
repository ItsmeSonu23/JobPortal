import { TextInput, rem, PasswordInput, Button, LoadingOverlay } from "@mantine/core"
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { loginUser } from "../../Services/UserService"
import { loginValidation } from "../../Services/FormValidation"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"
import { ResetPassword } from "./ResetPassword"
import { useDispatch } from "react-redux"
import { setUser } from "../../Slices/UserSlice"
import { errorNotification, successNotification } from "../../Services/NotificationService"
const form = {
    email: "",
    password: "",
}
export const Login = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState<{ [key: string]: string }>(form)
    const [formError, setFormError] = useState<{ [key: string]: string }>(form)
    const [opened, { open, close }] = useDisclosure(false);

    const handleChange = (event: any) => {
        setFormError({ ...form, [event.target.name]: "" })
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
      
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false
        }
        setFormError(newFormError)
        if (valid) {
            setLoading(true)
            loginUser(data)
                .then((res) => {
                    console.log(res)
                    successNotification("Login Successfull", "Redirecting to Home-page...")
                    setTimeout(() => {
                        setLoading(false)
                        dispatch(setUser(res))
                        navigate("/")
                    }, 4000)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error.response.data)
                    errorNotification("Login Failed", error.response.data.errorMessage)
                })
        }

    }
    return (
        <>
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{radius:"sm",blur:"2"}} loaderProps={{color:"darkorchid", type:"dots"}}/>
            <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
                <div className="text-5xl font-semibold">Login Your Account</div>
                <TextInput error={formError.email} name="email" value={data.email} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" onChange={handleChange} />

                <PasswordInput error={formError.password} name="password" value={data.password} withAsterisk leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="*********" onChange={handleChange} />

                <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled" color="darkorchid">Login</Button>
                <div className="mx-auto">
                    Don't have an account ? <NavLink to={"/signup"} className="text-[var(--color-electric-violet-500)] hover:underline cursor-pointer" onClick={() => { setFormError(form); setData(form) }}>Sign up</NavLink>
                </div>
                <div onClick={open} className="text-[var(--color-electric-violet-500)] hover:underline cursor-pointer text-center">Forgot Password?</div>
            </div>
            <ResetPassword opened={opened} close={close} />
        </>
    )
}