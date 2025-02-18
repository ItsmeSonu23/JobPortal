import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"
import { card, desc, skills } from "../Data/Data"
import DOMPurify from 'dompurify'
export const JobDescription = (props:any) => {
    const d = DOMPurify.sanitize(desc)
    return <div className="w-2/3">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-[var(--color-mine-shaft-800)] rounded-xl">
                    <img className="h-14" src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="">
                    <div className="font-semibold text-2xl">Software Engineer III</div>
                    <div className="text-lg text-[(--color-mine-shaft-300)]">Google &bull; 3 days ago &#x2022; {"48"} applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <NavLink to={"/apply-jobs"}>
                    <Button color="darkorchid" size="sm" variant="light">{props.edit?"Edit":"Apply"}</Button>
                </NavLink>
                {
                    props.edit? <Button color="red.5" size="sm" variant="outline">Delete</Button>:<IconBookmark className="text-[(--color-electric-violet-400)] cursor-pointer" stroke={1.5} />
                }
            </div>
        </div>
        <Divider my="xl" />
        <div className="flex justify-between">
            {
                card.map((card: any, index: number) => <div key={index} className="flex flex-col items-center gap-1 ">
                    <ActionIcon color="darkorchid" className="!h-12 !w-12" variant="filled" radius="xl" aria-label="Settings">
                        <card.icon className="h-4/5 w-4/5" stroke={1.5} />
                    </ActionIcon>
                    <div className="text-sm text-[(--color-mine-shaft-300)]">{card.name}</div>
                    <div className="font-semibold">{card.value}</div>
                </div>)
            }

        </div>
        <Divider my="xl" />
        <div className="">
            <div className="text-xl font-semibold mb-5">Required Skills</div>
            <div className="flex gap-2 flex-wrap">
                {
                    skills.map((skill, index) => <ActionIcon key={index} color="darkorchid" className="!h-fit !w-fit font-medium !text-sm" p={"xs"} variant="filled" radius="xl" aria-label="Settings">
                        {skill}
                    </ActionIcon>)
                }

            </div>
        </div>
        <Divider my="xl" />
        <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-[(--color-mine-shaft-200)] [&_p]:text-justify [&_*]:text-[(--color-mine-shaft-300)] [&_li]:marker:text-[(--color-electric-violet-500)] [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: d }}>

        </div>
        <Divider my="xl" />
        <div className="">
            <div className="text-xl font-semibold mb-5">About Company</div>
            <div className="flex justify-between mb-5">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-[var(--color-mine-shaft-800)] rounded-xl">
                        <img className="h-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div className="">
                        <div className="font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-lg text-[(--color-mine-shaft-300)]">Google &bull; 3 days ago &#x2022; {"48"} applicants</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <NavLink to={"/company"}>
                        <Button color="darkorchid" variant="light">Company Profile</Button>
                    </NavLink>
                   
                </div>
            </div>
            <div className="text-[(--color-mine-shaft-300)] text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit praesentium nesciunt a ab similique labore eveniet commodi blanditiis, perspiciatis ex deleniti eligendi fugiat quam provident iste facere eos. Deserunt, quidem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas provident itaque molestias ab cupiditate dolorum quae omnis unde et, neque quibusdam qui eius inventore at fugit voluptate tempore! Maxime, voluptas.
            </div>

        </div >
    </div>
}