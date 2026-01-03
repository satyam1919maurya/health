import { useEffect, useState } from "react";
import axios from "axios";
const LocationTracker = () => {
    const [coords, setCoords] = useState({ lat: null, lon: null });

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setCoords({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                });
                getloc(pos.coords.latitude, pos.coords.longitude)
            });


        } else {
            alert("Geolocation is not supported by your browser");
        }
    };

    let loca = "Lucknow"
    const getloc = async (lt, ln) => {
        console.log("lttt " + lt)
        console.log("testing")
        const re = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lt}%2C+${ln}&key=a8b7cd404cbb40458d9cce26dcecd26c`)
        console.log(re.data.results[0].components.city)
        if (re.data.results[0].formatted.includes(loca)) {
            console.log(loca)
        }
        else {
            console.log("Not Available locatioon")
        }


    }
    // useEffect(() => {
    //     setTimeout(()=>{
    //         getloc()
    //     },1000)
    // }, [])

    const openMaps = () => {
        if (coords.lat && coords.lon) {
            window.open(`https://www.google.com/maps?q=${coords.lat},${coords.lon}`, "_blank");
        } else {
            alert("Location not found");
        }
    };


    useEffect(() => {
        getLocation()
    }, [])


    // useEffect(()=>{

    // },[])


    return (
        <div className="location-container">
            <h2>Current Location</h2>

            <button className="btn" onClick={getLocation}>Get Coordinates</button>

            <table>
                <thead>
                    <tr>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{coords.lat || "--"}</td>
                        <td>{coords.lon || "--"}</td>
                    </tr>
                </tbody>
            </table>

            <button className="btn btn-map" onClick={openMaps}>
                Open in Google Maps
            </button>
        </div>
    );
};

export default LocationTracker;
