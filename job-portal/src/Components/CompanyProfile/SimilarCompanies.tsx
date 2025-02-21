import { similar } from "../../Data/Data"
import { CompanyCard } from "./CompanyCard"

export const SimilarCompanies = () => {
    return (
        <div className="w-1/4">
            <div className="text-xl font-semibold mb-5">Recommended Talent</div>
            <div className="flex flex-col flex-wrap gap-5">
                {similar.map((companies, index) => index < 4 && <CompanyCard key={index} {...companies} />)}
            </div>
        </div>
    )
}