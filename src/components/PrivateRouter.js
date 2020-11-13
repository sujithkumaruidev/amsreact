import React ,{Component} from "react";
import { Redirect } from 'react-router-dom'

class PrivateRoute extends Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = sessionStorage.getItem("access_token");
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default PrivateRoute;