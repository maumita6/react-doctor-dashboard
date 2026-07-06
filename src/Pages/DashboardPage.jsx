import { Link, useNavigate, Outlet } from 'react-router-dom';
import StatCard from "../Components/StatCard";


function DashboardPage() {
  return (
    <div className="flex">
      <StatCard/>
    </div>
  );
}

export default DashboardPage;
