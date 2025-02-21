import { Divider, RangeSlider } from "@mantine/core"
import { MultiInput } from "./MultiInput"
import { useState } from "react";
import { dropdownData } from "../../Data/Data";

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