import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import PushButton from "./PushButton";

const LogoutButton = () => {
    const { logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            < PushButton value={'Logout'} onClick={() => logout()}/>
        )
    )
}

export default LogoutButton