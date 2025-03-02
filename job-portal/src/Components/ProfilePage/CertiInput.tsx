import { Button, Textarea } from "@mantine/core"
import { SelectInputt } from "./SelectInputt"
import { MonthPickerInput } from "@mantine/dates"
import { useState } from "react"
import { profileFeild } from "../../Data/Data"
import { useForm, isNotEmpty } from "@mantine/form"
import { useDispatch, useSelector } from "react-redux"
import { successNotification } from "../../Services/NotificationService"
import { changeProfile } from "../../Slices/ProfileSlice"

export const CertiInput = (props: any) => {
    const profile = useSelector((state: any) => state.profile)
    const dispatch = useDispatch();
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            title: "",
            issuer: "",
            issueDate: new Date(),
            certificateId: ""
        },

        validate: {
            title: isNotEmpty("Title is required"),
            issuer: isNotEmpty("issuer is required"),
            issueDate: isNotEmpty("issue date is required"),
            certificateId: isNotEmpty("Certificate id is required")
        }
    })

    const handleSave = () => {
        form.validate()
        if (!form.isValid()) return;
        let certi = [...profile.certifications]
        certi.push(form.getValues())
        certi[certi.length - 1].issueDate = certi[certi.length - 1].issueDate.toISOString();
        let updatedProfile = { ...profile, certifications: certi }
        props.setEdit(false)
        dispatch(changeProfile(updatedProfile))
        successNotification("Certification updated successfully", "Your profile certification has been added successfully")
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="[&>*]:w-1/2 flex gap-10">
                <Textarea {...form.getInputProps("title")} label="Title" withAsterisk placeholder="Enter title" />
                <SelectInputt form={form} name="issuer" {...profileFeild[1]} />
            </div>
            <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk  maxDate={new Date()} label="Issued Date" placeholder="Pick Date"  />
            <Textarea {...form.getInputProps("certificateId")} label="Certificate ID" withAsterisk placeholder="Enter certificate id" />
            <div className="flex gap-5">
                <Button onClick={handleSave} color="darkorchid" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.5" variant="light">Discard</Button>
            </div>
        </div >
    )
}