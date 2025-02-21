import { Button, TextInput } from "@mantine/core"

export const Subscribe = () => {
    return <div className="mt-20 flex items-center bg-[var(--color-mine-shaft-900)] mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-2/5 text-center font-semibold  text-[var(--color-mine-shaft-100)]">Never Wants to Miss Any  <span className="text-[var(--color-electric-violet-500)]">Job News?</span></div>
        <div className="flex gap-4 rounded-xl bg-[var(--color-mine-shaft-700)] px-3 py-2 items-center">
            <TextInput
                className="[&_input]:text-[var(--color-mine-shaft-900)] font-semibold"
                variant="unstyled"
                placeholder="example@gmail.com"
                size="xl"
            />
            <Button className="!rounded-lg" size="lg" color="darkorchid" variant="filled">Subscribe</Button>
        </div>
    </div>

}