import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconPaperclip } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const ApplyJobCom = () => {
    // Preview state variable for the condition executed for preview initialized with flase 
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false)
    const [sec, setSec] = useState(5)

    // use navigate has been used to navigate the value of last page or back page here
    const navigate = useNavigate()
    const handlePreview = () => {
        setPreview(!preview)
        // scroolling after submit is added here
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // function to submit the value of the form 
    const handleSubmit = () => {
        setSubmit(true)
        let x = 5;
        // logic for redirecting back to find jobs page
        setInterval(() => {
            x--;
            setSec(x);
            if (x == 0) navigate("/find-jobs")
        }, 1000)
    }
    return (
        <>
            <div className="w-2/3 mx-auto">
                {/* loading entity used for the loading time in the page iot is mainly in the dotted value ... */}
                <LoadingOverlay className="!fixed " visible={submit} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: "darkorchid", type: "dots" }} />

                {/* This is company profile used in the apply job section */}
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-[var(--color-mine-shaft-800)] rounded-xl">
                            {/* Company image */}
                            <img className="h-14" src={`/Icons/Google.png`} alt="" />
                        </div>
                        <div className="">
                            {/* Role of the job */}
                            <div className="font-semibold text-2xl">Software Engineer III</div>
                            {/* Posted days  */}
                            <div className="text-lg text-[(--color-mine-shaft-300)]">Google &bull; 3 days ago &#x2022; {"48"} applicants</div>
                        </div>
                    </div>
                </div>
                {/* its a divider used for partitioning the different divisions and sections of the page */}
                <Divider my="xl" />

                <div className="text-xl font-semibold mb-5">Submit your Application</div>
                {/* Form for the apllication submission mainly imported from the mantine core */}
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        {/* full name */}
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Full-Name" withAsterisk placeholder="Enter your name" />
                        {/* email */}
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Email" withAsterisk placeholder="Enter your email" />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        {/* Mobile number */}
                        <NumberInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Mobile Number" hideControls withAsterisk clampBehavior="strict" min={1000000000} max={9999999999} placeholder="Enter your phone number" />
                        {/* Url */}
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Portfolio" withAsterisk placeholder="Enter your url" />
                    </div>
                    {/* File upload section */}
                    <FileInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV/Resume" placeholder="Attach your CV/Resume" />
                    {/* Enter about yourself section */}
                    <Textarea readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} withAsterisk autosize placeholder="About yourself" label="Cover Letter" minRows={4} />
                    {
                        // button base on the preview state of the apply job section will show oreview when it is falss otherwise redirect to the botton section
                        !preview && <Button color="darkorchid" variant="light" onClick={handlePreview}>Preview</Button>
                    }
                    {
                        // it is also dependent on the state of the preview section when the preview ius true the submiot and edit button will show 
                        preview && <div className="flex gap-10 [$>*:w-1/2]">
                            {/* edit button */}
                            <Button fullWidth color="darkorchid" variant="light" onClick={handlePreview}>Edit</Button>
                            {/* submit button */}
                            <Button fullWidth color="darkorchid" variant="light" onClick={handleSubmit}>Submit</Button>
                        </div>
                    }
                </div>

            </div>
            
            {/* Thuis is the notification bar imported from the MANTINE core top show the status of the submission of the file also uising the setSec state for redirection to the find jobs page*/}
            <Notification className={`!border-[var(--color-electric-violet-500)]  transition duration-200 z-1001 ease-in-out !fixed top-0 left-[38%] ${submit ? "translate-y-0" : "-translate-y-20"}`} icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} color="teal" withBorder title="Application Submitted!" mt="md" withCloseButton={false}>
                Redirecting to Find Jobs in {sec} seconds
            </Notification>
        </>
    )
}