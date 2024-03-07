import { useEffect, useRef, useState } from 'react'
import {MapContainer ,Marker,TileLayer, useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import getPlaceName from '../utils/placeName';
import axiosInstance from '../api/axios';
// import CurrentLocation from './Hooks/CurrentLocation';

    const LeafMap = () => { 

        const [placeName, setPlaceName] = useState(null);
        const [center, setCenter] = useState( {
            lat: 11.24802, 
            lng: 75.7804, 
        });
        console.log("center:", center);
        console.log("place name:", placeName);

        const fetchUserLocation =async ()=> {
            try{
              const res= await axiosInstance.get("/user/userlocation")
              setCenter({ lat: res.data.latlong[1], lng: res.data.latlong[0] })
              setPlaceName(res.data.data);
              localStorage.setItem("userLocation", JSON.stringify({ center, placeName }));
            }catch(err){
             console.log("frontend server error", err);
            }
          }

          useEffect(() => {
            const userLocationData = localStorage.getItem("userLocation");
        if (userLocationData) {
            const { center, placeName } = JSON.parse(userLocationData);
            setCenter(center);
            setPlaceName(placeName);
        } else {
            fetchUserLocation();
        }
        }, []);  


        useEffect(() => {
            const fetchData = async () => {
                const placeName = await getPlaceName(center.lat, center.lng);
                setPlaceName(placeName);
                localStorage.setItem("userLocation", JSON.stringify({ center, placeName }));
            };
            fetchData();

        }, [center]);
        

        const mapContainerStyle = {
            width: '100vw',
            height: '500px',
        };

        const mapRef = useRef()

        const flyToCenter = () => {
            mapRef.current.flyTo(center, 14, {animate: true});
        };

        const handleCurrentLocationClick = async () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        setCenter({ lat: latitude, lng: longitude });
                        const placeName = await getPlaceName(latitude, longitude);
                        setPlaceName(placeName);

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
