import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import {BottomSheet} from "react-spring-bottom-sheet";
import {Icon} from "leaflet";
import Header from "../../help/header";
import BottomSheetComp from "./botomSheet/bottomSheet";


const Maps = () => {
    const [open, setOpen] = useState(false)

    const [url, setUrl] = useState('/search/all/')

    const point = new Icon({
        iconUrl: '/static/frontend/img/icon.png',
        iconSize: [25,25]
    })

    useEffect(()=> {
        document.querySelector('.leaflet-marker-pane').addEventListener('click', (e) => {
            setOpen(true)
            // console.log(e.target)
        })
        document.querySelector('.leaflet-container').addEventListener('click', () => {
            // setOpen(true)
        })
        setOpen(true)

    },[])

    function close() {
        setOpen(false)
    }
    return (
        <>

            <Header page={'map'} url={url} setUrl={setUrl}/>

                 <MapContainer center={[40.359532, 49.850164]} zoom={13} scrollWheelZoom={true}>
                 <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                     <Marker position={[40.379532, 49.840164]}
                             icon={point}
                     >
                         {/*<Popup*/}
                         {/*>*/}
                         {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
                         {/*</Popup>*/}
                     </Marker>
                     <Marker position={[40.379532, 49.851164]}
                             icon={point}
                             onTouch={()=>setOpen(true)}
                     >
                     </Marker>
            </MapContainer>


            <BottomSheetComp open={open} close={close} setUrl={setUrl}/>

        </>
    );
};

export default Maps;