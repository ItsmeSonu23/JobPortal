import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import { ExpCard } from "./ExpCard"
import { Certification } from "./Certification"

export const Profile = (props: any) => {
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/Banner.png" alt="" />
            <img className="h-48 w-48 border-8 absolute -bottom-1/3 rounded-full left-3 border-[var(--color-mine-shaft-950)]" src="/images/avatar.png" alt="" />
        </div>
        <div className="px-4 mt-25">
            <div className="text-3xl font-semibold flex justify-between">{props.name}<Button color="darkorchid" variant="light">Message</Button></div>
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{props.role} &bull; {props.company}</div>
            <div className="text-lg flex gap-1 items-center text-[var(--color-mine-shaft-400)]">
                <IconMapPin className="h-5 w-5" stroke={1.5} />{props.location}
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-sm text-[var(--color-mine-shaft-400)] text-justify">
                    {props.about}
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Skills</div>
                <div className="flex flex-wrap gap-2 ">
                    {
                        props.skills.map((skill: any, index: any) => <div key={index} className="bg-[var(--color-electric-violet-500)] rounded-3xl text-[var(--color-mine-shaft-200)] text-xs font-medium px-3 py-1">{skill}</div>)

                       
                        
                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3 ">
                <div className="text-2xl font-semibold mb-5">Expirience</div>
                <div className="flex flex-col gap-8">
                    {
                        props.expirience.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Cartifications</div>
                <div className="flex flex-col gap-8">
                    {
                        props.certifications.map((cert: any, index: any) => <Certification key={index} {...cert} />)
                    }
                </div>
               
            </div>
        </div>
    </div>
}