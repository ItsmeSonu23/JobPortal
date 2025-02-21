import { Button, Checkbox, Textarea } from "@mantine/core"
import { SelectInputt } from "./SelectInputt"
import { useState } from "react"
import { MonthPickerInput } from "@mantine/dates"
import { profileFeild } from "../../Data/Data"

export const ExpInput = (props: any) => {
    const [checked, setChecked] = useState(false)
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const [endDate, setEndDate] = useState<Date | null>(new Date())
    const [desc, setDesc] = useState("As a Software Engineer at Google, I specialized in building scalable and high-performance applications. My expertise lies in integrating frontend and backend technologies to deliver seamless user experiences. With a strong foundation in React, SpringBoot, and MongoDB for database management.")
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add?"Add Expirience":"Edit Expirience"}</div>
            <div className="">
                <SelectInputt {...profileFeild[0]} />
                <SelectInputt {...profileFeild[1]} />
            </div>
            <SelectInputt {...profileFeild[2]} />
            <Textarea withAsterisk label="Summary" autosize minRows={3} placeholder="Enter summary" value={desc} onChange={(event) => setDesc(event.currentTarget.value)} />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput withAsterisk maxDate={endDate || undefined} label="Start Date" placeholder="Pick Date" value={startDate} onChange={setStartDate} />
                <MonthPickerInput disabled={checked} withAsterisk minDate={startDate || undefined} maxDate={new Date()} label="End Date" placeholder="Pick Date" value={endDate} onChange={setEndDate} />
            </div>
            <Checkbox autoContrast label="Currently working here" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            <div className="flex gap-5">
                <Button onClick={() =>props.setEdit(false)} color="darkorchid" variant="outline">Save</Button>
                <Button onClick={() =>props.setEdit(false)} color="red.5" variant="light">Discard</Button>
            </div>
        </div >
    )
}