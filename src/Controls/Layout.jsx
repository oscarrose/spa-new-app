import { Outlet } from "react-router-dom"
import NarBar from "./NarBar"
const Layout = () => {

    return (
        <>
            <div>
                <NarBar/>
                <Outlet />
            </div>
        </>
    )
}
export default Layout