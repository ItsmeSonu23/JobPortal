import Marquee from "react-fast-marquee"
import { companies } from "../../Data/Data"
export const Companies = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl font-semibold text-[var(--color-mine-shaft-100)] text-center mb-10">Trusted By <span className="text-[var(--color-electric-violet-500)]">1000+</span> Companies</div>
        <Marquee pauseOnHover={true}>
            {
              companies.map((company,index)=>{
                    return(
                        <div key={index} className=" mx-8 px-2 py-1 hover:bg-[var(--color-mine-shaft-900)] rounded-xl cursor-pointer">
                            <img className="h-14" src={`/Companies/${company}.png`} alt={company} />
                        </div>
                    )
              })
            }
            
        </Marquee>
    </div>
}