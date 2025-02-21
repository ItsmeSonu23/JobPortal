export const PostedJobCard = (props: any) => {
    return <div className="bg-[var(--color-mine-shaft-900)] rounded-xl p-2 border-l-2 border-l-[var(--color-electric-violet-500)]">
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs text-[var(--color-mine-shaft-300)] font-medium">{props.location}</div>
        <div className="text-xs text-[var(--color-mine-shaft-300)]">{props.posted}</div>
    </div>
}