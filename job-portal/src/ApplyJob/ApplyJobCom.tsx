import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconPaperclip } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const ApplyJobCom = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false)
    const [sec,setSec] = useState(5)
    const navigate = useNavigate()
    const handlePreview = () => {
        setPreview(!preview)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const handleSubmit = () => {
        setSubmit(true)
        let x = 5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0) navigate("/find-jobs")
        },1000)
    }
    return (
        <>
            <div className="w-2/3 mx-auto">
                <LoadingOverlay className="!fixed " visible={submit} zIndex={1000} overlayProps={{radius:"sm",blur:2}} loaderProps={{color:"darkorchid",type:"dots"}}/>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-[var(--color-mine-shaft-800)] rounded-xl">
                            <img className="h-14" src={`/Icons/Google.png`} alt="" />
                        </div>
                        <div className="">
                            <div className="font-semibold text-2xl">Software Engineer III</div>
                            <div className="text-lg text-[(--color-mine-shaft-300)]">Google &bull; 3 days ago &#x2022; {"48"} applicants</div>
                        </div>
                    </div>
                </div>
                <Divider my="xl" />
                <div className="text-xl font-semibold mb-5">Submit your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Full-Name" withAsterisk placeholder="Enter your name" />
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Email" withAsterisk placeholder="Enter your email" />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Mobile Number" hideControls withAsterisk clampBehavior="strict" min={1000000000} max={9999999999} placeholder="Enter your phone number" />
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Portfolio" withAsterisk placeholder="Enter your url" />
                    </div>
                    <FileInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV/Resume" placeholder="Attach your CV/Resume" />
                    <Textarea readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} withAsterisk autosize placeholder="About yourself" label="Cover Letter" minRows={4} />
                    {
                        !preview && <Button color="darkorchid" variant="light" onClick={handlePreview}>Preview</Button>
                    }
                    {
                        preview && <div className="flex gap-10 [$>*:w-1/2]">
                            <Button fullWidth color="darkorchid" variant="light" onClick={handlePreview}>Edit</Button>
                            <Button fullWidth color="darkorchid" variant="light" onClick={handleSubmit}>Submit</Button>
                        </div>
                    }
                </div>

            </div>
            <Notification className={`!border-[var(--color-electric-violet-500)]  transition duration-200 z-1001 ease-in-out !fixed top-0 left-[38%] ${submit?"translate-y-0":"-translate-y-20"}` }icon={<IconCheck style={{width:rem(20),height:rem(20)}} />} color="teal" withBorder title="Application Submitted!" mt="md" withCloseButton={false}>
                Redirecting to Find Jobs in {sec} seconds
            </Notification>
        </>
    )
}