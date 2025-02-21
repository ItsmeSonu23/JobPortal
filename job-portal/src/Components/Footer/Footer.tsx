import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react"
import { TbCloverFilled } from "react-icons/tb"
import { useLocation } from "react-router-dom"
import { footerLinks } from "../../Data/Data"

export const Footer = () => {
    const location = useLocation()
    return location.pathname != "/signup" &&  location.pathname != "/login"  ? <div className="pt-20 pb-10 bg-[var(--color-mine-shaft-950)] flex gap-5 justify-around font-['Karla']">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-[var(--color-electric-violet-500)]">
                <TbCloverFilled className="text-3xl" />
                <div className="text-3xl font-semibold">
                    Clover
                </div>
            </div>
            <div className="text-sm text-[var(--color-mine-shaft-300)]">
                Job portal with user profiles, skill updates, certifications, work expirience and admin job postings.
            </div>
            <div className=" flex gap-3 text-[var(--color-electric-violet-500)] [&>div]:bg-[var(--color-mine-shaft-900)] [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-[var(--color-mine-shaft-700)]">
                <div className=""><IconBrandFacebook /></div>
                <div className=""><IconBrandInstagram /></div>
                <div className=""><IconBrandX /></div>
            </div>
        </div>
        {
            footerLinks.map((items, index) => {
                return (
                    <div key={index}>
                        <div className="text-lg font-semibold mb-4 text-[var(--color-electric-violet-500)]">{items.title}</div>
                        {
                            items.link.map((links, index) => {
                                return (
                                    <div className="text-[var(--color-mine-shaft-300)] text-sm hover:text-[var(--color-electric-violet-500)] cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" key={index}>
                                        {links}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
    </div> : <></>
}