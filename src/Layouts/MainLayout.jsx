import Sidebar from "../Components/Sidebar";
import { Link, useNavigate, Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="flex">
    <Sidebar/>
      <main className="flex-1 p-4">
      <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
