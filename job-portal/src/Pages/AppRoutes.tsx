import { Divider } from "@mantine/core"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { ApplyJobPage } from "./ApplyJobPage"
import { CompanyPage } from "./CompanyPage"
import { FindJobs } from "./FindJobs"
import { FindTalentPage } from "./FindTalentPage"
import { HomePage } from "./HomePage"
import { JobDescriptionPage } from "./JobDescriptionPage"
import { JobHistoryPage } from "./JobHistoryPage"
import { PostedJobPage } from "./PostedJobPage"
import { PostJobPage } from "./PostJobPage"
import { ProfilePage } from "./ProfilePage"
import { SignupPage } from "./SignupPage"
import { TalentProfile } from "./TalentProfile"
import { useSelector } from "react-redux"

export const AppRoutes = () => {
    const user = useSelector((state:any)=>state.user)
    return (
        <BrowserRouter>
            <div className="relative">
                <Header />
                <Divider size="sm" mx="md" />
                <Routes>
                    <Route path='/find-jobs' element={<FindJobs />} />
                    <Route path='/find-talent' element={<FindTalentPage />} />
                    <Route path='/company' element={<CompanyPage />} />
                    <Route path='/posted-job' element={<PostedJobPage />} />
                    <Route path='/jobs' element={<JobDescriptionPage />} />
                    <Route path='/job-history' element={<JobHistoryPage />} />
                    <Route path='/apply-jobs' element={<ApplyJobPage />} />
                    <Route path='/post-job' element={<PostJobPage />} />
                    <Route path='/signup' element={user?<Navigate to={"/"}/>:<SignupPage />} />
                    <Route path='/login' element={user?<Navigate to={"/"}/>:<SignupPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/talent-profile' element={<TalentProfile />} />
                    <Route path='*' element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}