import { Divider} from "@mantine/core"
import { ApplicationForm } from "./ApplicationForm";
import { timeAgo } from "../../Services/Utilities";

export const ApplyJobCom = (props:any) => {
    
    return (
        <div className="w-2/3 mx-auto">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-[var(--color-mine-shaft-800)] rounded-xl">
                        {/* Company image */}
                        <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div className="">
                        {/* Role of the job */}
                        <div className="font-semibold text-2xl">{props.jobTitle}</div>
                        {/* Posted days  */}
                        <div className="text-lg text-[(--color-mine-shaft-300)]">{props.company} &bull; {timeAgo(props.postTime)} &#x2022; {props.applicants?props.applicants.length:0}</div>
                    </div>
                </div>
            </div>
            <Divider my="xl" />
            <ApplicationForm/>
        </div>
    )
}