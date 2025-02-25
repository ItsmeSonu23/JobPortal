import { TbCloverFilled } from "react-icons/tb"
import { Signup } from "../Components/SignupLogin/Signup"
import { Login } from "../Components/SignupLogin/Login"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"

export const SignupPage = () => {
    const location = useLocation()
    const navigation = useNavigate()
    return <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] overflow-hidden relative">
        <Button size="sm" className="!absolute left-5 z-10 top-5" onClick={()=>navigation("/")} leftSection={<IconArrowLeft size={20} />} color="darkorchid" variant="light">Home</Button>
        <div className={`w-[100%] h-[100vh] transition-all duration-1000 ease-in-out flex [&>*]:flex-shrink-0 ${location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"}`}>
            <Login />
            <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname == "/signup" ? "rounded-r-[200px]" : "rounded-l-[200px]"}  bg-[var(--color-mine-shaft-900)] flex flex-col justify-center items-center`}>
                <div className="flex gap-3 items-center text-[var(--color-electric-violet-500)] p-3">
                    <TbCloverFilled className="text-8xl" />
                    <div className="text-8xl font-semibold">
                        Clover
                    </div>
                </div>
                <div className="text-2xl text-[var(--color-mine-shaft-200)] font-semibold">Find the jobs made for you!</div>
            </div>
            <Signup />
        </div>
    </div>
}