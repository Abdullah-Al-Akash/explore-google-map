import React, { useState } from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';


const location = {
        lat: 24.733885,
        lng: 90.404817
};

const Direction = () => {
        const [response, setResponse] = useState(null);

        const directionsCallback = res => {
                if (res !== null) {
                        setResponse(res);
                }
        }
        return (
                <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                >
                        <GoogleMap
                                // required
                                id='direction-example'
                                // required
                                mapContainerStyle={{
                                        height: '80vh',
                                        width: '100%'
                                }}
                                // required
                                zoom={14}
                                // required
                                center={location}
                        >

                                <DirectionsService
                                        // required
                                        options={{
                                                destination: 'Dhaka',
                                                origin: 'Khulna',
                                                travelMode: 'DRIVING'
                                        }}
                                        // required
                                        callback={directionsCallback}
                                />


                                {
                                        response !== null && (
                                                <DirectionsRenderer
                                                        // required
                                                        options={{
                                                                directions: response
                                                        }}
                                                />
                                        )
                                }
                        </GoogleMap>
                </LoadScript>
        );
};

export default Direction;