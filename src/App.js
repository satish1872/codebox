// import { object } from "prop-types";
import Folder from "./components/Folder";
import "./styles.css";
// import { prototype } from "events";
// import "prop-types" from "prop-types";

export default function App() {
  const { log } = console;
  const inputData = {
    public: {
      publicSubfolder: {
        "index2.html": {}
      },
      "index.html": {}
    },
    src: {},
    package: {}
  };
  // log(inputData);

  let Preview;

  const processing = function (inputData) {
    // if inputdata is key as object
    if (typeof inputData === "object") {
      return <Folder name={inputData.key} />;
    }
    //  else if( typeof inputData === "string")
    return <div>inputData</div>;
  };
  Preview = processing(inputData);

  return (
    <>
      <Preview />
      <div>App</div>
    </>
  );
}
//
