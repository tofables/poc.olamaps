import { useState, useEffect } from "react";
import { Map as MapLibreMap, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl/dist/maplibre-gl.css";

function App() {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapReady) return;

    const map = new MapLibreMap({
      container: "central-map",
      center: [0, 0],
      zoom: 0,
      style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      transformRequest: (url, resourceType) => {
        if (url.match(/[?]/) == null) {
          url = url + "?api_key={your_api_key}";
        }
        else {
          url = url + "&api_key={your_api_key}";
        }
        
        return { url, resourceType };
      },
    });

    const nav = new NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "top-left");
  }, [mapReady]);

  return (
    <div className="App">
      <h1> WELCOME TO OLA MAPS </h1>
      
      <div
              style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
              ref={() => setMapReady(true)}
              id="central-map"
            />
    </div>
  );
}

export default App;
