import { TextInput, rem, PasswordInput, Button } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

export const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
            <div className="text-5xl font-semibold">Login Your Account</div>
            <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" />

            <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="*********" />

            <Button autoContrast variant="filled" color="darkorchid">Login</Button>
            <div className="mx-auto">
                Don't have an account ? <NavLink to={"/signup"} className="text-[var(--color-electric-violet-500)] hover:underline">Sign up</NavLink>
            </div>
        </div>
    )
}