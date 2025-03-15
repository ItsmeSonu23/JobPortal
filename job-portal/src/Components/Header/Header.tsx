import { Button } from "@mantine/core"
import { TbCloverFilled } from "react-icons/tb"
import { NavLinks } from "./NavLinks"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { ProfileMenu } from "./ProfileMenu"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProfile } from "../../Services/ProfileService"
import { setProfile } from "../../Slices/ProfileSlice"
import { NotiMenu } from "./NotiMenu"
import { jwtDecode } from "jwt-decode"
import { setUser } from "../../Slices/UserSlice"
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor"
/**
 * Header Component
 * 
 * This component renders the main header/navigation bar of the application.
 * It includes the logo, main navigation links, user profile menu, and notifications.
 * The header is only displayed when not on the login or signup pages.
 * 
 * Features:
 * - Clover logo and branding that navigates to home page
 * - Main navigation links (imported from NavLinks component)
 * - User profile menu with authentication state handling
 * - Notification indicator
 * - Automatic profile data fetching for authenticated users
 * 
 * State Management:
 * - Uses Redux for user and profile state management
 * - Fetches profile data when user ID is available
 * 
 * @returns {JSX.Element} The header component or empty fragment if on login/signup pages
 */
export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const user = useSelector((state: any) => state.user)
    const token = useSelector((state: any) => state.jwt)
    const dispatch = useDispatch()

    useEffect(() => {
        setupResponseInterceptor(navigate);
    }, [navigate]);

    // Fetch user profile data when user ID is available
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            try {
                const decoded = jwtDecode(tokenFromStorage);
                dispatch(setUser({ ...decoded, email: decoded.sub }));
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
        if (user && user.profileId) {
            getProfile(user?.profileId).then((res) => {
                dispatch(setProfile(res));
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [token, navigate, user && user.profileId]);


    return (location.pathname != "/signup" && location.pathname != "/login" ?
        // Main header container
        <div className="w-full px-6 bg-[var(--color-mine-shaft-950)] h-28 font-['Karla'] text-white flex justify-between items-center">
            {/* Logo and branding section */}
            <div className="flex gap-3 items-center text-[var(--color-electric-violet-500)]" onClick={() => navigate("/")}>
                <TbCloverFilled className="text-5xl" />
                <div className="text-3xl font-semibold">
                    Clover
                </div>
            </div>

            {/* Main navigation links */}
            <NavLinks />

            {/* User profile and notifications section */}
            <div className="flex gap-4 items-center ">
                {/* Conditional rendering of profile menu or login button based on auth state */}
                {user ?
                    <ProfileMenu /> :
                    <NavLink to={"/login"}>
                        <Button variant="filled" color="darkorchid">Login</Button>
                    </NavLink>
                }

                {/* Notification indicator with processing animation */}
                {
                    user ? <NotiMenu /> : <></>
                }
            </div>
        </div>
        : <></>
    )
}
