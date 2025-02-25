import { ActionIcon } from "@mantine/core"
import { IconDeviceFloppy, IconPencil, IconBriefcase, IconMapPin } from "@tabler/icons-react"
import { profileFeild } from "../../Data/Data"
import { SelectInputt } from "./SelectInputt"
import { useState } from "react"
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationService"
export const Info = () => {

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const user = useSelector((state:any)=> state.user)
    const profile = useSelector((state:any)=>state.profile)
    const handleEdit= ()=>{
        if(!edit){
            setEdit(true)
            form.setValues({jobTitle: profile.jobTitle, company: profile.company ,location:profile.location})
        }else{

            setEdit(false)
            let updatedProfile = {...profile,...form.getValues()}
            dispatch(changeProfile(updatedProfile))
            successNotification("Profile updated successfully","Your profile has been updated")
            
        }
    }

    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '' ,location:''}
      });
    return (
        <>
            <div className="text-3xl font-semibold flex justify-between">{user.name}<ActionIcon onClick={() => handleEdit()} variant="subtle" color="darkorchid" size={"lg"}>
                {
                    edit? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                }
            </ActionIcon>
            </div>
            {
                edit ? <> <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInputt form={form} name="jobTitle" {...profileFeild[0]} />
                    <SelectInputt form={form} name="company" {...profileFeild[1]} />
                </div>
                    <SelectInputt form={form} name="location" {...profileFeild[2]} /></> : <>
                    <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{profile.jobTitle} &bull; {profile.company}</div>
                    <div className="text-lg flex gap-1 items-center text-[var(--color-mine-shaft-400)]">
                        <IconMapPin className="h-5 w-5" stroke={1.5} />{profile.location}
                    </div>
                </>
            }
        </>
    )
}