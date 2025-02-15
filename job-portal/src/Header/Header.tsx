import { Avatar, Indicator } from "@mantine/core"
import { IoIosNotifications } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { TbCloverFilled } from "react-icons/tb"
import { NavLinks } from "./NavLinks"

export const Header = () => {
    return (
        // header of the page 
        <div className="w-full px-6 bg-[var(--color-mine-shaft-950)] h-28 font-['Karla'] text-white flex justify-between items-center">
            {/* this is logo of the website */}
            <div className="flex gap-3 items-center text-[var(--color-electric-violet-500)]">
                <TbCloverFilled className="text-5xl" />
                <div className="text-3xl font-semibold">
                    Clover
                </div>
            </div>
            {/* Navigation links of the page */}
            <NavLinks/>
            {/* Profile icon and notification section of the page */}
            <div className="flex gap-4 items-center ">

                {/* Name of the user and avatar*/}
                <div className="flex items-center gap-2 text-xl">
                    {/* Name of the user */}
                    <div className="">Sonu</div>
                    {/* Avatar icon imported from mantine for the page */}
                    <Avatar src="/images/avatar.png" alt="it's  me" />

                </div>
                <div className="p-2 rounded-full bg-[var(--color-mine-shaft-900)]">
                    {/* Settings icon */}
                    <IoSettingsOutline className="text-2xl" />
                </div>
                <div className="p-2 rounded-full bg-[var(--color-mine-shaft-900)]">
                    {/* Indicator component from mantine for blinking of notification */}
                    <Indicator color="#8a2be2" offset={6} size={8} processing>
                        {/* Notification icon */}
                        <IoIosNotifications className="text-2xl" />
                    </Indicator>
                </div>
            </div>
        </div>
    )
}