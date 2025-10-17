import { Col } from "react-bootstrap";
import MyHeaders from "./MyHeaders";
import MyPlayer from "./MyPlayer";
import MyCards from "./MyCards";

const MyMain = () => {
  return (
    <Col xs={12} md={9} className=" mainPage">
      <MyHeaders />
      <MyCards />
      <MyPlayer />
    </Col>
  );
};
export default MyMain;
