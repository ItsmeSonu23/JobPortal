import { Button, Textarea } from "@mantine/core"
import { profileFeild } from "../Data/Data"
import { SelectInputt } from "./SelectInputt"
import { MonthPickerInput } from "@mantine/dates"
import { useState } from "react"

export const CertiInput = (props: any) => {
    const[issueDate,setIssueDate] = useState<Date | null>(new Date())
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="[&>*]:w-1/2 flex gap-10">
                <Textarea label="Title" withAsterisk placeholder="Enter title" />
                <SelectInputt {...profileFeild[1]} />
            </div>
            <MonthPickerInput withAsterisk minDate={new Date()} maxDate={new Date()} label="Issued Date" placeholder="Pick Date" value={issueDate} onChange={setIssueDate} />
            <Textarea label="Certificate ID" withAsterisk placeholder="Enter certificate id" />
            <div className="flex gap-5">
                <Button onClick={() => props.setEdit(false)} color="darkorchid" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.5" variant="light">Discard</Button>
            </div>
        </div >
    )
}