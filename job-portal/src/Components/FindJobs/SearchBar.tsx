import { Divider, RangeSlider } from "@mantine/core"
import { MultiInput } from "./MultiInput"
import { useState } from "react";
import { dropdownData } from "../../Data/Data";

/**
 * SearchBar Component
 * 
 * A search filter bar component that provides multiple filter options for job listings.
 * 
 * @component
 * 
 * Features:
 * - Multiple dropdown filters using MultiInput component
 * - Salary range slider with real-time updates
 * - Responsive layout with equal width columns
 * - Visual dividers between filter sections
 * 
 * Layout:
 * - Flex container with horizontal padding of 24px (px-6)
 * - Vertical padding of 32px (py-8)
 * - Each filter section takes 20% width (w-1/5)
 * - Vertical dividers between dropdown sections
 * 
 * State Management:
 * - Maintains salary range state as tuple [min, max]
 * - Initial range set to [0, 100] LPA
 * - Updates range values through slider interaction
 * 
 * Filter Sections:
 * - Dynamic dropdown filters from dropdownData array
 * - Each dropdown uses MultiInput component
 * - Salary range filter with:
 *   - Min-max display in LPA (Lakhs Per Annum)
 *   - Custom styled RangeSlider
 *   - Animated label transitions
 * 
 * Styling:
 * - Custom slider label positioning
 * - Purple accent color for slider
 * - Consistent typography sizes
 * - Clean divider styling
 * 
 * Dependencies:
 * - Mantine UI components (Divider, RangeSlider)
 * - MultiInput component for dropdowns
 * - dropdownData for filter options
 * 
 * @returns {JSX.Element} A search filter bar with multiple filter options
 */
export const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    return (
        <div className="flex px-6 py-8">
            {
                dropdownData.map((item, index) =>
                    <div key={index} className="w-1/5">
                        <MultiInput {...item} />
                        <Divider mr="xs" size="sm" orientation="vertical" />
                    </div>
                )
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex justify-between">
                    <div className="text-sm">Salary</div>
                    <div className="text-xs">&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider color="darkorchid" size="xs" value={value} labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} onChange={setValue} />
            </div>
        </div>
    )
}