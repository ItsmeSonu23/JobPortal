import { Badge, Tabs } from "@mantine/core"
import { talents } from "../../Data/Data"
import { TalentCard } from "../FindTalent/TalentCard"
import { JobDescription } from "../JobDescription/JobDescription"

export const PostedJobDesc = () => {
    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center">Software Engineer <Badge variant="light" ml="sm" size="sm" color="darkorchid"></Badge></div>
        <div className="font-medium text-[var(--color-mine-shaft-300)] mb-5">New York ,United States</div>
        <div className="">
            <Tabs variant="outline" radius="lg" defaultValue="overview">
                <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active='true']]:!text-[var(--color-electric-violet-500)]">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" className="[&>div]:w-full">
                    <JobDescription edit />
                </Tabs.Panel>
                <Tabs.Panel value="applicants">
                    <div className="mt-10 flex flex-wrap gap-5">
                        {
                            talents.map((talent, index) => index < 6 && <TalentCard key={index} {...talent} posted />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className="mt-10 mx-5 flex flex-wrap gap-10">
                        {
                            talents.map((talent, index) => index<6 && <TalentCard key={index} {...talent} invited />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}