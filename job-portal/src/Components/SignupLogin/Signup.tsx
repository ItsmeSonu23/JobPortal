import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";


export const Signup = () => {
    const form = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT"
    }

    const [data, setData] = useState(form)
    const [formError, setFormError] = useState(form)

    const handleChange = (event: any) => {
        if (typeof (event) == "string") {
            setData({ ...data, accountType: event })
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({ ...data, [name]: value })
        setFormError({ ...formError, [name]: signupValidation(name, value) })
        if (name == "password" && data.confirmPassword !== "") {
            let err = ""
            if (data.confirmPassword !== value) err="Password do not match.";
            setFormError({ ...formError, [name]: signupValidation(name, value),confirmPassword:err})
        }
        if (name === "confirmPassword") {
            if (data.password !== value) {
                setFormError({ ...formError, [name]: "Passwords do not match." })
            }else{
                setFormError({ ...formError, confirmPassword: ""})
            }
        }
    }

    const handleSubmit = () => {
        let valid = true
        if (valid === true) {
            registerUser(data)
                .then((res) => { console.log(res) })
                .catch((error) => console.log(error))
        }
    }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
            <div className="text-5xl font-semibold">Create Account</div>
            <TextInput error={formError.name} withAsterisk name="name" value={data.name} label="Full name" placeholder="Your Name" onChange={handleChange} />
            <TextInput error={formError.email} withAsterisk name="email" value={data.email} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" onChange={handleChange} />

            <PasswordInput error={formError.password} name="password" value={data.password} withAsterisk leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="*********" onChange={handleChange} />
            <PasswordInput error={formError.confirmPassword} name="confirmPassword" value={data.confirmPassword} withAsterisk leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Confirm Password" placeholder="*********" onChange={handleChange} />
            <Radio.Group
                value={data.accountType}
                onChange={handleChange}
                label="You are?"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className="py-4 px-6 border has-[:checked]:bg-[var(--color-electric-violet-500)]/5 hover:bg-[var(--color-mine-shaft-900)] border-[var(--color-mine-shaft-800)] rounded-lg has-[:checked]:border-[var(--color-electric-violet-500)]" autoContrast value="APPLICANT" label="Applicant" />
                    <Radio className="py-4 px-6 border has-[:checked]:bg-[var(--color-electric-violet-500)]/5 hover:bg-[var(--color-mine-shaft-900)] border-[var(--color-mine-shaft-800)] rounded-lg has-[:checked]:border-[var(--color-electric-violet-500)]" autoContrast value="EMPLOYEE" label="Employer" />
                </Group>
            </Radio.Group>
            <Checkbox autoContrast label={<>I accept {''}<Anchor>Terms & Conditions</Anchor> </>} />
            <Button onClick={handleSubmit} autoContrast variant="filled" color="darkorchid">Sign up</Button>
            <div className="mx-auto">
                Have an account ? <NavLink to={"/login"} className="text-[var(--color-electric-violet-500)] hover:underline">Login</NavLink>
            </div>
        </div>
    )
}
