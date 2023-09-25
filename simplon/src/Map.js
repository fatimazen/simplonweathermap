
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const position = [43.6047, 1.4442]; // Coordonnées de Toulouse (à remplacer par les coordonnées des fabriques)

    return (
        <MapContainer center={position} zoom={8} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Vous pouvez ajouter des marqueurs ici */}
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
