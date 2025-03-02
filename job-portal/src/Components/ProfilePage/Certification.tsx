import { ActionIcon } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import { formatDate } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationService"

export const Certification = (props: any) => {
    const dispatch = useDispatch()
    const profile = useSelector((state: any) => state.profile)
    const handleDelete = () => {
        let certi = [...profile.certifications]
        certi.splice(props.index, 1)
        let updatedProfile = { ...profile, certifications: certi }
        dispatch(changeProfile(updatedProfile))
        successNotification("Success", "Certificate deleted successfully")
    }
    return <div className="flex justify-between">
        <div className="flex gap-2 items-center">
            <div className="p-2 bg-[var(--color-mine-shaft-800)] rounded-md">
                <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold">{props.title}</div>
                <div className="text-sm text-[(--color-mine-shaft-300)]">{props.issuer}</div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex items-end flex-col">
                <div className="text-sm text-[(--color-mine-shaft-300)]">Issued{formatDate(props.issueDate)}</div>
                <div className="text-sm text-[(--color-mine-shaft-300)]">{props.certificateId}</div>
            </div>
            {props.edit && <ActionIcon variant="subtle" color="red.8">
                <IconTrash onClick={handleDelete} className="h-4/5 w-4/5" stroke={1.2} />
            </ActionIcon>}
        </div>
    </div>
}
