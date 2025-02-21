import { Menu, Avatar, Switch } from "@mantine/core"
import { IconMessageCircle,IconArrowsLeftRight, IconTrash, IconUserCircle, IconFileText, IconMoon, IconMoonStars, IconSun, IconLogout } from "@tabler/icons-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const ProfileMenu = () => {
    const [opened,setOpened] =useState(false)
    return (
        <div className="">
            <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
                <Menu.Target>
                    <div className="flex cursor-pointer items-center gap-2 text-xl">
                        {/* Name of the user */}
                        <div className="">Sonu</div>
                        {/* Avatar icon imported from mantine for the page */}
                        <Avatar src="/images/avatar.png" alt="it's  me" />

                    </div>
                </Menu.Target>

                <Menu.Dropdown onChange={()=>setOpened(true)}>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item leftSection={<IconUserCircle size={14} />}>
                        <NavLink to={"/profile"}>Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                        Resume
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<IconMoon size={14} />}
                        rightSection={
                            <Switch 
                                size="md"
                                color="dark.4"
                                onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
                                offLabel={<IconMoonStars size={16} stroke={2.5} color="darkorchid" />}
                            />
                        }
                    >
                        DarkMode
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                        color="darkorchid"
                        leftSection={<IconLogout size={14} />}
                    >
                       Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}