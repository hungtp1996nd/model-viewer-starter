import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const defaultHidePart = ["dsfdsfdf"];
  const ruleDisplay = [
    {
      key: ["Bee_Back", "Bee_Body", "Bee_Eye", "Bee_Feet", "Bee_Wing_01",],
      show: "dsfdsfdf"
    }
  ] 
  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer#testModel");
    modelViewer.addEventListener("load", () => {
      const materials = modelViewer.model.materials;
      console.log(materials);
      materials.forEach((part) => {
        if (defaultHidePart.includes(part.name)) {
          part.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
        }
      })
      const showHideFollowRule = (event) => {
        const material = modelViewer.materialFromPoint(
          event.clientX,
          event.clientY
        );
        if (material != null) {
          ruleDisplay.forEach((rule) => {
            if (rule.key.includes(material.name)) {
              let partNeedToShow = materials.find(part => part.name === rule.show);
              partNeedToShow.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
            }
          })
        }
      };

      modelViewer.addEventListener("click", showHideFollowRule);
    });
  }, []);

  return (
    <div className="wrap-model-view">
      <model-viewer
        id="testModel"
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="https://res.cloudinary.com/ddpevlrno/image/upload/v1689780554/Mixer03_jlbacl.glb"
        ar
        environment-image="neutral"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        className="model-view"
        camera-orbit="-80deg 80deg 100m"
        style={{ width: "100%", height: "85vh" }}
      ></model-viewer>
    </div>
  );
}

export default App;
