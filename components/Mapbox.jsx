import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
const mapkey = process.env.NEXT_PUBLIC_SCKEY_MAPBOX;
console.log(mapkey)

mapboxgl.accessToken = mapkey;
 
export default function App() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(19.887050);
const [lat, setLat] = useState(46.216350);
const [zoom, setZoom] = useState(14);


 
useEffect(() => {
    if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/gyorgynagy1986/cl0mh5ao9000l15qg4okjjmtk',
        center: [lng, lat],
        zoom: zoom,
    });
});
 
useEffect(() => {
    if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));

    });
});
 
return (
    <div className='mapbox-container'>
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
    </div>
);
}