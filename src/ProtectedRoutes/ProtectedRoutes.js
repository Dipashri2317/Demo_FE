import React from 'react'
import { Route, Redirect } from "react-router-dom";
import UserServices from "../Services/userServices"
import Api from "../Services/httpService"

// const user = UserServices.getCurrentUser
export default function ProtectedRoutes({ component:Component, ...rest }) {
    return (
        <Route {...rest} render={
            (props) => {
                if(Api.defaults.headers.common["jwt-token"]){
                    return <Component {...props} />
                }else {
                    return <Redirect to={{
                        pathname:"/"
                    }} />
                }
            }
        } />
    )
}
