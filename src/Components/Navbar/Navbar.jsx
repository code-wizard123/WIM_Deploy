import logo from "../../assets/archeo-logo.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ active }) => {
  const url = "/auth/news";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const menuItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "activities", label: "Activities" },
    { id: "contact", label: "Contact" },
    { id: "committee", label: "Committee" },
  ];

  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/register");
  };

  return (
    <div className="fixed-top" style={{ position: "relative" }}>
      <div className="cont-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-lg-6">
              <h1 className="text-end p-3">Ayush NGO Portal</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container1">
        <ul className="news-slider">
          {data.map((news, index) => (
            <li key={index}> {news.description}</li>
          ))}
        </ul>
      </div>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`nav-item ${
                      active === item.label ? "active" : ""
                    }`}
                    style={{ marginRight: "35px" }}
                  >
                    <Link className="nav-link" to={`/${item.id}`}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                {!cookies.access_token ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      data-coreui-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Members
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/register">
                          New Members
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/login">
                          Existing Members
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <a
                      className="nav-link"
                      style={{ marginRight: "25px" }}
                      href="/donate "
                    >
                      {" "}
                      Donate{" "}
                    </a>
                    <button className="nav-link" onClick={logout}>
                      {" "}
                      Logout{" "}
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
