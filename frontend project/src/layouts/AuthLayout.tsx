import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AuthLayout() {
    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-2 items-center gap-10 max-w-5xl w-full p-6">

                    {/* kiri */}
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                            alt="Invofest"
                            className="w-90"
                        />
                    </div>

                    {/* kanan */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    );
}