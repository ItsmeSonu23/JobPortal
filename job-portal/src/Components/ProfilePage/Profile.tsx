import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core"
import {IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react"
import { ExpCard } from "./ExpCard"
import { Certification } from "./Certification"
import { useEffect, useState } from "react"
import { ExpInput } from "./ExpInput"
import { CertiInput } from "./CertiInput"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../Services/ProfileService"
import { Info } from "./Info"
import { setProfile } from "../../Slices/ProfileSlice"

export const Profile = (props: any) => {

    const dispatch = useDispatch()
    const profile = useSelector((state:any)=> state.profile)
    const user = useSelector((state:any)=>state.user)
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

    useEffect(()=>{
        console.log(profile);
        getProfile(user.id)
        .then((res:any)=>{
            dispatch(setProfile(res))
            
        })
        .catch((err:any)=>{
            console.log(err);
            
        })
    },[])

    return <div className="w-4/5 mx-auto">

        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/Banner.png" alt="" />
            <img className="h-48 w-48 border-8 absolute -bottom-1/3 rounded-full left-3 border-[var(--color-mine-shaft-950)]" src="/images/avatar.png" alt="" />
        </div>

        <div className="px-4 mt-25">
            <Info/>
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
                        {profile?.about}
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
                                profile?.skills?.map((skill: any, index: number) => <div key={index} className="bg-[var(--color-electric-violet-500)] rounded-3xl text-[var(--color-mine-shaft-200)] text-xs font-medium px-3 py-1">{skill}</div>)
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
                    profile?.expiriences?.map((exp: any, index: number) => <ExpCard edit={edit[3]} key={index} {...exp} />)
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
                    profile?.certifications?.map((cert: any, index: number) => <Certification key={index} edit={edit[4]} {...cert} />)
                }
                {
                    addCerti && <CertiInput setEdit={setAddCerti} />
                }
            </div>
        </div>
    </div >
}