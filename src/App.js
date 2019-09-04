import React from "react";
import Aux from "./Util/Aux";
import MediaQuery from "react-responsive";
import Error from "./components/Error";
import { FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import Desktop from "./components/Desktop";

function App() {
  return (
    <Aux>
      <MediaQuery query="(max-aspect-ratio: 1/1)">
        <Error>
          <h3>
            <FaMobileAlt />
            <FaMobileAlt />
            <FaMobileAlt />
            <FaMobileAlt />
          </h3>
          This website is not currently designed for use with this device or
          screen size.
        </Error>
      </MediaQuery>
      <MediaQuery query="(max-aspect-ratio: 4/3)">
        <MediaQuery query="(min-aspect-ratio: 1/1)">
          <Error>
            <h3>
              <FaTabletAlt />
              <FaTabletAlt />
              <FaTabletAlt />
              <FaTabletAlt />
            </h3>
            This website is not currently designed for use with this device or
            screen size.
          </Error>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query="(min-aspect-ratio: 4/3)">
        <Desktop />
      </MediaQuery>
    </Aux>
  );
}

export default App;
