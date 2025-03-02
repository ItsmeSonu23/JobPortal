import { Button, Indicator } from "@mantine/core"
import { IoIosNotifications } from "react-icons/io"
import { TbCloverFilled } from "react-icons/tb"
import { NavLinks } from "./NavLinks"
import { NavLink, useLocation } from "react-router-dom"
import { ProfileMenu } from "./ProfileMenu"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProfile } from "../../Services/ProfileService"
import { setProfile } from "../../Slices/ProfileSlice"

export const Header = () => {
    const location = useLocation()
    const user = useSelector((state:any)=>state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        getProfile(user.profileId)
            .then((res: any) => {
                dispatch(setProfile(res))

            })
            .catch((err: any) => {
                console.log(err);

            })
    }, [])
    return ( location.pathname != "/signup" && location.pathname != "/login" ?
        // header of the page 
        <div className="w-full px-6 bg-[var(--color-mine-shaft-950)] h-28 font-['Karla'] text-white flex justify-between items-center">
            {/* this is logo of the website */}
            <div className="flex gap-3 items-center text-[var(--color-electric-violet-500)]">
                {/* Logo imported from react icons clover */}
                <TbCloverFilled className="text-5xl" />
                {/* Logo name Clover is assigned */}
                <div className="text-3xl font-semibold">
                    Clover
                </div>
            </div>
            {/* Navigation links of the page */}
            <NavLinks/>
            {/* Profile icon and notification section of the page */}
            <div className="flex gap-4 items-center ">
                {/* Name of the user and avatar with drowpdown menu option related to the avatar*/}
                {user?<ProfileMenu/>:<NavLink to={"/login"}><Button variant="filled" color="darkorchid">Login</Button></NavLink>}
                {/* <div className="p-2 rounded-full bg-[var(--color-mine-shaft-900)]">
                    {/* Settings icon */}
                    {/* <IoSettingsOutline className="text-2xl" /> */}
                {/* </div> */} 
                <div className="p-2 rounded-full bg-[var(--color-mine-shaft-900)]">
                    {/* Indicator component from mantine for blinking of notification */}
                    <Indicator color="#8a2be2" offset={6} size={8} processing>
                        {/* Notification icon */}
                        <IoIosNotifications className="text-2xl" />
                    </Indicator>
                </div>
            </div>
        </div>:<></>
    )
}

