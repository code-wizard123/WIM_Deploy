import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from "axios";


mapboxgl.accessToken = 'pk.eyJ1IjoicmF1bmFrc2luZ2hrYWxzaSIsImEiOiJjbHFwZHZlaHgycDJpMnFvMDU1NG9vb3Z2In0.Cb5RR1VPzsiMKR9cJd4U6A';

const Map = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);

    const url = "/auth/committee";
    const [data, setData] = React.useState([]);

    const fetchInfo = async () => {
        const data = await axios.get(url).then((res) => setData(res.data));
        return data;
    };

    useEffect(() => {
        if(!data || data.length === 0){
            fetchInfo();
        }
        else{
            for(const user of data){
                getCityInfo(user.city);
            }
        }

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [72.87, 19.07],
            zoom: 3
        });
    });

    const getCityInfo = async (city) => {
        try {
            const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxgl.accessToken}`);
            const data = await response.data.features;

            if(data.length > 0){
                new mapboxgl.Marker()
                .setLngLat(data[0].center)
                .addTo(map.current);
            }

            return data;
        } catch (error) {
            console.error(`Error fetching city info for ${city}: ${error.message}`);
            throw error; // Re-throw the error to handle it elsewhere if needed
        }
    };

    return (
        <div>
            <div style={{ backgroundColor: "#303054", color: 'white', textAlign: "center" }}>
                <h1 style={{ padding: "20px" }}>We are located in</h1>
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
