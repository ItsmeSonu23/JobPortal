import { useState } from 'react';
import { Combobox, useCombobox, Text, Box } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
const opt = ['Relevant', 'Most Recent', 'Salary(Low to High)', 'Salary (High to Low)', ''];
export const Sort = () => {
        const [selectedItem, setSelectedItem] = useState<string | null>("Relevent");
        const combobox = useCombobox({
            onDropdownClose: () => combobox.resetSelectedOption(),
        });

        const options = opt.map((item) => (
            <Combobox.Option className='text-xs ' value={item} key={item}>
                {item}
            </Combobox.Option>
        ));

        return (
            <>
                <Combobox
                    store={combobox}
                    width={150}
                    position="bottom-start"
                    onOptionSubmit={(val) => {
                        setSelectedItem(val);
                        combobox.closeDropdown();
                    }}
                >
                    <Combobox.Target>
                        <div  onClick={()=> combobox.toggleDropdown()} className="border border-[var(--color-electric-violet-500)] text-sm gap-2 px-2 py-1 rounded-xl flex items-center cursor-pointer">
                            {selectedItem} <IconAdjustments className='text-[var(--color-electric-violet-500)] h-5 w-5' />
                        </div>
                    </Combobox.Target>

                    <Combobox.Dropdown>
                        <Combobox.Options>{options}</Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>
            </>
        );
    }