import "./Route.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon from '/img/marker-icon.webp';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

function Route() {
    return (
        <div className="route-container">
            <div className="route-all">
                <div className="route-text">
                    <h1 className="route-h1">¡NOS UBICAMOS EN TELDE!</h1>
                    <p className="route-p">¡Calle C. Picachos, 33!</p>
                    <p className="route-p1">¡No dudes en pasarte!</p>
                </div>
                <div className="contact-container">
                    <div className="section">
                        <MapContainer className="location-map" center={[27.996112, -15.414719]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[27.996112, -15.414719]} icon={customMarkerIcon}>
                                <Popup>
                                    EL RINCÓN EL GOURMET <br /> Bar Restaurante
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="section">
                        <h2>Contáctanos</h2>
                        <p className="contact-info">elrincondelgourmet@gmail.com</p>
                        <p className="contact-info">+34 927152678</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Route;