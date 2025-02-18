import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react"
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { NavLink } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"
import { DateInput, TimeInput } from '@mantine/dates'
import { useRef, useState } from "react"
export const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null)
    return (
        <div className="bg-[var(--color-mine-shaft-900)] p-5 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_darkorchid] !shadow-mine-shaft-600 justify-between">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-[var(--color-mine-shaft-800)] rounded-full">
                        <Avatar size="lg" src={`/images/${props.image}.png`} alt="" />
                    </div>
                    <div className="">
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-sm text-[(--color-mine-shaft-300)]">{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <IconHeart className="text-[(--color-mine-shaft-300)] cursor-pointer" />
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[var(--color-mine-shaft-800)] [&>div]:text-[var(--color-electric-violet-500)] [&>div]:rounded-lg text-xs">
                <div className="">{props.topSkills[0]}</div>
                <div className="">{props.topSkills[1]}</div>
                <div className="">{props.topSkills[2]}</div>
            </div>

            <Text className="!text-xs text-justify !text-[(--color-mine-shaft-300)]" lineClamp={3}>
                {props.about}
            </Text>
            <Divider size="xs" color="darkorchid" />
            {
                props.invited ? <div className="flex gap-1 text-[var(--color-mine-shaft-200)] text-sm items-center">
                    <IconCalendarMonth className="h-5 w-5" /> Interview : August 27, 2024 10:00PM
                </div> : <div className="flex justify-between">
                    <div className="font-semibold text-[(--color-mine-shaft-200)]">
                        &#8377;{props.expectedCtc}
                    </div>
                    <div className="flex gap-1 text-xs text-[(--color-mine-shaft-400)] items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5} />Posted {props.location}.
                    </div>
                </div>
            }

            <Divider size="xs" color="darkorchid" />
            <div className="flex items-center [&>*]:w-1/2 [&>*]:p-1">
                {
                    !props.invited && <>
                        <NavLink to={"/talent-profile"}>
                            <Button fullWidth color="darkorchid" variant="outline">Profile</Button>
                        </NavLink>
                        <div className="">
                            {
                                !props.posted ? <Button fullWidth color="darkorchid" variant="light">Message</Button> : <Button onClick={open} fullWidth color="darkorchid" rightSection={<IconCalendarMonth className="h-5 w-5" />} variant="light">Schedule</Button>
                            }
                        </div>
                    </>
                }
                {
                    props.invited && <>
                        <div className="">
                            <Button fullWidth color="darkorchid" variant="outline">Accept</Button>
                        </div>
                        <div className="">
                            <Button fullWidth color="darkorchid" variant="light">Reject</Button>
                        </div>
                    </>
                }

            </div>
            <Modal opened={opened} onClose={close} title="Schedule interview" centered >
                <div className="flex flex-col gap-4">
                    <DateInput
                        minDate={new Date()}
                        value={value}
                        onChange={setValue}
                        label="Date"
                        placeholder="Enter date"
                    />
                    <TimeInput label="" ref={ref} onClick={() => ref.current?.showPicker()} />
                    <Button fullWidth color="darkorchid" variant="light">Schedule</Button>
                </div>
            </Modal>
        </div>
    )
}