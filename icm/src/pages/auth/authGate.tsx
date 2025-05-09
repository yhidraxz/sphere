import { useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchUser } from "../../api/auth";
import { getUserInfo } from "../../store/userStore";

export default function AuthGate ()  {
    // const navigate: (route: string) => void = useNavigate();

    // useEffect(() => {
    //     const validate = async () => {
    //         const user = getUserInfo()


    //         if(!user) {
    //             navigate("/login");
    //             return
    //         }

    //         const result = await fetchUser(user.key);

    //         if (result) {
    //             navigate("/dashboard")
    //             return
    //         } else {
    //             navigate("/login")
    //         }

    //     }

    //     validate();
    // }, []);
console.log('im loaded')
    return (
        <div>
            <h1> WASSSUUUUUUUUP BROTHER</h1>
        </div>
    )
}