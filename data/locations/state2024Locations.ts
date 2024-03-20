import {
  MakerspaceLocation,
  TransportLocation,
  TournamentLocation,
} from "@/app/components/TournamentMap";

const tournamentLocations: TournamentLocation[] = [
  {
    label: "CULC",
    position: [33.775000536193694, -84.3963075155798],
    events: [
      { eventName: "Chem Lab", eventRooms: ["571"] },
      { eventName: "Experimental Design", eventRooms: ["573"] },
      { eventName: "Forensics", eventRooms: ["581"] },
      { eventName: "Fossils", eventRooms: ["575"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Central HS", homeRooms: ["125"] },
      { schoolName: "Chattahoochee HS", homeRooms: ["127"] },
      { schoolName: "Duluth HS", homeRooms: ["129"] },
      { schoolName: "East Coweta HS", homeRooms: ["131"] },
      { schoolName: "Forsyth Central HS", homeRooms: ["323"] },
      { schoolName: "Fulton Innovation Academy", homeRooms: ["325"] },
      { schoolName: "Fulton Science Academy", homeRooms: ["423"] },
    ],
  },
  {
    label: "Love",
    position: [33.776747491187, -84.40180663214677],
    events: [{ eventName: "Air Trajectory", eventRooms: ["Atrium"] }],
  },
  {
    label: "IC",
    position: [33.77550128156202, -84.40126053276917],
    events: [
      {
        eventName: "Anatomy and Physiology, Disease Detectives",
        eventRooms: ["111"],
      },
      { eventName: "Astronomy", eventRooms: ["109"] },
      { eventName: "Detector Building", eventRooms: ["209"] },
      { eventName: "Optics", eventRooms: ["103"] },
      { eventName: "Wind Power", eventRooms: ["115"] },
      { eventName: "Write It Do It", eventRooms: ["205", "211", "215"] },
    ],
  },
  {
    label: "Howey",
    position: [33.7776405764111, -84.3986783057815],
    events: [
      { eventName: "Ecology, Forestry", eventRooms: ["L1"] },
      { eventName: "Fermi Questions, Science in the News", eventRooms: ["L3"] },
      { eventName: "Geologic Mapping, Dynamic Planet", eventRooms: ["L4"] },
      { eventName: "Microbe Mission", eventRooms: ["L5"] },
      { eventName: "Tower", eventRooms: ["L2"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Alliance Academy", homeRooms: ["N210"] },
      { schoolName: "Alpharetta HS", homeRooms: ["S104"] },
      { schoolName: "St. Mary's Academy", homeRooms: ["S106"] },
      { schoolName: "Brookstone School", homeRooms: ["S107"] },
      { schoolName: "Brookwood HS", homeRooms: ["S204"] },
    ],
  },
  {
    label: "Klaus",
    position: [33.777180777225105, -84.39583656160448],
    events: [{ eventName: "Flight", eventRooms: ["Atrium"] }],
  },
  {
    label: "MRDC",
    position: [33.77681638264601, -84.40059685584552],
    events: [
      { eventName: "Robot Tour", eventRooms: ["MSE Wing"] },
      { eventName: "Scrambler", eventRooms: ["MSE Wing"] },
    ],
  },
  {
    label: "Skiles",
    position: [33.77369858338894, -84.39596400393388],
    schoolHomeRooms: [
      { schoolName: "Gilmer HS", homeRooms: ["154"] },
      { schoolName: "Greenbrier HS", homeRooms: ["168"] },
      { schoolName: "GSMST", homeRooms: ["169"] },
      { schoolName: "Johns Creek HS", homeRooms: ["170"] },
      { schoolName: "Lakeside (Evans) HS", homeRooms: ["171"] },
      { schoolName: "Lambert HS", homeRooms: ["246"] },
      { schoolName: "Madison County HS", homeRooms: ["254"] },
      { schoolName: "Metter HS", homeRooms: ["255"] },
      { schoolName: "North Gwinnett HS", homeRooms: ["268"] },
      { schoolName: "North Oconee HS", homeRooms: ["269"] },
      { schoolName: "Northgate HS", homeRooms: ["270"] },
      { schoolName: "Northview HS", homeRooms: ["271"] },
      { schoolName: "Oglethorpe County HS", homeRooms: ["308"] },
      { schoolName: "Paideia School", homeRooms: ["311"] },
      { schoolName: "River Ridge HS", homeRooms: ["314"] },
      { schoolName: "RMSST", homeRooms: ["317"] },
    ],
  },
  {
    label: "Van Leer",
    position: [33.776151279047426, -84.39710091742755],
    schoolHomeRooms: [
      { schoolName: "South Forsyth HS", homeRooms: ["C240"] },
      { schoolName: "Southeast Bulloch HS", homeRooms: ["C240"] },
      { schoolName: "The Westminster Schools", homeRooms: ["C340"] },
      { schoolName: "Upson-Lee HS", homeRooms: ["C341"] },
      { schoolName: "Valwood School", homeRooms: ["C456"] },
      { schoolName: "Walton HS", homeRooms: ["C457"] },
      { schoolName: "White County HS", homeRooms: ["E283"] },
      { schoolName: "Woodward Academy", homeRooms: ["E361"] },
    ],
  },
];

const makerspaceLocations: MakerspaceLocation[] = [];

const transportLocations: TransportLocation[] = [
  {
    label: "Bus Parking: W21 Lot",
    position: [33.77715151834969, -84.39971892515817],
    description: "Parking lot for buses",
  },
  {
    label: "General Parking: W2 Lot",
    position: [33.77389823077431, -84.39956788161535],
    description: "Parking lot for general vehicles",
  },
  {
    label: "Drop Off Location",
    position: [33.77530902138295, -84.39596748697224],
    description: "Location for drop off",
  },
];
export { tournamentLocations, makerspaceLocations, transportLocations };
