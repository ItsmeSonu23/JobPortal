import { Button } from "@mantine/core"
import { useState } from "react"
import { ExpInput } from "./ExpInput"
import { formatDate } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationService"

export const ExpCard = (props: any) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state:any)=> state.profile)
    const handleDelete = ()=>{
        let exp = [...profile.expiriences]
        exp.splice(props.index,1)
        let updatedProfile = {...profile, expiriences:exp}
        dispatch(changeProfile(updatedProfile))
        successNotification("Success","Expirience deleted successfully")
    }
    return !edit ? <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-[var(--color-mine-shaft-800)] rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-[(--color-mine-shaft-300)]">{props.company} &#x2022; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-[var(--color-mine-shaft-300)]">
                {formatDate(props.startDate)} - {props.working?"Present":formatDate(props.endDate)}
            </div>
        </div>
        <div className="text-sm  text-[var(--color-mine-shaft-300)] text-justify">
            {props.description}
        </div>
        {props.edit && <div className="flex gap-5">
            <Button onClick={() => setEdit(true)} color="green.8" variant="light">Edit</Button>
            <Button color="red.8" variant="light" onClick={handleDelete}>Delete</Button>
        </div>}
    </div> : <ExpInput {...props} setEdit={setEdit} />
}