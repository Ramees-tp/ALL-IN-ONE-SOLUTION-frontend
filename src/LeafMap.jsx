import { useRef, useState } from 'react'
import {MapContainer ,Marker,TileLayer, useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import CurrentLocation from './Hooks/CurrentLocation';


    const LeafMap = () => {
        const [center, setCenter] = useState( {
            lat: 11.1457, 
            lng: 75.9643, 
        });
        console.log(center);

        const mapContainerStyle = {
            width: '100vw',
            height: '100vh',
        };

        const mapRef = useRef()

        const flyToCenter = () => {
            mapRef.current.flyTo(center, 14, {animate: true});
        };

        const handleCurrentLocationClick = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setCenter({ lat: latitude, lng: longitude });
                    },
                    (error) => {
                        console.error("Error getting geolocation:", error);
                    }
                );
            } else {
                console.error("Geolocation is not supported");
            }
        };
    

        const HandleClick = () => {
            useMapEvents({
                click:(e)=>{
                   const { lat, lng } = e.latlng;
                   setCenter({ lat, lng });
                }
            })
        };

        // const currentLocation = CurrentLocation()
        // console.log(currentLocation.coordinates.lat, currentLocation.coordinates.lng);
        // setCenter(currentLocation.coordinates.lat, currentLocation.coordinates.lng)

    return (
        <div>
            <FontAwesomeIcon className='h-8 p-3 text-blue-600' onClick={handleCurrentLocationClick} icon={faMapMarkerAlt} />
            <FontAwesomeIcon className='h-8 p-3 text-red-600'  onClick={flyToCenter} icon={faArrowsAlt} />
        <MapContainer center={center} zoom={12} ref={mapRef} style={mapContainerStyle} >
            <TileLayer 
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' />
            <Marker position={center}  />
            <HandleClick />
        </MapContainer>
        </div>
    )
    }

    export default LeafMap
