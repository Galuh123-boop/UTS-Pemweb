import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // redirect ke halaman login setelah logout
    navigate("/login");
  };

  return (
    <div className="flex w-full min-h-screen">
      <aside className="w-64 bg-red-400 flex flex-col justify-between p-4">
        <div className="flex items-center justify-center border-b border-white/20 h-16">
          <h2 className="text-4xl font-bold mb-4 text-red-900">Invofest</h2>
        </div>

        <div>
          <nav className="flex flex-col gap-2 text-white mt-4">
            <Link
              to="/dashboard"
              className="p-4 rounded-2xl hover:bg-red-900 transition-colors ease-in duration-150"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/category"
              className="p-4 rounded-2xl hover:bg-red-900 transition-colors ease-in duration-150"
            >
              Kategori Event
            </Link>
            <Link
              to="/dashboard/event"
              className="p-4 rounded-2xl hover:bg-red-900 transition-colors ease-in duration-150"
            >
              Event
            </Link>
            <Link
              to="/dashboard/pembicara"
              className="p-4 rounded-2xl hover:bg-red-900 transition-colors ease-in duration-150"
            >
              Pembicara
            </Link>

            <Link
              to="/dashboard/biodata"
              className="p-4 rounded-2xl hover:bg-red-900 transition-colors ease-in duration-150">
              Biodata
            </Link>
          </nav>
        </div>

        <div>
          <button
            onClick={handleLogout}
            type="button"
            className="p-3 bg-red-900 w-full text-white"
          >
            Logout
          </button>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}