import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <>
        {/* <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        /> */}
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <Container>
            <div className="nav-container">
              <Link route="/">
                <a href="#" className="nav-logo">
                  FundMe🤝
                </a>
              </Link>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link route="/campaigns/new">
                    <a
                      href="#"
                      // activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Create New Campaign
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    // activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    How it works?
                  </a>
                </li>
                {/* <li className="nav-item">
                <a
                  href="#projects"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact
                </a>
              </li> */}
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
              </div>
            </div>
          </Container>
        </nav>
      </>
    </div>
    // <Menu style={{ marginTop: "10px" }}>
    //   <Link route="/">
    //     <a className="item">FundMe</a>
    //   </Link>

    //   <Menu.Menu position="right">
    //     <Link route="/">
    //       <a className="item">Campaigns</a>
    //     </Link>
    //     <Link route="/campaigns/new">
    //       <a className="item">+</a>
    //     </Link>
    //   </Menu.Menu>
    // </Menu>
  );
};

export default Header;
