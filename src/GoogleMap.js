// import React from 'react'
// import React, { useState } from 'react'
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// function GoogleMap() {
//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds();
//         map.fitBounds(bounds);
//         setMap(map)
//       }, [])

//       const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//       }, [])

//       return (
//         <LoadScript
//           googleMapsApiKey="YOUR_API_KEY"
//         >
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//           >
//                { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//                </GoogleMap>
//     </LoadScript>
//   )

// }

// export default GoogleMap