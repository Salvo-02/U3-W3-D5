import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fillMusicSection } from "../Redux/actions";
import SingleSong from "./Singlesong";

const MyCards = ({ title, artistSearch, typeSelec, stateSelect }) => {
  const dispatch = useDispatch();

  const resultOfSearch = useSelector((state) => state.allSongs[stateSelect]);

  useEffect(() => {
    dispatch(fillMusicSection(artistSearch, typeSelec));
  }, []);
  return (
    <Row>
      <Col>
        <div>
          <h2>{title}</h2>
          <div className="imgLinks py-3">
            <Row xs={1} sm={2} lg={3} xl={4}>
              {resultOfSearch.map((singleSong, index) => (
                <SingleSong key={artistSearch + index} singleSong={singleSong} />
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default MyCards;
