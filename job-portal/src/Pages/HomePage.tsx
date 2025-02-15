import { Companies } from "../LandingPage/Companies"
import { DreamJob } from "../LandingPage/DreamJob"
import { JobCategory } from "../LandingPage/JobCategory"
import { Subscribe } from "../LandingPage/Subscribe"
import { Testimonials } from "../LandingPage/Testimonials"
import { Working } from "../LandingPage/Working"

export const HomePage = ()=>{
    return(
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font-['Karla']">
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
        </div>
    )
}