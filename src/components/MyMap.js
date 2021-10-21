import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
        width: '100vw',
        height: '80vh'
};

const center = {
        lat: 24.733885,
        lng: 90.404817
};

const MyMap = () => {
        return (
                <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                >
                        <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={16}
                        >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>
                        </GoogleMap>
                </LoadScript>
        );
};

export default MyMap;