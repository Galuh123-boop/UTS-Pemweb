import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <main className="max-w-7xl mx-auto py-6">
                <Outlet />
            </main>

            <footer className="bg-[#FCE4EC] pt-16 pb-8 px-8 md:px-24 font-sans text-gray-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="flex flex-col min-w-65">
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                            alt="INVOFEST Logo"
                            className="w-48 mb-6 object-contain"
                        />
                        <p className="text-xs text-gray-500 mt-32 hidden md:block">
                            &copy; 2026 Universitas Harkat Negeri
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-16 md:gap-32">

                        <div>
                            <h3 className="font-bold text-sm mb-5 tracking-widest text-gray-600 uppercase">
                                Menu Navigasi
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="/" className="flex items-center gap-3">
                                        <span>Beranda</span>
                                    </Link>
                                </li>
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="/competition" className="flex items-center gap-3">
                                        <span>Competition</span>
                                    </Link>
                                </li>
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="/seminar" className="flex items-center gap-3">
                                        <span>Seminar</span>
                                    </Link>
                                </li>
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="/workshop" className="flex items-center gap-3">
                                        <span>Workshop</span>
                                    </Link>
                                </li>
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="/talkshow" className="flex items-center gap-3">
                                        <span>Talkshow</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-sm mb-5 tracking-widest text-gray-600 uppercase">
                                Ikuti Kami
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="https://www.instagram.com/invofest_harkatnegeri/" target="blank" className="flex items-center gap-3">
                                        <span>Instagram</span>
                                    </Link>
                                </li>
                                <li className="hover:text-pink-600 cursor-pointer transition">
                                    <Link to="https://www.youtube.com/@invofest/streams" target="blank" className="flex items-center gap-3">
                                        <span>Youtube</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <p className="text-xs text-gray-500 mt-4 md:hidden border-t border-pink-200 pt-6 w-full text-center">
                        © 2026 Universitas Harkat Negeri. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}