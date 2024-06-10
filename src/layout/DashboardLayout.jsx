import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <div>
                hi
            </div>
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;