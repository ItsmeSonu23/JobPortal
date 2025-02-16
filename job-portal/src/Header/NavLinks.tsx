import { NavLink } from "react-router-dom"

export const NavLinks = () => {
    return (
        // Navigation linkes of the homepage
        <div className="flex gap-4 text-xl h-full items-center">
            <NavLink to={"/find-jobs"} className={({isActive})=> isActive ? "flex border-t-[3px] text-[var(--color-electric-violet-300)] items-center h-full":""}>
                Find Jobs
            </NavLink>
            <NavLink to={"/find-talent"} className={({isActive})=> isActive ? "flex border-t-[3px] text-[var(--color-electric-violet-300)] items-center h-full":""}>
                Find Talent
            </NavLink>
            <NavLink to={"/post-job"} className={({isActive})=> isActive ? "flex border-t-[3px] text-[var(--color-electric-violet-300)] items-center h-full":""}>
                Post Job
            </NavLink>
            <NavLink to={"/about"} className={({isActive})=> isActive ? "flex border-t-[3px] text-[var(--color-electric-violet-300)] items-center h-full":""}>
                About Us
            </NavLink>
        </div>
    )
}