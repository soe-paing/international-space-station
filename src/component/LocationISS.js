import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';
import Footer from './Footer';
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin-top: 120px;
`

function Table({ issData }) {
    const ent = [1];
  return (
    <div className='col-lg-4 col-12 mt-lg-0 mt-5 m-auto'>
        <table className='table table-dark table-striped'>
            <tbody>
                <tr>
                    <th colSpan={2} className="bg-primary">ISS Live Location</th>
                </tr>
                { ent.map(() => {
                    if( issData.error ) {
                        return (
                            <>
                            <tr>
                                <td>Something Wrong :</td>
                                <td>Please Wait</td>
                            </tr>
                            <tr>
                                <td>Error :</td>
                                <td>{issData.status}</td>
                            </tr>
                            </>
                        )
                    } else {
                        return (
                            <>
                            <tr>
                                <td>Latitude :</td>
                                <td>{issData.latitude} Deg</td>
                            </tr>
                            <tr>
                                <td>Longitude :</td>
                                <td>{issData.longitude} Deg</td>
                            </tr>
                            <tr>
                                <td>Altitude :</td>
                                <td>{issData.altitude} km</td>
                            </tr>
                            <tr>
                                <td>Velocity :</td>
                                <td>{issData.velocity} km/h</td>
                            </tr>
                            <tr>
                                <th colSpan={2} className="bg-primary">
                                    { issData.visibility == "eclipsed" ? "The ISS is in Earth's Sheadow" : "The ISS is in Daylight"}
                                </th>
                            </tr>
                            </>
                        )
                    }
                })}
            </tbody>
        </table>
    </div>
  )
}


export default function LocationISS() {
    const [issData, setIss] = useState({});
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const mapRef = useRef(null);
    const [liveLocation, setLocation] = useState([ 21.9750 , 96.0836  ]);
    const handlePanTo = (center) => {
        if (mapRef.current) {
          mapRef.current.panTo(center);
        }
    };

    useEffect(() => {
        try {
            const getISS = () => {
                setInterval( async () => {
                    let data = await (await fetch(`https://api.wheretheiss.at/v1/satellites/25544`)).json();
                    setIss(data)
                    const center = {
                        lat: data.latitude ? data.latitude : liveLocation[0],
                        lng: data.longitude ? data.longitude : liveLocation[1],
                    };
                    setLocation([data.latitude ? data.latitude : 0, data.longitude ? data.longitude : 0 ])
                    handlePanTo(center);
                }, 1000)
            };
            return () => getISS();
        } catch (error) {
            if (error.response && error.response.status === 429) {
                async () => {
                    await delay(3000);
                    return makeRequest();
                }
              } else {
                console.error('Error:', error.message);
              }
        }
    }, []);

    const cusTomIcon = new Icon({
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
        iconSize: [50, 50],
        iconAnchor: [25, 25]
    })

    

    return (
        <>
            <Container className='container'>
                <h3 className='text-light my-4'>ISS live location</h3>
                <div className='text-light mb-5 mt-2 mx-1 row'>
                    <MapContainer className='col-lg-8 col-12' style={{ aspectRatio: "7/4" }} ref={mapRef} center={liveLocation} zoom={4} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        <Marker position={liveLocation} icon={cusTomIcon}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <Table issData={issData}/>
                </div>
            </Container>
            <Footer/>
        </>
    )
};

