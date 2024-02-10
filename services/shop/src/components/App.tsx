import classes from './styles.module.css';
import {Link, Outlet} from "react-router-dom";
import '@/styles.css';
import {useState} from "react";

export const App = () => {
    const [x, setX] = useState(1)

    return (
        <div className={classes.colorRed}>
            <h1>SHOP APP</h1>
            <Outlet />
        </div>
    );
};
