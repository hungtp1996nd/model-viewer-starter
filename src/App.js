import { useState } from "react";
import "./App.css";

// const Models = [
//   "https://modelviewer.dev/shared-assets/models/Astronaut.glb",

//   "https://modelviewer.dev/shared-assets/models/shishkebab.glb",

//   "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
// ];

function App() {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const showDetail = () => {
    setIsShowDetail(true);
  };
  return (
    <div class="wrap-model-view">
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="https://res.cloudinary.com/ddpevlrno/image/upload/v1688967615/bee_animation_xqtcmc.glb"
        ar
        environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
        // poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        className="model-view"
        onClick={() => showDetail()}
      >
        <div
          class="hotspot wrap-detail"
          slot="hotspot-hand"
          data-position="8 4 4"
          style={{ display: isShowDetail ? "block" : "none" }}
          // data-normal="0 0 0"
        >
          This is detail
        </div>
      </model-viewer>
    </div>
  );
}

export default App;
