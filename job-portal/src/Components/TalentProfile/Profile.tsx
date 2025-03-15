import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import { ExpCard } from "./ExpCard"
import { Certification } from "./Certification"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProfile } from "../../Services/ProfileService"
/**
 * Profile Component
 * 
 * Displays a comprehensive talent profile with personal info, skills, experience and certifications.
 * 
 * @component
 * 
 * Features:
 * - Profile banner and avatar display
 * - Personal information section (name, role, location)
 * - About section with bio
 * - Skills showcase with tags
 * - Work experience timeline
 * - Professional certifications list
 * - Direct messaging button
 * 
 * Visual Elements:
 * - Banner image with overlapping avatar
 * - Two-column layout for header info
 * - Dividers between sections
 * - Skill tags with consistent styling
 * - Experience and certification cards
 * 
 * Layout:
 * - Fixed width (2/3 of container)
 * - Consistent padding and spacing
 * - Responsive text sizing
 * - Section-based organization
 * 
 * Props:
 * @param {Object} props - Component properties
 * @param {string} props.name - User's full name
 * @param {string} props.role - Current job role
 * @param {string} props.company - Current company
 * @param {string} props.location - User's location
 * @param {string} props.about - User's bio/description
 * @param {string[]} props.skills - Array of skill tags
 * @param {Object[]} props.expirience - Array of work experience entries
 * @param {Object[]} props.certifications - Array of certification entries
 * 
 * Styling:
 * - Custom color variables for consistent theming
 * - Rounded corners for visual elements
 * - Muted text colors for secondary information
 * - Consistent font sizing hierarchy
 * 
 * Sub-components:
 * - ExpCard: Displays individual work experience
 * - Certification: Shows certification details
 * 
 * @returns {JSX.Element} A complete talent profile page
 */
export const Profile = () => {
    const { id } = useParams()
    const [profile, setProfile] = useState<any>(null)
    useEffect(() => {
        console.log(id);
        
        window.scrollTo(0, 0)
        getProfile(id).then((res: any) => {
            setProfile(res)
        }).catch((err: any) => {
            console.log(err)
        })
    }, [id])
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/Banner.png" alt="" />
            <img className="h-48 w-48 border-8 absolute -bottom-1/3 rounded-full left-3 border-[var(--color-mine-shaft-950)]" src={profile?.picture ? `data:image/png;base64,${profile?.picture}` : "/images/avatar.png"} alt="" />
        </div>
        <div className="px-4 mt-25">
            <div className="text-3xl font-semibold flex justify-between">{profile?.name}<Button color="darkorchid" variant="light">Message</Button></div>
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{profile?.jobTitle} &bull; {profile?.company}</div>
            <div className="text-lg flex gap-1 items-center text-[var(--color-mine-shaft-400)]">
                <IconMapPin className="h-5 w-5" stroke={1.5} />{profile?.location}
            </div>
            <div className="text-lg flex gap-1 items-center text-[var(--color-mine-shaft-400)]">
                <IconBriefcase className="h-5 w-5" stroke={1.5} />Experience: {profile?.totalExp} Years
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-sm text-[var(--color-mine-shaft-400)] text-justify">
                    {profile?.about}
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Skills</div>
                <div className="flex flex-wrap gap-2 ">
                    {
                        profile?.skills.map((skill: any, index: any) => <div key={index} className="bg-[var(--color-electric-violet-500)] rounded-3xl text-[var(--color-mine-shaft-200)] text-xs font-medium px-3 py-1">{skill}</div>)
                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3 ">
                <div className="text-2xl font-semibold mb-5">Expirience</div>
                <div className="flex flex-col gap-8">
                    {
                        profile?.expiriences.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Cartifications</div>
                <div className="flex flex-col gap-8">
                    {
                        profile?.certifications.map((cert: any, index: any) => <Certification key={index} {...cert} />)
                    }
                </div>
            </div>
        </div>
    </div>
}