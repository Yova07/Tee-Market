import { useState } from "react";
import { useAuthContext } from "../context/UserContext";
import BillingAdress from "./BillingAdress";
import DeliveryAdress from "./DeliveryAdress";
import MyProfil from "./MyProfil";

const UserProfil = () => {

    const { user } = useAuthContext();
    const [active, setActive] = useState();

    return (
        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='500' className="w-full mb-10">
            <h1 className="text-center text-4xl mb-10 font-['Lobster']">My Profil</h1>
            <div className="flex justify-between lg:flex-row flex-col gap-10">
                <MyProfil user={user} />
                <DeliveryAdress user={user} setActive={setActive} active={active} />
                <BillingAdress user={user} />
            </div>
        </div>
    )
}

export default UserProfil;