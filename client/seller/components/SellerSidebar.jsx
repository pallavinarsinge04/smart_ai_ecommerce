
import { Link } from "react-router-dom";

function SellerSidebar() {

  return (

    <div className="sidebar">

      <Link to="/seller/dashboard">
        Dashboard
      </Link>

      <Link to="/seller/products">
        Products
      </Link>

      <Link to="/seller/orders">
        Orders
      </Link>

      <Link to="/seller/profile">
        Profile
      </Link>

    </div>

  );

}

export default SellerSidebar;
