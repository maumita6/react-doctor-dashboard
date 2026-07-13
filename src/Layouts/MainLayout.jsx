import Sidebar from "../Components/Sidebar";
import { Link, useNavigate, Outlet } from 'react-router-dom';

function MainLayout({ setIsLoggedIn }) {
  return (
    <div className="flex">
      <Sidebar setIsLoggedIn={setIsLoggedIn}/>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
