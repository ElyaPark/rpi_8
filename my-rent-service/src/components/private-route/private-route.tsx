import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { AppRoute, AutorizationStatus } from "../../const";

type AutorizationStatusEnum = typeof AutorizationStatus[keyof typeof AutorizationStatus];

type PrivateRouteProps = {
  autorizationStatus : AutorizationStatusEnum;
}


function PrivateRoute(props : PropsWithChildren<PrivateRouteProps>){
    const {autorizationStatus, children} = props;

    return(
        autorizationStatus === AutorizationStatus.Auth
        ? children
        : <Navigate to={AppRoute.Login}/>
    )
};

export {PrivateRoute}