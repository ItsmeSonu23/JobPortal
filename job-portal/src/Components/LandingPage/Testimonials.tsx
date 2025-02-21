import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "../../Data/Data"

export const Testimonials = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-5 text-[var(--color-mine-shaft-100)]">What <span className="text-[var(--color-electric-violet-500)]">User</span> says about us</div>
        <div className="flex justify-evenly ">
            {
                testimonials.map((data, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-3 w-[23%] border border-[var(--color-electric-violet-500)] p-3 rounded-xl ">
                            <div className="flex gap-2 items-center">
                                <Avatar className="!h-14 !w-14" src="images/avatar.png" />
                                <div className="">
                                    <div className="text-lg text-[var(--color-mine-shaft-100)] font-semibold">{data.name}</div>
                                    <Rating value={data.rating} fractions={2} readOnly />;
                                </div>
                            </div>
                            <div className="text-xs text-[var(--color-mine-shaft-100)] ">
                                {data.testimonial}
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>


}