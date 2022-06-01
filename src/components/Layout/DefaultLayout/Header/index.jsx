import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          Manage Finance
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown-end dropdown">
          <label className="avatar btn btn-ghost btn-circle">
            <div className="w-10 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=33791"
                alt="img"
              />
            </div>
          </label>
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a href="#" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
