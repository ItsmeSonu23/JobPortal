import { talents } from "../../Data/Data"
import { Sort } from "../FindJobs/Sort-LAPTOP-03RLHC76"
import { TalentCard } from "./TalentCard"

/**
 * Talents Component
 * 
 * A component that displays a grid of talent cards with sorting functionality.
 * 
 * @component
 * 
 * Features:
 * - Displays a header with title and sort options
 * - Renders a responsive grid of TalentCard components
 * - Supports sorting of talent listings
 * - Flexible layout that adapts to different screen sizes
 * 
 * Layout:
 * - Outer padding of 28px (p-7)
 * - Header with flex justify-between
 * - Card grid with:
 *   - Top margin of 40px (mt-10)
 *   - Horizontal margin of 20px (mx-5)
 *   - Flex wrap for responsive layout
 *   - 40px gap between cards (gap-10)
 * 
 * Components:
 * 1. Header Section:
 *    - "Talents" title in 24px (text-2xl)
 *    - Sort component for filtering options
 *    - Semibold font weight for title
 * 
 * 2. Card Grid:
 *    - Maps through talents array
 *    - Renders TalentCard for each talent
 *    - Passes talent data as props
 *    - Unique key for each card
 * 
 * Styling:
 * - Clean typography with semibold title
 * - Consistent spacing using Tailwind classes
 * - Responsive flex-wrap layout for cards
 * - Even spacing between card elements
 * 
 * Dependencies:
 * - talents data array from Data.ts
 * - Sort component for filtering
 * - TalentCard component for individual profiles
 * 
 * @returns {JSX.Element} A grid layout of talent cards with header
 */
export const Talents = () => {
    return <div className="p-7">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Talents</div>
            <Sort />
        </div>
        <div className="mt-10 mx-5 flex flex-wrap gap-10">
            {
                talents.map((talent,index)=><TalentCard key={index} {...talent}/>)
            }
        </div>
    </div>
}