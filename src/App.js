import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const defaultHidePart = ["dsfdsfdf"];
  const ruleDisplay = [
    {
      key: ["Bee_Back", "Bee_Body", "Bee_Eye", "Bee_Feet", "Bee_Wing_01"],
      show: "dsfdsfdf",
    },
  ];
  // useEffect(() => {
  //   const modelViewer = document.querySelector("model-viewer#testModel");
  //   modelViewer.addEventListener("load", () => {
  //     const materials = modelViewer.model.materials;
  //     console.log(materials);
  //     materials.forEach((part) => {
  //       if (defaultHidePart.includes(part.name)) {
  //         part.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
  //       }
  //     })
  //     const showHideFollowRule = (event) => {
  //       const material = modelViewer.materialFromPoint(
  //         event.clientX,
  //         event.clientY
  //       );
  //       if (material != null) {
  //         ruleDisplay.forEach((rule) => {
  //           if (rule.key.includes(material.name)) {
  //             let partNeedToShow = materials.find(part => part.name === rule.show);
  //             partNeedToShow.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
  //           }
  //         })
  //       }
  //     };

  //     modelViewer.addEventListener("click", showHideFollowRule);
  //   });
  // }, []);

  return (
    <div style={{magin: "0px", overflow: "hidden"}}>
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true; precision: medium;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="/ground.jpg"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="https://res.cloudinary.com/ddpevlrno/image/upload/v1690275617/bee_ani_230725_hc4b8o.glb"
            scale="5 5 5"
            position="150 300 -100"
          ></a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
    // <div className="wrap-model-view">
    // <model-viewer
    //   id="testModel"
    //   alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
    //   src="https://res.cloudinary.com/ddpevlrno/image/upload/v1690275617/bee_ani_230725_hc4b8o.glb"
    //   ar
    //   environment-image="neutral"
    //   shadow-intensity="1"
    //   camera-controls
    //   touch-action="pan-y"
    //   className="model-view"
    //   camera-orbit="-80deg 80deg 100m"
    //   style={{ width: "100%", height: "85vh" }}
    // ></model-viewer>
    // </div>
  );
}

export default App;
