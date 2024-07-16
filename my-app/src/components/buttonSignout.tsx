"use client";

import { logout } from "@/actions";

export default function ButtonSignout() {
    const handleLogout = async () => {
        await logout();
        window.location.reload();
    };
    return (
        <button onClick={handleLogout} className="link link-hover text-sm">Log Out</button>
    )
}