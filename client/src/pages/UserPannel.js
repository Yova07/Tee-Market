import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useAuthContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import UserNavbar from "../components/UserNavbar";
import { Outlet } from "react-router-dom";

const UserPannel = () => {

    const { user } = useAuthContext();

    useEffect(() => {

    }, []);

    if (user) {
        return (
            <div>
                <Navbar />
                <div className="min-h-[calc(100vh-300px)] max-w-[1440px] mx-auto flex flex-col items-center gap-10 pt-10">
                    <UserNavbar />
                    <Outlet />
                </div>
                <Footer />
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="text-6xl text-red-500 -mb-20">Access Denied</div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/temp/lf20_Jy8wQr.json"
                        style={{ height: '500px', width: '500px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
        )
    }

}

export default UserPannel;