import { TextInput, NumberInput, FileInput, Textarea, Button, LoadingOverlay } from "@mantine/core"
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react"
import { useState } from "react";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import { useNavigate, useParams } from "react-router-dom";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useSelector } from "react-redux";

export const ApplicationForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const user = useSelector((state: any) => state.user)
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false)

    const handlePreview = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Manually validate the resume field (FileInput)
        if (!form.values.resume) {
            form.setErrors({ resume: 'Resume cannot be empty' });
            console.log('Form validation failed');
            return;
        }

        // Trigger validation
        form.validate();

        // Check if there are validation errors
        if (Object.keys(form.errors).length > 0) {
            console.log('Form validation failed');
            console.log(form.errors);  // Log validation errors for debugging
            return;
        }

        console.log('Form is valid');
        setPreview(!preview);  // Toggle preview state
    };

    // function to submit the value of the form 
    const handleSubmit = async () => {
        setSubmit(true)
        let resume: any = await getBase64(form.getValues().resume)
        let applicant = { ...form.getValues(), applicantId: user.id, resume: resume.split(",")[1] }
        applyJob(id, applicant).then((res) => {
            setSubmit(false)
            successNotification("Succesfull", "Job applied successfully")
            navigate("/job-history")
        }).catch((err) => {
            console.log(err);
            errorNotification("Failed", err.response.data.errorMessage)
        })
    }

    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            website: '',
            resume: null,
            coverLetter: ''
        },
        validate: {
            name: isNotEmpty('Name cannot be empty'),
            email: isNotEmpty("Email cannot be empty"),
            phone: isNotEmpty("Phone cannot be empty"),
            website: isNotEmpty("Website cannot be empty"),
            resume: isNotEmpty("Resume cannot be empty"),
            coverLetter: isNotEmpty("CoverLetter cannot be empty")
        }
    })
    return (<>
        <LoadingOverlay className="!fixed " visible={submit} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: "darkorchid", type: "dots" }} />
        <div className="text-xl font-semibold mb-5">Submit your Application</div>
        {/* Form for the apllication submission mainly imported from the mantine core */}
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                {/* full name */}
                <TextInput {...form.getInputProps("name")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Full-Name" withAsterisk placeholder="Enter your name" />
                {/* email */}
                <TextInput {...form.getInputProps("email")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Email" withAsterisk placeholder="Enter your email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                {/* Mobile number */}
                <NumberInput {...form.getInputProps("phone")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Phone Number" hideControls withAsterisk clampBehavior="strict" placeholder="Enter your phone number" />

                {/* Url */}
                <TextInput {...form.getInputProps("website")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} label="Portfolio" withAsterisk placeholder="Enter your url" />
            </div>
            {/* File upload section */}
            <FileInput readOnly={preview}  {...form.getInputProps("resume")} accept="application/pdf" variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV/Resume" placeholder="Attach your CV/Resume" />
            {/* Enter about yourself section */}
            <Textarea {...form.getInputProps("coverLetter")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-[(--color-mine-shaft-300)] font-semibold" : ""}`} withAsterisk autosize placeholder="About yourself" label="Cover Letter" minRows={4} />
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
    </>)
}
