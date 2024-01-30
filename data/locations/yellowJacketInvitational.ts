import {
  MakerspaceLocation,
  TournamentLocation,
} from "@/app/components/TournamentMap";

const tournamentLocations: TournamentLocation[] = [
  {
    label: "East Architecture",
    position: [33.776218438041454, -84.39499178593599],
    events: [{ eventName: "Pokemon Pathology", eventRoom: "309" }],
    homerooms: [
      { schoolName: "Chattahoochee High School", homeRoom: "207" },
      { schoolName: "The Westminster Schools", homeRoom: "107" },
    ],
  },
  {
    label: "CULC",
    position: [33.775000536193694, -84.3963075155798],
    events: [
      { eventName: "Chem Lab", eventRoom: "571" },
      { eventName: "Experimental Design", eventRoom: "573" },
      { eventName: "Fermi Questions/Awards", eventRoom: "152" },
      { eventName: "Forensics", eventRoom: "581" },
    ],
    homerooms: [
      { schoolName: "Lexington High School", homeRoom: "129" },
      { schoolName: "South Cobb High School", homeRoom: "423" },
    ],
  },
  {
    label: "IC",
    position: [33.77550128156202, -84.40126053276917],
    events: [
      { eventName: "Fossils", eventRoom: "109" },
      { eventName: "Microbe Mission", eventRoom: "115" },
      { eventName: "Optics", eventRoom: "103" },
    ],
  },
  {
    label: "Love",
    position: [33.776747491187, -84.40180663214677],
    events: [{ eventName: "Air Trajectory", eventRoom: "Atrium" }],
  },
  {
    label: "Mason",
    position: [33.776649522247936, -84.39903525838923],
    events: [
      { eventName: "Anatomy & Physiology", eventRoom: "5134" },
      { eventName: "Codebusters", eventRoom: "1133" },
      { eventName: "Disease Detectives", eventRoom: "2117" },
      { eventName: "Wind Power", eventRoom: "3133" },
    ],
  },
  {
    label: "Skiles",
    position: [33.77369858338894, -84.39596400393388],
    events: [{ eventName: "Astronomy", eventRoom: "249" }],
    homerooms: [
      { schoolName: "Campbell High School", homeRoom: "168" },
      { schoolName: "Collins Hill High School", homeRoom: "169" },
      { schoolName: "East Coweta High School", homeRoom: "171" },
      { schoolName: "Gilmer High School", homeRoom: "314" },
      { schoolName: "Jackson County High School", homeRoom: "308" },
      { schoolName: "James S. Rickards High School", homeRoom: "254" },
      { schoolName: "James S. Rickards High School", homeRoom: "255" },
      { schoolName: "Lakeside High School", homeRoom: "311" },
      { schoolName: "Lakeside High School, Evans, GA", homeRoom: "269" },
      { schoolName: "Lakeside High School, Evans, GA", homeRoom: "268" },
      { schoolName: "Northview High School", homeRoom: "170" },
      { schoolName: "Orlando Science High School", homeRoom: "270" },
      { schoolName: "Orlando Science High School", homeRoom: "271" },
      { schoolName: "West Forsyth High School", homeRoom: "317" },
      { schoolName: "Wheeler High School", homeRoom: "154" },
    ],
  },
  {
    label: "CoC",
    position: [33.77769047534177, -84.39732736008136],
    events: [
      { eventName: "Detector Building", eventRoom: "16" },
      { eventName: "Dynamic Planet", eventRoom: "17" },
      { eventName: "Quantum Quandaries", eventRoom: "101" },
    ],
  },
  {
    label: "Howey",
    position: [33.7776405764111, -84.3986783057815],
    events: [
      { eventName: "Ecology", eventRoom: "L1" },
      { eventName: "Forestry", eventRoom: "L3" },
      { eventName: "Geologic Mapping", eventRoom: "L4" },
      { eventName: "Tower", eventRoom: "L2" },
    ],
  },
  {
    label: "Klaus",
    position: [33.777180777225105, -84.39583656160448],
    events: [{ eventName: "Flight", eventRoom: "Atrium" }],
  },
  {
    label: "MRDC",
    position: [33.77681638264601, -84.40059685584552],
    events: [
      { eventName: "Robot Tour", eventRoom: "MSE Wing" },
      { eventName: "Scrambler", eventRoom: "MSE Wing" },
    ],
  },
  {
    label: "Boggs",
    position: [33.775885403501604, -84.39975333174158],
    events: [
      { eventName: "Write It Do It", eventRoom: "B9" },
      { eventName: "Write It Do It", eventRoom: "B5" },
    ],
  },
  {
    label: "West Architecture",
    position: [33.77606247565049, -84.3961210569472],
    homerooms: [
      { schoolName: "Alliance Academy for Innovation", homeRoom: "258" },
    ],
  },
  {
    label: "Van Leer",
    position: [33.776151279047426, -84.39710091742755],
    homerooms: [
      { schoolName: "Ed W. Clark High School", homeRoom: "C240" },
      { schoolName: "FCS Innovation Academy", homeRoom: "C241" },
      { schoolName: "Fulton Science Academy", homeRoom: "C456" },
      { schoolName: "Fulton Science Academy", homeRoom: "C457" },
      { schoolName: "Johns Creek High School", homeRoom: "C340" },
      { schoolName: "Lambert High School", homeRoom: "C341" },
    ],
  },
  {
    label: "Bunger-Henry",
    position: [33.77582399765655, -84.39827320393375],
    homerooms: [{ schoolName: "Northgate High School", homeRoom: "380" }],
  },
];

const makerspaceLocations: MakerspaceLocation[] = [
  {
    label: "MILL",
    position: [33.776253752760226, -84.40172173860996],
    fullName: "Materials Innovation and Learning Laboratory",
    hrefId: "mill-tour",
  },
  {
    label: "Invention Studio",
    position: [33.77729993365719, -84.40071135550421],
    hrefId: "invention-studio-tour",
  },
  {
    label: "HIVE",
    position: [33.775493431965835, -84.39736309239572],
    fullName: "Interdisciplinary Design Commons",
    hrefId: "hive-tour",
  },
];

export { tournamentLocations, makerspaceLocations };
