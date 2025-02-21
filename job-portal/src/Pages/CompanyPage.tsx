import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"
import { Company } from "../Components/CompanyProfile/Company"
import { SimilarCompanies } from "../Components/CompanyProfile/SimilarCompanies"

export const CompanyPage = () => {
    return (
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] px-10 py-4">
            <NavLink className="my-4 inline-block " to={"/find-jobs"}>
                <Button leftSection={<IconArrowLeft size={20} />} color="darkorchid" variant="light">Back</Button>
            </NavLink>
            <Divider size="sm" />
            <div className="flex gap-10 justify-between">
               <Company/>
               <SimilarCompanies/>
            </div>
        </div>
    )
}