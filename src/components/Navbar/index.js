import {Link} from "react-router-dom";
import {base_routes} from "../../shared/routes";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to={base_routes.home}>Home</Link>
            </li>
            <li><Link to={base_routes.highcharts}>highcharts</Link></li>
        </ul>
    )
};
export default Navbar;