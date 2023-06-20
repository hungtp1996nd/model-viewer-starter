import "@google/model-viewer";

import "./App.css";

const Models = [
  "https://modelviewer.dev/shared-assets/models/Astronaut.glb",

  "https://modelviewer.dev/shared-assets/models/shishkebab.glb",

  "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
];

function App() {
  return (
    <div class="wrap-model-view">
      <model-viewer
        src={Models[0]}
        alt="A 3D model of an astronaut"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        camera-controls
        autoplay
        class="model-view"
      />
    </div>
  );
}

export default App;
