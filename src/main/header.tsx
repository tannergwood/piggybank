import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <h1 className="text-center">Piggy Bank Transactions</h1>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="col-3"></div>
          <Link to="" className="col-2 nav-item btn">
            Home Page
          </Link>
          <br />
          <Link to="transactions" className="col-2 nav-item btn">
            Transactions
          </Link>
          <br />
          <Link to="goals" className="col-2 nav-item btn">
            Goals
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
