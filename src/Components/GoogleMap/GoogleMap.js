import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class  Googlemap extends React.Component{

    constructor(){
        super()
        this.state = {
          latitude : "",
          longitude:""
        }
      }
    
      componentDidMount() {
        let that = this
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
          } else {
            // console.log("Geolocation is not supported by this browser.");
          }
        }
        function showPosition(position) {
          that.setState ({
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
    
          })
        }
        getLocation()
    
      }


    render(){

        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{lat: this.state.latitude, lng:this.state.longitude }}
        >
          {props.isMarkerShown && <Marker draggable={true} position={{lat:this.state.latitude, lng:this.state.longitude }} />}
        </GoogleMap>
      ))



        return(




<div>


<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

</div>


        )
    }
}



export default Googlemap;