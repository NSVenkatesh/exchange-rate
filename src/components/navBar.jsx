import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="ExchangeRate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 28 28"
            className="icon icon1"
          >
            <path
              fill="currentColor"
              d="M22.254 11.505a7.563 7.563 0 00-3.726-2.039 7.613 7.613 0 10-9.087 9.08 7.614 7.614 0 1012.813-7.041zm-17.02-.389a5.868 5.868 0 111.72 4.149 5.83 5.83 0 01-1.72-4.149zm15.783 9.925a5.876 5.876 0 01-8.3 0 5.802 5.802 0 01-1.418-2.318 7.598 7.598 0 002.42-.46h.443c.334 1.814 1.32 2.746 2.965 2.746 1.707 0 3.096-1.13 3.096-2.517a.766.766 0 00-1.531 0c0 .403-.558.986-1.565.986-.419 0-1.11-.004-1.417-1.214h1.882a.656.656 0 100-1.313h-1.6c.162-.135.32-.277.471-.427h1.129a.656.656 0 000-1.312h-.073c.202-.319.38-.652.532-.997a1.003 1.003 0 01.638.778.766.766 0 001.531 0 2.51 2.51 0 00-1.691-2.228 7.66 7.66 0 00.176-1.44 5.803 5.803 0 012.312 1.417 5.875 5.875 0 010 8.299z"
            ></path>
            <path
              fill="currentColor"
              d="M14.245 12.645c0-1.123-.898-2.02-2.327-2.339l-1.008-.25c-1.04-.231-1.04-.44-1.04-.606 0-.339.54-.81 1.42-.81.445-.022.882.13 1.218.423a.607.607 0 01.201.4.764.764 0 00.765.766.766.766 0 00.766-.765 2.101 2.101 0 00-.649-1.483 3.07 3.07 0 00-1.656-.816v-.487a.656.656 0 10-1.313 0v.496A2.535 2.535 0 008.338 9.45c0 1.602 1.568 1.952 2.221 2.098l1.009.249c.529.118 1.146.41 1.146.848 0 .283-.556.825-1.426.825-.835 0-1.418-.435-1.418-.825a.766.766 0 10-1.532 0 2.51 2.51 0 002.296 2.296v.487a.656.656 0 101.312 0v-.494a2.586 2.586 0 002.299-2.29z"
            ></path>
          </svg>
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse addon" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="api">
                Api
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;