import { NavLink } from "react-router-dom";
function Link(props) {
   const {to,children} = props;
    return(
        <NavLink className='link-light' to={to}>{children}</NavLink>
    )
}
export default Link