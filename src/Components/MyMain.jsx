import { Col } from "react-bootstrap";
import MyHeaders from "./MyHeaders";
import MyPlayer from "./MyPlayer";
import MyCards from "./MyCards";
import { ADD_TO_HIPHOP, ADD_TO_POP, ADD_TO_ROCK } from "../Redux/actions";
import SearchNav from "./SearchNav";
import { useSelector } from "react-redux";

const MyMain = () => {
  const searched = useSelector((state) => state.searched.search);
  console.log(searched);
  return (
    <Col xs={12} md={9} className=" mainPage">
      <MyHeaders />
      {searched && <SearchNav artistSearch={searched} />}
      <MyCards title="Rock" artistSearch="Queen" typeSelect={ADD_TO_ROCK} stateSelect={"rock"} />
      <MyCards title="Pop" artistSearch="KatyPerry" typeSelect={ADD_TO_POP} stateSelect={"pop"} />
      <MyCards title="HipHop" artistSearch="Eminem" typeSelect={ADD_TO_HIPHOP} stateSelect={"hiphop"} />
      <MyPlayer />
    </Col>
  );
};
export default MyMain;
