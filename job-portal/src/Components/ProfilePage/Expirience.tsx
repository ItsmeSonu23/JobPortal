import { ActionIcon } from "@mantine/core"
import { IconPlus, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { ExpCard } from "./ExpCard"
import { ExpInput } from "./ExpInput"
import { useSelector } from "react-redux"

export const Expirience = () => {
    const profile = useSelector((state: any) => state.profile)
    const [addExp, setAddExp] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
       setEdit(!edit)
    }

    
    return (
        <div>
            <div className="px-3 ">
                <div className="text-2xl font-semibold mb-5 flex justify-between">Expirience
                    <div className="flex gap-2">
                        <ActionIcon onClick={() => setAddExp(true)} variant="subtle" color="darkorchid" size={"lg"}>
                            <IconPlus className="h-4/5 w-4/5" />
                        </ActionIcon>
                        <ActionIcon onClick={() => handleEdit()} variant="subtle" color={edit ? "red.8" : "darkorchid"} size={"lg"}>
                            {
                                edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    profile?.expiriences?.map((exp: any, index: number) => <ExpCard index={index} edit={edit} key={index} {...exp} />)
                }
                {
                    addExp && <ExpInput add setEdit={setAddExp} />
                }
            </div>
        </div >
    )
}