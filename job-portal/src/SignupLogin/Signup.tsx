import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

export const Signup = ()=>{
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
            <div className="text-5xl font-semibold">Create Account</div>
            <TextInput withAsterisk label="Full name" placeholder="Your Name"/>
            <TextInput withAsterisk leftSection={<IconAt style={{width:rem(16), height:rem(16)}}/>} label="Email" placeholder="Enter your email" />

            <PasswordInput withAsterisk leftSection={<IconLock style={{width:rem(16), height:rem(16)}} stroke={1.5} />} label="Password" placeholder="*********"/>
            <PasswordInput withAsterisk leftSection={<IconLock style={{width:rem(16), height:rem(16)}} stroke={1.5} />} label="Confirm Password" placeholder="*********"/>

            <Checkbox autoContrast label={<>I accept {''}<Anchor>Terms & Conditions</Anchor> </>}/>
            <Button autoContrast variant="filled" color="darkorchid">Sign up</Button>
            <div className="mx-auto">
                Have an account ? <NavLink to={"/login"} className="text-[var(--color-electric-violet-500)] hover:underline">Login</NavLink>
            </div>
        </div>
    )
}