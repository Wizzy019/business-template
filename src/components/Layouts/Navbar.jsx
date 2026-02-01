import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Icons = ({icon}) => (
  <div className="flex gap-4">
    <FontAwesomeIcon icon={icon} className="text-gray-700 text-sm"/>
  </div>
);

const Navbar = ({ brandName, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">{brandName}</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm text-gray-700 font-medium hover:opacity-70 transition"
            >
              {link.name}
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 text-sm text-gray-500"
          />

          <div className="flex gap-4">
            <Icons icon={faHeart} />
            <Icons icon={faCartShopping} />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="fixed top-0 right-0 h-full w-3/4 bg-white p-6 flex flex-col gap-6">
            {/* Close Menu Icon */}
            <button
              className="self-end"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2"
            />

            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-6 mt-auto ">
              <Icons icon={faHeart} />
              <Icons icon={faCartShopping} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
