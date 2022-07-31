// without credit card

import { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;


// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";

// import "./Map.css";

// const Map = props => {
//   const { center, zoom } = props;
//   const mapRef = useRef();
//   useEffect(() => {
//     mapboxgl.accessToken = APIKEY;
//     const map = new mapboxgl.Map({
//       container: mapRef.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: center,
//       zoom: zoom,
//     });
//     new mapboxgl.Marker({ position: center, map: map });
//   }, [center, zoom]);
//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//     ></div>
//   );
// };

// export default Map;



// import { useRef, useEffect } from 'react';

// import './Map.css';

// const Map = props => {
//   const mapRef = useRef();

//   const { center, zoom } = props;

//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: center,
//       zoom: zoom
//     });
//     new window.google.maps.Marker({ position: center, map: map });
//   }, [center, zoom]);

//   return (
//     <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
//   )
// };

// export default Map;