import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  MapContainerProps,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "../custom-leafletjs.css";

export interface TournamentMapProps {
  mapContainerProps: MapContainerProps;
  locations: TournamentLocation[];
}

export interface EventLocation {
  eventName: string;
  eventRoom: string;
}

export interface HomeroomLocation {
  schoolName: string;
  homeRoom: string;
}

export interface TournamentLocation {
  position: [number, number];
  label: string;
  events?: EventLocation[];
  homerooms?: HomeroomLocation[];
}

export default function TournamentMap({
  mapContainerProps,
  locations,
}: TournamentMapProps) {
  return (
    <MapContainer {...mapContainerProps}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((tournamentLocation) => {
        return (
          <Marker position={tournamentLocation.position}>
            <Popup>
              <p className="font-bold text-xl">{tournamentLocation.label}</p>
              {tournamentLocation.events && (
                <>
                  <p className="font-bold text-lg">Events</p>
                  <ul>
                    {tournamentLocation.events.map(
                      ({ eventName, eventRoom }) => {
                        return <li>{`${eventName} - ${eventRoom}`}</li>;
                      }
                    )}
                  </ul>
                </>
              )}
              {tournamentLocation.homerooms && (
                <>
                  <p className="font-bold text-lg/6">Home Rooms</p>

                  <ul>
                    {tournamentLocation.homerooms.map(
                      ({ schoolName, homeRoom }) => {
                        return <li>{`${schoolName} - ${homeRoom}`}</li>;
                      }
                    )}
                  </ul>
                </>
              )}
            </Popup>
            <Tooltip
              permanent
              direction="top"
              offset={[-15, 75]}
              className="custom-tooltip"
            >
              {tournamentLocation.label}
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
