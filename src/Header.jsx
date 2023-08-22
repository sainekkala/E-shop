import react from "react";
import "./Header.css";
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";


function Header () {
   const [{basket}, dispatch] = useStateValue();
    return (
        <>
          <div className="container-fluid">
            <div className="row">
                <div className="header">
                    <Link to={"/"} style={{textDecoration: "none"}}>
                    <div className="header_logo">
                        <StorefrontRoundedIcon  className= "header_logo" fontSize="large"/>
                        <h2 className="header_title">E-shop</h2>
                    </div>
                    </Link>
                    <div className="header_search">
                        <input type="text" className="header_searchInput" />
                        <SearchRoundedIcon className="header_searchIcon" />
                    </div>
                    <div className="header_nav">
                        <div className="nav_item">
                            <span className="nav_itemLineOne">Hello Guest</span>
                            <span className="nav_itemLineTwo">Sign in</span>
                        </div>
                        <div className="nav_item">
                        <span className="nav_itemLineOne">Your</span>
                            <span className="nav_itemLineTwo">Shop</span>
                        </div>
                        <Link to={"/checkout"}  style={{textDecoration: "none"}}>
                        <div className="nav_basket">
                            <ShoppingCartRoundedIcon />
                            <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
};

export default Header;