import { Tabs } from "@mantine/core"
import { Card } from "./Card"
import { useEffect, useState } from "react"
import { getAllJobs } from "../../Services/JobService"
import { useSelector } from "react-redux"

export const JobHistory = () => {
    const profile = useSelector((state:any)=> state.profile)
    const user = useSelector((state:any)=> state.user)
    const[activeTab,setActiveTab] = useState<any>('APPLIED')
    const[jobList,setJobList] = useState<any>([])
    const[showList, setShowList] = useState<any>([])
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
            setShowList(res.filter((job:any)=> job.applicants?.filter((applicant:any)=>applicant.applicantId==user.id && applicant.applicationStatus=="APPLIED").length>0))
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])

    const handleTabChange=(value:string|null)=>{
        setActiveTab(value)
        if(value==="SAVED"){
            setShowList(jobList.filter((job:any)=>profile.savedJobs?.includes(job.id)))
        }else{
            setShowList(jobList.filter((job:any)=> job.applicants?.filter((applicant:any)=>applicant.applicantId==user.id && applicant.applicationStatus==value).length>0))
        }
    }
    return (
        <div className="">
            <div className="text-2xl font-semibold mb-5">Job History</div>
            <div className="w-full">
                <Tabs value={activeTab} onChange={handleTabChange} variant="outline" radius="lg" defaultValue="applied">
                    <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active='true']]:!text-[var(--color-electric-violet-500)]">
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={activeTab}>
                        <div className="w-full mx-5 mt-10 flex flex-wrap gap-5">
                            {
                                showList.map((job:any, index:any) => <Card key={index} {...job} {...{[activeTab.toLowerCase()]:true}}/>)
                            }
                        </div>
                    </Tabs.Panel>
                   
                </Tabs>
            </div>
        </div>
    )
}