import { ActionIcon } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

export const CompanyCard = (props: any) => {
    return (
        <div className="flex justify-between  bg-[var(--color-mine-shaft-900)] items-center rounded-lg p-2">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-[var(--color-mine-shaft-800)] rounded-md">
                    <img className="h-7" src={`/Icons/${props.name}.png`} alt={props.name} />
                </div>
                <div className="">
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-[(--color-mine-shaft-300)]">{props.employees} Employees</div>
                </div>
            </div>
            <ActionIcon color="darkorchid" variant="subtle" >
                <IconExternalLink />
            </ActionIcon>
        </div>
    )
}