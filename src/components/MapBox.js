
import  React,{useEffect,useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapBox=({markerList})=>{
  console.log("marg",markerList);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 9
  });
  useEffect(()=>{
    setViewport({
        latitude:markerList[0].imlat,
        longitude: markerList[0].imlong,
        zoom:16
    })
  },[])
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/restimo/cjtynuymg3xtg1fnt0jwz1xz2"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoicmVzdGltbyIsImEiOiJ0VnJUeWRJIn0.N_0gcS9b0ZXdoeTem1Tqcw"
    >
        {markerList && markerList.map((each)=>
          <Marker latitude={each.imlat}
            longitude={each.imlong}>
                <a><img src="../amsreact/images/mapIcon.png" /></a>
        </Marker>
        )}
    </ReactMapGL>
  );
}
export default MapBox;