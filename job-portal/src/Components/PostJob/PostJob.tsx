import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { SelectInput } from "./SelectInput"
import { TextEditor } from "./TextEditor";
import { content, feilds } from "../../Data/Data";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PostJob = () => {
   const user = useSelector((state:any)=>state.user)
   const select = feilds;
   const navigate = useNavigate()
   const form = useForm({
      mode: 'controlled',
      validateInputOnChange: true,
      initialValues: {
         jobTitle: "",
         company: '',
         expirience: "",
         jobType: "",
         location: "",
         packageOffered: "",
         skillsRequired: [],
         about: "",
         description: content
      },
      validate: {
         jobTitle: isNotEmpty("Title is required"),
         company: isNotEmpty("Comapny is required"),
         expirience: isNotEmpty("Expirience is required"),
         jobType: isNotEmpty("Job Type is required"),
         location: isNotEmpty("Location is required"),
         packageOffered: isNotEmpty("Package is required"),
         skillsRequired: isNotEmpty("Skills are required"),
         about: isNotEmpty("About is required"),
         description: isNotEmpty("Description is required")
      }
   })

   const handlePost = () => {
      form.validate();
      if (!form.isValid())return;
      console.log(form.getValues());
      
      postJob({...form.getValues(),postedBy:user.id,jobStatus:"ACTIVE"}).then((res)=>{
         console.log(res);  
         successNotification("Success","Job posted SuccesFully")
         navigate(`/posted-job/${res.id}`)
      }).catch((err)=>{
         console.log(err);
         errorNotification("Job Posting failed",err.response.data.errorMessage)
      } )
   }

   const handleDraft = () => {      
      postJob({...form.getValues(),postedBy:user.id,jobStatus:"DRAFT"}).then((res)=>{
         console.log(res);  
         successNotification("Success","Job drafted SuccesFully")
         navigate(`/posted-job/${res.id}`)
      }).catch((err)=>{
         console.log(err);
         errorNotification("Job drafting failed",err.response.data.errorMessage)
      } )
   }

   return <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>
      <div className="flex flex-col gap-5">
         <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />

         </div>
         <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="expirience" {...select[2]} />
            <SelectInput form={form} name="jobType" {...select[3]} />

         </div>
         <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="location" {...select[4]} />
            <NumberInput withAsterisk {...form.getInputProps("packageOffered")} clampBehavior="strict" label="Salary" min={1} max={300} placeholder="Enter salary" hideControls />
         </div>
         <TagsInput {...form.getInputProps("skillsRequired")} withAsterisk label="Skills" placeholder="Enter Skills" clearable acceptValueOnBlur splitChars={[",", " ", "|"]} />
         <Textarea {...form.getInputProps("about")} withAsterisk label="About Job" autosize minRows={3} placeholder="Enter about the job" />
         <div className="[&_button[data-active='true']]:text-[var(--color-electric-violet-500)] [&_button[data-active='true']]:bg-[var(--color-electric-violet-500)]/20">
            <div className="text-sm font-medium">Job Description <span className="text-red-700">*</span></div>
            <TextEditor form={form} />
         </div>
         <div className="flex gap-4 ">
            <Button color="darkorchid" variant="light" onClick={handlePost}>Publish Job</Button>
            <Button onClick={handleDraft} color="darkorchid" variant="outline">Save As Draft</Button>
         </div>
      </div>
   </div>
}