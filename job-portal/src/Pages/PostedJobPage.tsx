import {  Divider } from "@mantine/core"
import { PostedJob } from "../PostedJOb/PostedJob"
import { PostedJobDesc } from "../PostedJOb/PostedJobDesc"

export const PostedJobPage = ()=>{
    return (
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] px-10">
            <Divider size="sm" />
            <div className="flex gap-10">
              <PostedJob/>
              <PostedJobDesc/>
            </div>
        </div>
    )
}