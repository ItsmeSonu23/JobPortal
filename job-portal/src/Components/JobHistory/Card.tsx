import { Button, Divider, Text } from "@mantine/core"
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClock } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

export const Card = (props: any) => {
    return (
        <NavLink to={'/jobs'} className="bg-[var(--color-mine-shaft-900)] p-5 w-80 justify-between flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_darkorchid] !shadow-mine-shaft-600">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-[var(--color-mine-shaft-800)] rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt={props.company} />
                    </div>
                    <div className="">
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-xs text-[var(--color-mine-shaft-300)]">{props.company} &#x2022; {props.applicants} applicants</div>
                    </div>
                </div>
                {props.saved ? <IconBookmarkFilled className="text-[var(--color-electric-violet-600)] cursor-pointer" /> : <IconBookmark className="text-[(--color-mine-shaft-300)] }cursor-pointer" />}
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[var(--color-mine-shaft-800)] [&>div]:text-[var(--color-electric-violet-500)] [&>div]:rounded-lg text-xs">
                <div className="">{props.experience}</div>
                <div className="">{props.jobType}</div>
                <div className="">{props.location}</div>
            </div>

            <Text className="!text-xs text-justify !text-[(--color-mine-shaft-300)]" lineClamp={3}>
                {props.description}
            </Text>
            <Divider size="xs" color="darkorchid" />
            <div className="flex justify-between">
                <div className="font-semibold text-[(--color-mine-shaft-200)]">
                    &#8377;{props.package}
                </div>
                <div className="flex gap-1 text-xs text-[(--color-mine-shaft-400)] items-center">
                    <IconClock className="h-5 w-5" stroke={1.5} />{props.applied || props.interviewing ? "Applied" : props.offered ? "Interviewed" : "Posted"} {props.postedDaysAgo} days ago.
                </div>
            </div>
            {
                (props.offered || props.interviewing) && <Divider color="darkorchid" size="xs" />
            }
            {
                props.offered && <div className="flex gap-2">
                    <Button color="darkorchid" variant="outline" fullWidth>Accept</Button>
                    <Button color="darkorchid" variant="light" fullWidth>Reject</Button>
                </div>
            }
            {
                props.interviewing && <div className="flex gap-1 text-sm items-center">
                    <IconCalendarMonth className="h-5 w-5 text-[var(--color-electric-violet-500)]" stroke={1.5} />Sun, 25 August &bull; <span className="text-[var(--color-mine-shaft-400)]">10:00 AM</span>
                </div>
            }
        </NavLink>
    )
}