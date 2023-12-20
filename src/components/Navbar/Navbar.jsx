import logoImage from "../../images/Logo.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navParentDiv">
            <div>
                <img src={logoImage} alt="" />
            </div>
            <ul className="navItems">
                <li>Order</li>
                <li>Order Review</li>
                <li>Manage Inventory</li>
                <li>Login</li>
            </ul>
        </div>
    );
};

export default Navbar;