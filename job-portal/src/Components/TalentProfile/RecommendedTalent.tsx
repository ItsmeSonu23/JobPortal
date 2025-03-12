import { talents } from "../../Data/Data"
import { TalentCard } from "../FindTalent/TalentCard"

/**
 * RecommendedTalent Component
 * 
 * Displays a curated list of recommended talent profiles.
 * 
 * @component
 * 
 * Features:
 * - Shows up to 4 recommended talent profiles
 * - Uses TalentCard component for each profile
 * - Vertical stacking layout with consistent spacing
 * 
 * Visual Elements:
 * - Section heading with emphasized styling
 * - Vertically stacked talent cards
 * - Consistent spacing between cards
 * 
 * Layout:
 * - Flex container with column direction
 * - Fixed spacing between elements
 * - Responsive wrapping of cards
 * 
 * Data Integration:
 * - Uses talents array from Data.ts
 * - Filters to show only first 4 profiles
 * - Passes talent data to TalentCard components
 * 
 * Styling:
 * - Large heading text with semibold weight
 * - Bottom margin for section heading
 * - Consistent gap between talent cards
 * 
 * Sub-components:
 * - TalentCard: Displays individual talent profile
 * 
 * @returns {JSX.Element} A section showing recommended talent profiles
 */
export const RecommendedTalent = () => {
    return <div className="">
        <div className="text-xl font-semibold mb-5">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {talents.map((talent, index) => index < 4 && <TalentCard key={index} {...talent}/>)}
        </div>
    </div>
}