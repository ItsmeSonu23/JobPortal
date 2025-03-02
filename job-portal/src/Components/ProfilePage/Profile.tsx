import { Avatar, Divider, FileInput, Overlay } from "@mantine/core"
import { useDispatch, useSelector } from "react-redux"
import { Info } from "./Info"
import { changeProfile } from "../../Slices/ProfileSlice"
import { About } from "./About"
import { Skills } from "./Skills"
import { Expirience } from "./Expirience"
import { Certificate } from "./Certificate"
import { useHover } from "@mantine/hooks"
import { IconEdit } from "@tabler/icons-react"
import { successNotification } from "../../Services/NotificationService"

export const Profile = (props: any) => {
    const dispatch = useDispatch()
    const profile = useSelector((state: any) => state.profile)

    const { hovered, ref } = useHover();
    const handleFileChange = async(image:any)=>{
        let picture:any = await getBase64(image)
        console.log(picture); 
        let updatedProfile = {...profile,picture:picture.split(",")[1]}
        dispatch(changeProfile(updatedProfile))
        successNotification("Success","Profile picture updated successfully")
    }
    const getBase64 =(file:any)=>{
        return new Promise((res,rej)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload=()=>res(reader.result)
            reader.onerror = error =>rej(error)
        })
    }
    return (
        <div className="w-4/5 mx-auto">

            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/Banner.png" alt="" />
                <div ref={ref} className="absolute -bottom-1/3 left-3 flex items-center justify-center">
                    <Avatar className="!h-48 !w-48 border-8 absolute -bottom-1/3 rounded-full left-3 border-[var(--color-mine-shaft-950)]" src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png" } alt="profile pic" />

                    {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75}/>}
                    {hovered&& <IconEdit className="absolute z-[300] w-16 h-16" />}
                    {hovered && <FileInput onChange={handleFileChange} className="absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full !h-full w-full" variant="transparent" accept="image/png,image/jpeg,image/jpg" />}
                </div>
            </div>

            <div className="px-4 mt-25">
                {/* info section of the profile page */}
                <Info />
                <Divider mx="xs" my="xl" />
                {/* About section of the profile page */}
                <About />
                <Divider mx="xs" my="xl" />

                {/* Skills section of the profile page */}
                <Skills />
                <Divider mx="xs" my="xl" />

                {/* Experience section of profile page */}
                <Expirience />
                <Divider mx="xs" my="xl" />
                {/* certifications section  */}
                <Certificate />
            </div >
        </div >
    )
}