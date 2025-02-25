import { Button, Modal, PasswordInput, PinInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { changePassword, sendOtp, verifyOtp } from "../../Services/UserService"
import { signupValidation } from "../../Services/FormValidation"
import { errorNotification, successNotification } from "../../Services/NotificationService"
import { useInterval } from "@mantine/hooks"

export const ResetPassword = (props: any) => {

    const [email, setEmail] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [otpSending, setOtpSending] = useState(false)
    const [verified, setVerified] = useState(false)
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState("")
    const [resendLoader, setResendLoader] = useState(false)
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if (seconds === 0) {
            setResendLoader(false)
            setSeconds(60)
            interval.stop()
        } else setSeconds((s) => s - 1)
    }, 1000)

    const handleSendOtp = () => {
        setOtpSending(true)
        sendOtp(email).then((res) => {
            console.log(res);
            successNotification("Otp sent successfully", "Enter otp to reset password")
            setOtpSent(true)
            setOtpSending(false)
            setResendLoader(true)
            interval.start()
        }).catch((err) => {
            console.log(err);
            errorNotification("Otp sending failed", err.response.data.errorMessage)
            setOtpSending(false)

        })
    }

    const handleVerifyOtp = (otp: string) => {
        console.log(otp);
        verifyOtp(email, otp)
            .then((res) => {
                console.log(res);
                successNotification("OTP verified", "Enter new Password")
                setVerified(true)
            }).catch((error) => {
                console.log(error);
                errorNotification("OTP verification failed", "Resend Otp")
            })
    }

    const resendOtp = () => {
        if(resendLoader)return;
        handleSendOtp();
    }

    const changeEmail = () => {
        setOtpSent(false)
        setResendLoader(false)
        setSeconds(60)
        setVerified(false)
        interval.stop()
    }

    const handleResetPassword = () => {
        changePassword(email, password)
            .then((res) => {
                console.log(res);
                successNotification("Password Changed", "Login with new password")
                props.close()
            })
            .catch((error) => {
                console.log(error);
                errorNotification("Password reset failed", error.response.data.errorMessage)
            })
    }
    return (
        <Modal opened={props.opened} onClose={props.close} title="Reset Password">
            <div className="flex flex-col gap-6">
                <TextInput 
                value={email} 
                name="email" 
                withAsterisk 
                leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} 
                rightSection={<Button loading={otpSending} size="xs" className="text-[var(--color-mine-shaft-300)] mr-0.5" onClick={handleSendOtp} disabled={email === "" || otpSent} autoContrast variant="filled" color="darkorchid">Send OTP</Button>} 
                rightSectionWidth="xl" />

                {otpSent && <PinInput length={6} mx={"auto"} size="md" gap={"lg"} type="number" onComplete={handleVerifyOtp} />}

                {otpSent && !verified &&
                    <div className="flex gap-2">
                        <Button fullWidth loading={otpSending} onClick={resendOtp} autoContrast variant="Light" color="darkorchid">{resendLoader?seconds:"Reload"}</Button>

                        <Button fullWidth loading={otpSending} onClick={changeEmail} autoContrast variant="filled" color="darkorchid">Change Email</Button>
                    </div>
                }

                {
                    verified && <PasswordInput
                        error={passError}
                        name="password"
                        value={password}
                        withAsterisk
                        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        label="Password"
                        placeholder="*********"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPassError(signupValidation("password", e.target.value));
                        }}
                    />

                }

                {
                    verified && <Button fullWidth loading={otpSending} onClick={handleResetPassword} autoContrast variant="Light" color="darkorchid">Change Password</Button>
                }
            </div>
        </Modal>
    )
}