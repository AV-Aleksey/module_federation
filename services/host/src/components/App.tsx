import classes from './styles.module.css';
import {Link, Outlet} from "react-router-dom";
import '@/styles.css';
import {useState} from "react";

export const App = () => {
    const [x, setX] = useState(1)

    return (
        <div className={classes.colorRed}>
            <h1>Hello World11</h1>
            {x}
            <button onClick={() => setX(x + 1)}></button>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
            </div>
            <Outlet />
        </div>
    );
};
