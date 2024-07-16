import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HelpButton } from "../components/HelpButton";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/FP GROUP.png" alt="logo" height="35" width="35" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#koresponden" className="koresponden">
              Koresponden
            </Nav.Link>
            {/* <Nav.Link
              href="http://192.168.1.73:5174/login"
              target="_blank"
              className="approval"
            >
              Approval Memo
            </Nav.Link> */}
            <NavDropdown
              title="Approval Memo"
              className="approval"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                className="approval-internal"
                href="http://192.168.1.73:5174/login"
                target="_blank"
              >
                Approval Memo Internal
              </NavDropdown.Item>
              <NavDropdown.Item
                className="approval-eksternal"
                href="http://120.29.153.137:5054/"
                target="_blank"
              >
                Approval Memo Eksternal
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link
              href="http://192.168.1.73/ams/"
              target="_blank"
              className="archives"
            >
              Management archives
            </Nav.Link>
            <NavDropdown
              title="ERP"
              className="erp"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                className="erp-FP"
                href="http://192.168.1.74:8082/smarterp/login.seam"
                target="_blank"
              >
                ERP FP
              </NavDropdown.Item>
              <NavDropdown.Item
                className="erp-FBI"
                href="http://192.168.1.79:5053/smarterp/login.seam"
                target="_blank"
              >
                ERP FBI
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <HelpButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
