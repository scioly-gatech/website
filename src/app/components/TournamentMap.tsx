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
  eventRooms: string[];
}

export interface SchoolHomeRoom {
  schoolName: string;
  homeRooms: string[];
}

export interface ActivityRoom {
  activityName: string;
  activityRooms: string[];
}

export interface Food {
  foodName: string;
}

export interface Location {
  position: [number, number];
  label: string;
}

export interface MakerspaceLocation extends Location {
  fullName?: string;
  hrefId: string;
  mapLink?: string;
}

export interface TournamentLocation extends Location {
  events?: EventRoom[];
  schoolHomeRooms?: SchoolHomeRoom[];
  activityRooms? : ActivityRoom[];
  mapLink?: string;
}

export interface FoodLocation extends Location {
  food? : Food[];
  mapLink?: string;
}

export interface TransportLocation extends Location {
  description: string;
  mapLink?: string;
}

export interface TournamentMapProps {
  mapContainerProps: MapContainerProps;
  tournamentLocations: TournamentLocation[];
  makerspaceLocations: MakerspaceLocation[];
  transportLocations: TransportLocation[];
  foodLocations: FoodLocation[];
  myLocation?: Location
}

export default function TournamentMap({
  mapContainerProps,
  tournamentLocations,
  makerspaceLocations,
  foodLocations,
  myLocation,
  transportLocations: transportLocations,
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
                      ({ eventName, eventRooms }) => {
                        return (
                          <li
                            key={eventName}
                          >{`${eventName} - ${eventRooms.join(", ")}`}</li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
              {tournamentLocation.schoolHomeRooms && (
                <>
                  <p className="font-bold text-lg/6">Home Rooms</p>

                  <ul>
                    {tournamentLocation.schoolHomeRooms.map(
                      ({ schoolName, homeRooms }) => {
                        return (
                          <li
                            key={schoolName}
                          >{`${schoolName} - ${homeRooms.join(", ")}`}</li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
              {tournamentLocation.activityRooms && (
                <>
                  <p className="font-bold text-lg/6">Activities</p>

                  <ul>
                    {tournamentLocation.activityRooms.map(
                      ({ activityName, activityRooms }) => {
                        return (
                          <li
                            key={activityName}
                          >{`${activityName} - ${activityRooms.join(", ")}`}</li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
              <br />
              <a href={tournamentLocation.mapLink} className="font-bold text-lg" target="__blank">Google Maps</a>
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

      {transportLocations.map((transportLocation) => {
        return (
          <Marker
            position={transportLocation.position}
            key={transportLocation.label}
          >
            <Popup>
              <p className="font-bold text-xl">{transportLocation.label}</p>
              <p className="text">{transportLocation.description}</p>
              <a href={transportLocation.mapLink} className="font-bold text-lg" target="__blank">Google Maps</a>
            </Popup>
            <Tooltip
              permanent
              direction="top"
              offset={[-15, 75]}
              className="custom-tooltip custom-tooltip-parking"
            >
              {transportLocation.label}
            </Tooltip>
          </Marker>
        );
      })}

      {foodLocations.map((foodLocation) => {
        return (
          <Marker
            position={foodLocation.position}
            key={foodLocation.label}
          >
            <Popup>
              <p className="font-bold text-xl">{foodLocation.label}</p>
              {foodLocation.food && (
                <>
                  <ul>
                    {foodLocation.food.map(
                      ({ foodName }) => {
                        return (
                          <li
                            key={foodName}
                          >{`${foodName} `}</li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
              <a href={foodLocation.mapLink} className="font-bold text-lg" target="__blank">Google Maps</a>
            </Popup>
            <Tooltip
              permanent
              direction="top"
              offset={[-15, 75]}
              className="custom-tooltip custom-tooltip-food"
            >
              {foodLocation.label}
            </Tooltip>
          </Marker>
        );
      })}
      

      {(myLocation != undefined) ? 
       <Marker
       position={myLocation.position}
       key={myLocation.label}
     >
       <Tooltip
         permanent
         direction="top"
         offset={[-15, 75]}
         className="custom-tooltip custom-tooltip-curr"
       >
         {myLocation.label}
       </Tooltip>
     </Marker> : null
    }
        
    </MapContainer>
  );
}
