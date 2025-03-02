import { ActionIcon, Textarea } from "@mantine/core"
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { successNotification } from "../../Services/NotificationService"
import { changeProfile } from "../../Slices/ProfileSlice"

export const About = () => {

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const[about,setAbout] = useState("")
    const profile = useSelector((state: any) => state.profile)
    const handleEdit = () => {
        if (!edit) {
            setEdit(true)
            setAbout(profile.about)
        } else {

            setEdit(false)

        }
    }

     const handleSave = ()=>{
            setEdit(false)
            let updatedProfile = { ...profile, about:about }
            dispatch(changeProfile(updatedProfile))
            successNotification("About updated successfully", "Your profile about has been updated")
        }

    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">About  <div>{edit && <ActionIcon onClick={() => handleSave()} variant="subtle" color="green.8" size={"lg"}>

                <IconCheck className="h-4/5 w-4/5" />

            </ActionIcon>}
                <ActionIcon onClick={() => handleEdit()} variant="subtle" color={edit ? "red.8" : "darkorchid"} size={"lg"}>
                    {
                        edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                    }
                </ActionIcon>
            </div></div>
            {
                edit ? <> <Textarea autosize minRows={3} placeholder="Enter about yourself" value={about} onChange={(event) => setAbout(event.currentTarget.value)} /></> : <><div className="text-sm text-[var(--color-mine-shaft-400)] text-justify">
                    {profile?.about}
                </div></>
            }
        </div>
    )
}