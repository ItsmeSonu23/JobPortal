import { Companies } from "../Components/LandingPage/Companies"
import { DreamJob } from "../Components/LandingPage/DreamJob"
import { JobCategory } from "../Components/LandingPage/JobCategory"
import { Subscribe } from "../Components/LandingPage/Subscribe"
import { Testimonials } from "../Components/LandingPage/Testimonials"
import { Working } from "../Components/LandingPage/Working"


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