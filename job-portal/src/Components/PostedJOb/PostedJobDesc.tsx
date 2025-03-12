import { Badge, Tabs } from "@mantine/core"
import { TalentCard } from "../FindTalent/TalentCard"
import { JobDescription } from "../JobDescription/JobDescription"

/**
 * PostedJobDesc Component
 * 
 * A component that displays detailed information about a posted job, including overview and applicant management.
 * Features tabbed navigation between different applicant statuses and job details.
 * 
 * @component
 * 
 * Features:
 * - Job title and status display
 * - Location information
 * - Tabbed interface for different views
 * - Applicant filtering by status
 * - Job description editor
 * 
 * Visual Elements:
 * - Large job title with status badge
 * - Location text in subdued color
 * - Tab navigation with active state highlighting
 * - Filtered applicant card displays
 * 
 * Layout:
 * - 3/4 width container (w-3/4)
 * - Horizontal padding of 20px (px-5)
 * - Top margin of 20px (mt-5)
 * - Flexible card grid for applicants
 * 
 * Styling:
 * - Dark theme with Mine Shaft color palette
 * - Electric Violet accents for active tabs
 * - Light variant badge for job status
 * - Large tab text with custom active state
 * 
 * Tabs:
 * - Overview: Job description editor
 * - Applicants: Shows applied candidates
 * - Invited: Shows interviewing candidates
 * - Offered: Placeholder for offered candidates
 * - Rejected: Placeholder for rejected candidates
 * 
 * Props:
 * @param {Object} props - Component properties
 * @param {string} props.jobTitle - Title of the job posting
 * @param {string} props.jobStatus - Current status of the job
 * @param {string} props.location - Location of the job
 * @param {Array<Object>} props.applicants - Array of applicant data
 * 
 * Data Flow:
 * - Filters applicants based on applicationStatus
 * - Passes job data to JobDescription component
 * - Passes applicant data to TalentCard components
 * 
 * @returns {JSX.Element} A detailed view of job posting and applicant management
 */
export const PostedJobDesc = (props: any) => {

    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center">{props.jobTitle} <Badge variant="light" ml="sm" size="sm" color="darkorchid">{props.jobStatus}</Badge></div>
        <div className="font-medium text-[var(--color-mine-shaft-300)] mb-5">{props.location}</div>
        <div className="">
            <Tabs variant="outline" radius="lg" defaultValue="overview">
                <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active='true']]:!text-[var(--color-electric-violet-500)]">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" className="[&>div]:w-full">
                    <JobDescription edit {...props} />
                </Tabs.Panel>
                <Tabs.Panel value="applicants">
                    <div className="mt-10 flex flex-wrap gap-5">
                        {
                            props.applicants?.filter((x: any) => x.applicationStatus === "APPLIED"
                            ).map((talent: any, index: any) => <TalentCard key={index} {...talent} posted={true} />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className="mt-10 mx-5 flex flex-wrap gap-10">
                        {
                            props.applicants?.filter((x: any) => x.applicationStatus === "INTERVIEWING").map((talent: any, index: any) => <TalentCard key={index} {...talent} invited={true} />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}