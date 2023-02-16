import { useState } from "react";
import { useAuthContext } from "../context/UserContext";
import BillingAdress from "./BillingAdress";
import DeliveryAdress from "./DeliveryAdress";
import MyProfil from "./MyProfil";

const UserProfil = () => {

    const { user } = useAuthContext();
    const [active, setActive] = useState();

    return (
        <div className="w-full">
            <h1 className="text-center text-4xl mb-10 font-['Lobster']">My Profil</h1>
            <div className="flex justify-between gap-10">
                <MyProfil user={user} />
                <DeliveryAdress user={user} setActive={setActive} active={active} />
                <BillingAdress user={user} />
            </div>
        </div>
    )
}

export default UserProfil;