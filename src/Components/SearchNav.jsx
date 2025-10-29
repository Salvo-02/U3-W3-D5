import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_SEARCH, fillMusicSection } from "../Redux/actions";
import SingleSong from "./Singlesong";

const SearchNav = ({ artistSearch }) => {
  const dispatch = useDispatch();

  const resultOfSearch = useSelector((state) => state.playList.artistSearched);

  useEffect(() => {
    dispatch(fillMusicSection(artistSearch, ADD_TO_SEARCH));
  }, [artistSearch]);
  return (
    <Row>
      <Col>
        <div>
          <h2>Canzoni ricercate</h2>
          <div className="imgLinks py-3">
            <Row xs={1} sm={2} lg={3} xl={4}>
              {resultOfSearch.map((singleSong) => (
                <SingleSong key={singleSong.id} singleSong={singleSong} />
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default SearchNav;
