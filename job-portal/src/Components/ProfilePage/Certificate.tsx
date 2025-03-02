import { ActionIcon } from "@mantine/core"
import { IconPlus, IconPencil, IconX } from "@tabler/icons-react"
import { Certification } from "./Certification"
import { CertiInput } from "./CertiInput"
import { useState } from "react"
import { useSelector } from "react-redux"

export const Certificate = () => {
    const [edit, setEdit] = useState(false)
    const [addCerti, setAddCerti] = useState(false)
    const profile = useSelector((state: any) => state.profile)
   const handleEdit=()=>{
    setEdit(!edit)
   }
    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex justify-between">Cartifications
                <div className="flex gap-2">
                    <ActionIcon onClick={() => setAddCerti(true)} variant="subtle" color="darkorchid" size={"lg"}>
                        <IconPlus className="h-4/5 w-4/5" />
                    </ActionIcon>
                    <ActionIcon onClick={() => handleEdit()} variant="subtle" color={edit ? "red.8" : "darkorchid"} size={"lg"}>
                        {
                            edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    profile?.certifications?.map((cert: any, index: number) => <Certification key={index} index = {index} edit={edit} {...cert} />)
                }
                {
                    addCerti && <CertiInput setEdit={setAddCerti} />
                }
            </div>
        </div>
    )
}