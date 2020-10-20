import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'


const TrashDetails = (props) => {
    // const libraries = ["places"]
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBO5elK2y6CEtWBfZ49b4ZFQVl-UUSyfJg'
    })
    const mapContainerStyle = {
        width: '50vw',
        height: '50vh'
    }
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback(map=> {
        mapRef.current = map
    }, [])

    const panTo = React.useCallback(({lat,lng}) => {
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(13)
    }, [])

    const center = {
        lat: props.location.trash.latitude,
        lng: props.location.trash.longitude
    }

    if(loadError) return "Error Loading Map"
    if(!isLoaded) return "Loading Maps"

      
    return(
        <div>
            {props.location.trash ?
            <div>
            <h1>{props.location.trash.title}</h1>
            
            <img src={props.location.trash.photos[0].thumbnail} alt="" height="340px" width="265px"></img>
            <p>{props.location.trash.content}</p>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={13}
                center={center}
                onLoad={onMapLoad}
            >
                <Marker 
                    key={props.location.trash.title}
                    position={{
                    lat: parseFloat(props.location.trash.latitude),
                    lng: parseFloat(props.location.trash.longitude)
                }}
                />
            </GoogleMap>
            {/* <GoogleMap location={{lat: 37.42216,lng: -122.08427}} zoomLevel={17} />    */}
            <Button type="button" onClick={(e) => { e.preventDefault(); window.open(props.location.trash.url)}}> Reach Out </Button>
            </div>
            : null}

        </div>
    )
}

export default TrashDetails