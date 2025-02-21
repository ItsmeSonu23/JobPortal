import { ActionIcon, Divider, TagsInput, Textarea} from "@mantine/core"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react"
import { ExpCard } from "./ExpCard"
import { Certification } from "./Certification"
import { useState } from "react"
import { SelectInputt } from "./SelectInputt"
import { ExpInput } from "./ExpInput"
import { CertiInput } from "./CertiInput"
import { profileFeild } from "../../Data/Data"
export const Profile = (props: any) => {
    const [addExp, setAddExp] = useState(false)
    const [addCerti, setAddCerti] = useState(false)
    const [about, setAbout] = useState(props.about)
    const [skills, setSkills] = useState<string[]>(props.skills)
    const [edit, setEdit] = useState([false, false, false, false, false])
    const handleEdit = (index: any) => {
        const newEdit = [...edit]
        newEdit[index] = !newEdit[index]
        setEdit(newEdit)
    }
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/Banner.png" alt="" />
            <img className="h-48 w-48 border-8 absolute -bottom-1/3 rounded-full left-3 border-[var(--color-mine-shaft-950)]" src="/images/avatar.png" alt="" />
        </div>
        <div className="px-4 mt-25">
            <div className="text-3xl font-semibold flex justify-between">{props.name} <ActionIcon onClick={() => handleEdit(0)} variant="subtle" color="darkorchid" size={"lg"}>
                {
                    edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                }
            </ActionIcon></div>
            {
                edit[0] ? <> <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInputt {...profileFeild[0]} />
                    <SelectInputt {...profileFeild[1]} />
                </div>
                    <SelectInputt {...profileFeild[2]} /></> : <>
                    <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{props.role} &bull; {props.company}</div>
                    <div className="text-lg flex gap-1 items-center text-[var(--color-mine-shaft-400)]">
                        <IconMapPin className="h-5 w-5" stroke={1.5} />{props.location}
                    </div>
                </>
            }
            <Divider mx="xs" my="xl" />

            {/* About section of the profile page */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">About <ActionIcon onClick={() => handleEdit(1)} variant="subtle" color="darkorchid" size={"lg"}>
                    {
                        edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                    }
                </ActionIcon></div>
                {
                    edit[1] ? <> <Textarea autosize minRows={3} placeholder="Enter about yourself" value={about} onChange={(event) => setAbout(event.currentTarget.value)} /></> : <><div className="text-sm text-[var(--color-mine-shaft-400)] text-justify">
                        {props.about}
                    </div></>
                }
            </div>
            <Divider mx="xs" my="xl" />

            {/* Skills section of the profile page */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Skills <ActionIcon onClick={() => handleEdit(2)} variant="subtle" color="darkorchid" size={"lg"}>
                    {
                        edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                    }
                </ActionIcon></div>
                {
                    edit[2] ? <><TagsInput value={skills} onChange={setSkills} placeholder="Add Skills" splitChars={[",", " ", "|"]} /></> : <>
                        <div className="flex flex-wrap gap-2 ">

                            {
                                props.skills.map((skill: any, index: any) => <div key={index} className="bg-[var(--color-electric-violet-500)] rounded-3xl text-[var(--color-mine-shaft-200)] text-xs font-medium px-3 py-1">{skill}</div>)
                            }
                        </div>
                    </>
                }


            </div>
            <Divider mx="xs" my="xl" />

            {/* Experience section of profile page */}
            <div className="px-3 ">
                <div className="text-2xl font-semibold mb-5 flex justify-between">Expirience
                    <div className="flex gap-2">
                        <ActionIcon onClick={() => setAddExp(true)} variant="subtle" color="darkorchid" size={"lg"}>
                            <IconPlus className="h-4/5 w-4/5" />
                        </ActionIcon>
                        <ActionIcon onClick={() => handleEdit(3)} variant="subtle" color="darkorchid" size={"lg"}>
                            {
                                edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    props.expirience.map((exp: any, index: any) => <ExpCard edit={edit[3]} key={index} {...exp} />)
                }
                {
                    addExp && <ExpInput add setEdit={setAddExp} />
                }
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex justify-between">Cartifications
                <div className="flex gap-2">
                    <ActionIcon onClick={() => setAddCerti(true)} variant="subtle" color="darkorchid" size={"lg"}>
                        <IconPlus className="h-4/5 w-4/5" />
                    </ActionIcon>
                    <ActionIcon onClick={() => handleEdit(4)} variant="subtle" color="darkorchid" size={"lg"}>
                        {
                            edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    props.certifications.map((cert: any, index: any) => <Certification key={index} edit={edit[4]} {...cert} />)
                }
                {
                    addCerti && <CertiInput setEdit={setAddCerti}/>
                }
            </div>
        </div>
    </div >
}