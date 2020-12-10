import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/Navigationitems";
import classes from "./SideDrawer.css";
import Bckdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Bckdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")} onClick={props.closed}>
                <Logo height="11%" marginBottom="32px"/>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
       
    );
};

export default sideDrawer;