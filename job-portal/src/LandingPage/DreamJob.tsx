import { Avatar, TextInput } from "@mantine/core"
import { CiSearch } from "react-icons/ci"

export const DreamJob = () => {
    return (
        // landing page section 1 of the home page of the website
        <div className="flex items-center px-20">
            <div className="flex flex-col w-[45%]">
                <div className="text-7xl font-bold text-[var(--color-mine-shaft-100)] [&>span]:text-[var(--color-electric-violet-500)]">Find your <span>dream</span> <span>job</span> with us</div>
                <div className="text-lg text-[var(--color-mine-shaft-200)] my-3">Good life begins with a good company. Start explore thousand of jobs in one place</div>
                <div className="flex gap-3 mt-3">
                    <TextInput className="bg-[var(--color-mine-shaft-700)] rounded-lg py-1 px-2 text-[var(--color-mine-shaft-100)] [&_input]:!text-[var(--color-mine-shaft-100)]"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />
                    <TextInput className="bg-[var(--color-mine-shaft-700)] rounded-lg py-1 px-2 text-[var(--color-mine-shaft-100)] [&_input]:!text-[var(--color-mine-shaft-100)]"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <div className="flex items-center justify-center h-full w-20 bg-[var(--color-electric-violet-500)] text-[var(--color-mine-shaft-100)] rounded-lg p-1 hover:bg-[var(--color-electric-violet-600)]">
                        <CiSearch className="h-[85%] w-[85%]" />

                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[28rem] relative ">
                    <img src="images/AvatarHome.png" alt="Its Homepage avatar" />
                    <div className="absolute -right-15 top-[50%] w-fit border border-[var(--color-electric-violet-500)] rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center text-[var(--color-mine-shaft-100)] mb-1 text-sm">10K+ got jobs</div>
                        <Avatar.Group>
                            <Avatar src="images/avatar.png" />
                            <Avatar src="images/avatar-7.png" />
                            <Avatar src="images/avatar-8.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute -left-5 top-[25%] w-fit border border-[var(--color-electric-violet-500)] rounded-lg p-2 backdrop-blur-md flex gap-3 flex-col ">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 bg-[var(--color-mine-shaft-900)] rounded-lg">
                                <img src="images/google.png" alt="" />
                            </div>
                            <div className="text-sm text-[var(--color-mine-shaft-100)]">
                                <div>Software Engineer</div>
                                <div className="text-[var(--color-mine-shaft-300)] text-xs ">Jaipur</div>
                            </div>
                        </div>
                        <div className=" flex gap-2 text-[var(--color-mine-shaft-300)] justify-between text-xs">
                            <span>1 day ago</span><span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}