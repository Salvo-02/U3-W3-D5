import { Container, Row } from "react-bootstrap";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyMain from "./Components/MyMain";
import MyHeaders from "./Components/MyHeaders";

function App() {
  return (
    <>
      <Container>
        <Row>
          <MyNav />
          <MyMain />
        </Row>
      </Container>
    </>
  );
}

export default App;
