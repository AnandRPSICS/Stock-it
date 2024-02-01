import { Container } from "react-bootstrap";
import navStyle from "./userNavbar.module.css";
const UserNavbar = () => {
  return (
    <Container className={navStyle.navContainer} fluid>
      <h1> User navbar</h1>
    </Container>
  );
};
export default UserNavbar;
