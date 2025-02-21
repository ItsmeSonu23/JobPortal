import { Carousel } from '@mantine/carousel'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { jobCategory } from '../../Data/Data';
export const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold text-[var(--color-mine-shaft-100)]">Browse <span className="text-[var(--color-electric-violet-500)]">Job</span> Categories</div>
            <div className="text-lg mb-10 text-center w-1/2 mx-auto text-[var(--color-mine-shaft-300)]">Explore diverse job opportunities tailored to your skills . Start your career journey today!</div>
            <Carousel slideSize="20%" slideGap="md" loop
                className='[&_button]:!bg-[var(--color-electric-violet-500)] 
                [&_button]:!border-none 
                [&_button]:opacity-0 
                [&_button]:visibility-hidden 
                hover:[&_button]:opacity-100 
                hover:[&_button]:visibility-visible 
                [&_button]:transition-opacity duration-300'
                nextControlIcon={<IconArrowRight className="h-8 w-8" />}
                previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
            >
                {
                    jobCategory.map((category, index) => <Carousel.Slide>

                        <div key={index} className="flex flex-col items-center w-64 gap-2 border border-[var(--color-electric-violet-500)] p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_darkorchid] my-5">
                            <div className="p-2 bg-[var(--color-electric-violet-500)] rounded-full">
                                <img className="h-8 w-8" src={`Categories/${category.name}.png`} alt={category.name} />
                            </div>
                            <div className="text-[var(--color-mine-shaft-100)] text-xl font-semibold">{category.name}</div>
                            <div className="text-[var(--color-mine-shaft-300)] text-sm text-center">{category.desc}</div>
                            <div className="text-[var(--color-electric-violet-400)] text-lg">{category.jobs}+ new jobs posted</div>
                        </div>

                    </Carousel.Slide>)
                }
            </Carousel>

        </div>
    )
}