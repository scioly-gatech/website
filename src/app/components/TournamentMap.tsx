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

export interface EventRoom {
  eventName: string;
  eventRoom: string;
}

export interface HomeRoom {
  schoolName: string;
  homeRoom: string;
}

export interface Location {
  position: [number, number];
  label: string;
}

export interface MakerspaceLocation extends Location {
  fullName?: string;
  hrefId: string;
}

export interface TournamentLocation extends Location {
  events?: EventRoom[];
  homerooms?: HomeRoom[];
}

export interface TournamentMapProps {
  mapContainerProps: MapContainerProps;
  tournamentLocations: TournamentLocation[];
  makerspaceLocations: MakerspaceLocation[];
}

export default function TournamentMap({
  mapContainerProps,
  tournamentLocations,
  makerspaceLocations,
}: TournamentMapProps) {
  return (
    <MapContainer {...mapContainerProps}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {tournamentLocations.map((tournamentLocation) => {
        return (
          <Marker
            position={tournamentLocation.position}
            key={tournamentLocation.label}
          >
            <Popup>
              <p className="font-bold text-xl">{tournamentLocation.label}</p>
              {tournamentLocation.events && (
                <>
                  <p className="font-bold text-lg">Events</p>
                  <ul>
                    {tournamentLocation.events.map(
                      ({ eventName, eventRoom }) => {
                        return (
                          <li
                            key={eventName}
                          >{`${eventName} - ${eventRoom}`}</li>
                        );
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
                        return (
                          <li
                            key={schoolName}
                          >{`${schoolName} - ${homeRoom}`}</li>
                        );
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
              className="custom-tooltip custom-tooltip-tournament"
            >
              {tournamentLocation.label}
            </Tooltip>
          </Marker>
        );
      })}

      {makerspaceLocations.map((makerspaceLocation) => {
        const popupString = makerspaceLocation.fullName
          ? `${makerspaceLocation.label} (${makerspaceLocation.fullName}) Tour`
          : `${makerspaceLocation.label} Tour`;

        return (
          <Marker
            position={makerspaceLocation.position}
            key={makerspaceLocation.label}
          >
            <Popup>
              <p className="font-bold text-lg">
                <a
                  href={`/currentTournament/tours#${makerspaceLocation.hrefId}`}
                >
                  {popupString}
                </a>
              </p>
            </Popup>
            <Tooltip
              permanent
              direction="top"
              offset={[-15, 75]}
              className="custom-tooltip custom-tooltip-makerspace"
            >
              {makerspaceLocation.label}
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
