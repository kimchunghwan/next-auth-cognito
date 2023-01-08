import {GoogleMap, Marker, withGoogleMap} from "react-google-maps"

const MapTest = (props) => withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    )

export default MapTest;
