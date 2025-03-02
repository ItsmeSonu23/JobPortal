import { ActionIcon, TagsInput } from "@mantine/core"
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react"
import { skills } from "../../Data/Data"
import { useForm } from "@mantine/form"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { successNotification } from "../../Services/NotificationService"
import { changeProfile } from "../../Slices/ProfileSlice"

export const Skills = () => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const[skills,setSkills] = useState<string[]>([])
    const profile = useSelector((state: any) => state.profile)
    const handleEdit = () => {
        if (!edit) {
            setEdit(true)
        } else {

            setEdit(false)
            setSkills(profile.skills)

        }
    }

    const handleSave = () => {
        setEdit(false)
        let updatedProfile = { ...profile, skills:skills }
        dispatch(changeProfile(updatedProfile))
        successNotification("Skills updated successfully", "Your skills has been updated")
    }
    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">Skills <div>{edit && <ActionIcon onClick={() => handleSave()} variant="subtle" color="green.8" size={"lg"}>

                <IconCheck className="h-4/5 w-4/5" />

            </ActionIcon>}
                <ActionIcon onClick={() => handleEdit()} variant="subtle" color={edit ? "red.8" : "darkorchid"} size={"lg"}>
                    {
                        edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                    }
                </ActionIcon>
            </div></div>
            {
                edit ? <><TagsInput value={skills} onChange={setSkills} placeholder="Add Skills" splitChars={[",", " ", "|"]} /></> : <>
                    <div className="flex flex-wrap gap-2 ">

                        {
                            profile?.skills?.map((skill: any, index: number) => <div key={index} className="bg-[var(--color-electric-violet-500)] rounded-3xl text-[var(--color-mine-shaft-200)] text-xs font-medium px-3 py-1">{skill}</div>)
                        }
                    </div>
                </>
            }


        </div>
    )
}