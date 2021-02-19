
import  React,{useEffect,useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
const MapBox=({markerList})=>{
  // console.log("marg",markerList);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 9
  });
  const access_token="pk.eyJ1IjoicmVzdGltbyIsImEiOiJ0VnJUeWRJIn0.N_0gcS9b0ZXdoeTem1Tqcw";
  const style ="mapbox://styles/restimo/cjtynuymg3xtg1fnt0jwz1xz2";
  useEffect(()=>{
    console.log("markerList",markerList);
    setViewport({
        latitude:markerList[0] && markerList[0].imlat,
        longitude: markerList[0] && markerList[0].imlong,
        zoom:16
    })
  },[markerList]);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={style}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={access_token}
    >
        {markerList && markerList.map((each,i)=>
          <Marker key={i} latitude={each.imlat}

            longitude={each.imlong}>
                <a href="#/"><img src="../amsreact/images/mapIcon.png" alt="mapIcon"/></a>
        </Marker>
        )}
    </ReactMapGL>
  );
}
export default MapBox;