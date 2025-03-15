import { Divider, Input, RangeSlider } from "@mantine/core"
import { searchFeilds } from "../../Data/Data"
import { MultiInput } from '../FindJobs/MultiInput'
import { useState } from "react";
import { IconUserCircle } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import React from "react";
/**
 * SearchBar Component for Finding Talent
 * 
 * A search filter bar component that provides multiple filter options for finding talent/candidates.
 * 
 * @component
 * 
 * Features:
 * - Talent name search input with icon
 * - Multiple dropdown filters using MultiInput component
 * - Salary range slider with real-time updates
 * - Responsive layout with flex containers
 * 
 * Layout:
 * - Flex container with horizontal padding of 24px (px-6)
 * - Vertical padding of 32px (py-8)
 * - Centered items alignment
 * - Each filter section takes 20% width (w-1/5)
 * - Vertical dividers between sections
 * 
 * Components:
 * 1. Name Search Section:
 *    - IconUserCircle in electric violet
 *    - Unstyled input with white placeholder
 *    - Dark background for icon container
 * 
 * 2. Filter Dropdowns:
 *    - Dynamic filters from searchFeilds data
 *    - Each uses MultiInput component
 *    - Separated by vertical dividers
 * 
 * 3. Salary Range:
 *    - Min-max display in LPA (Lakhs Per Annum)
 *    - Custom styled RangeSlider
 *    - Animated label transitions
 * 
 * State Management:
 * - Maintains salary range state as tuple [min, max]
 * - Initial range set to [0, 100] LPA
 * - Updates range values through slider interaction
 * 
 * Styling:
 * - Mine Shaft color palette for text
 * - Electric violet accents
 * - Custom slider label positioning
 * - Consistent spacing and typography
 * 
 * @returns {JSX.Element} A search filter bar for finding talent
 */
export const SearchBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<[number, number]>([0, 50]);
    const [name, setName] = useState("")
    const handleChange = (name: any, event: any) => {
        if (name == "exp") {
            dispatch(updateFilter({ exp: event }))
        } else {
            setName(event.target.value)
            dispatch(updateFilter({ name: event.target.value }))
        }
    }
    return (
        <div className="flex px-6 py-8 items-center !text-[var(--color-mine-shaft-100)] ">
            <div className="flex items-center">
                <div className="text-[var(--color-electric-violet-500)] bg-[var(--color-mine-shaft-900)] rounded-full p-2 mr-2"><IconUserCircle size={20} /></div>
                <Input value={name} onChange={(e: any) => handleChange("name", e)} className="placeholder-[var(--color-mine-shaft-100)]" variant="unstyled" placeholder="Talent Name" />
            </div>
            {
                searchFeilds.map((item, index) => {
                    return <React.Fragment key={index}>
                        <div className="w-1/5">
                            <MultiInput {...item} />
                            <Divider mr="xs" size="sm" orientation="vertical" />
                        </div>
                    </React.Fragment>
                }
                )
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex justify-between">
                    <div className="text-sm">Expiriences (Years)</div>
                    <div className="text-xs">{value[0]} Years - {value[1]} Years</div>
                </div>
                <RangeSlider minRange={1} color="darkorchid" size="xs" value={value} labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} onChange={setValue} max={50} min={0} onChangeEnd={(e) => handleChange("exp", e)} />
            </div>
        </div>
    )
}