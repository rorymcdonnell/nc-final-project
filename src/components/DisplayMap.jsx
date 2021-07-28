import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export const DisplayMap = ({
  center = [0, 0],
  basemap = "mapbox://styles/mapbox/outdoors-v11",
  zoom = 12,
}) => {
  const mapContainer = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: basemap,
      center,
      zoom,
    });

    // map.on("load", () => {
    //   setMap(map);
    //   const marker = L.marker([53.7755648, -1.5433728]).addTo(map);
    // });

    return () => map.remove();
  }, []);

  useEffect(() => {
    map?.setCenter(center);
  }, [map, center]);

  useEffect(() => {
    map?.setZoom(zoom);
  }, [map, zoom]);

  // Make a marker
  var marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map);
  //   function addPoint() {
  //     var marker = L.marker([53.7755648, -1.5433728], {

  //       icon: L.mapbox.marker.icon({
  //         "marker-size": "large",
  //         "marker-color": "#2196f3"
  //       }),
  //     });
  //     marker.addTo(map);
  //   }

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "100vh" }}>
      You are here
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  basemap: PropTypes.string,
  zoom: PropTypes.number,
};

export default DisplayMap;
