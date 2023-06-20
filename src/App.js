import "./App.css";

// const Models = [
//   "https://modelviewer.dev/shared-assets/models/Astronaut.glb",

//   "https://modelviewer.dev/shared-assets/models/shishkebab.glb",

//   "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
// ];

function App() {
  return (
    <div class="wrap-model-view">
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
        ar
        environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
        poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
      ></model-viewer>
    </div>
  );
}

export default App;
