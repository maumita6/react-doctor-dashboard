import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import DoctorTable from "../Components/DoctorTable";


export default function DoctorListPage() {
    return (
        <>
        <DoctorTable/>
        </>
    );
}
