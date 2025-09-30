// src/data/questions.ts

import { Question } from '../types';

export const questions: { [moduleId: string]: Question[] } = {
  nautical_terms: [
    {
      id: 'nautical_001',
      module: 'nautical_terms',
      question: 'What is the correct term for the front of a boat?',
      image: 'boat_parts_001.svg',
      options: [
        'Bow',
        'Stern',
        'Port',
        'Starboard'
      ],
      correctAnswer: 0,
      explanation: 'The bow is the front of the boat, while the stern is the rear.',
      difficulty: 'easy'
    },
    {
      id: 'nautical_002',
      module: 'nautical_terms',
      question: 'What is the left side of a boat called when facing forward?',
      image: 'rigging_001.svg',
      options: [
        'Starboard',
        'Port',
        'Bow',
        'Stern'
      ],
      correctAnswer: 1,
      explanation: 'Port is the left side of the boat when facing forward. Starboard is the right side.',
      difficulty: 'easy'
    },
    {
      id: 'nautical_003',
      module: 'nautical_terms',
      question: 'What is the main vertical spar that supports the sails?',
      image: 'rigging_001.svg',
      options: [
        'Boom',
        'Mast',
        'Shroud',
        'Stay'
      ],
      correctAnswer: 1,
      explanation: 'The mast is the main vertical spar that supports the sails and rigging.',
      difficulty: 'easy'
    },
    {
      id: 'nautical_004',
      module: 'nautical_terms',
      question: 'What is the horizontal spar that extends from the mast?',
      image: 'rigging_001.svg',
      options: [
        'Mast',
        'Boom',
        'Shroud',
        'Stay'
      ],
      correctAnswer: 1,
      explanation: 'The boom is the horizontal spar that extends from the mast and supports the foot of the mainsail.',
      difficulty: 'medium'
    },
    {
      id: 'nautical_005',
      module: 'nautical_terms',
      question: 'What term describes the direction from which the wind is coming?',
      image: 'rigging_001.svg',
      options: [
        'Leeward',
        'Windward',
        'Abeam',
        'Ahead'
      ],
      correctAnswer: 1,
      explanation: 'Windward is the direction from which the wind is coming. Leeward is the opposite direction.',
      difficulty: 'medium'
    },
    {
      id: 'nautical_006',
      module: 'nautical_terms',
      question: 'What is the term for turning the boat into the wind?',
      image: 'rigging_001.svg',
      options: [
        'Tacking',
        'Gybing',
        'Bearing away',
        'Luffing'
      ],
      correctAnswer: 0,
      explanation: 'Tacking is turning the bow of the boat through the wind. Gybing is turning the stern through the wind.',
      difficulty: 'medium'
    },
    {
      id: 'nautical_007',
      module: 'nautical_terms',
      question: 'What is the rope used to control the angle of the sail?',
      image: 'rigging_001.svg',
      options: [
        'Sheet',
        'Halyard',
        'Shroud',
        'Stay'
      ],
      correctAnswer: 0,
      explanation: 'The sheet is the rope used to control the angle of the sail relative to the wind.',
      difficulty: 'medium'
    },
    {
      id: 'nautical_008',
      module: 'nautical_terms',
      question: 'What is the term for the depth of water beneath the boat?',
      image: 'rigging_001.svg',
      options: [
        'Draft',
        'Freeboard',
        'Depth',
        'Sounding'
      ],
      correctAnswer: 0,
      explanation: 'Draft is the depth of water that the boat needs to float. It\'s measured from the waterline to the deepest part of the hull.',
      difficulty: 'hard'
    },
    {
      id: 'nautical_009',
      module: 'nautical_terms',
      question: 'What is the term for the side of the boat away from the wind?',
      image: 'rigging_001.svg',
      options: [
        'Windward',
        'Leeward',
        'Abeam',
        'Ahead'
      ],
      correctAnswer: 1,
      explanation: 'Leeward is the side of the boat away from the wind. Windward is the side facing the wind.',
      difficulty: 'medium'
    },
    {
      id: 'nautical_010',
      module: 'nautical_terms',
      question: 'What is the rope used to raise and lower sails?',
      image: 'rigging_001.svg',
      options: [
        'Sheet',
        'Halyard',
        'Shroud',
        'Stay'
      ],
      correctAnswer: 1,
      explanation: 'The halyard is the rope used to raise and lower sails. Sheets control the sail angle.',
      difficulty: 'easy'
    }
  ],
      chart_symbols: [
        {
          id: 'chart_001',
          module: 'chart_symbols',
          question: 'What does a red and white striped buoy indicate?',
          image: 'buoyage_001.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 2,
          explanation: 'A red and white striped buoy is an isolated danger mark, indicating a hazard with navigable water all around it.',
          difficulty: 'medium'
        },
        {
          id: 'chart_002',
          module: 'chart_symbols',
          question: 'What does a black and yellow striped buoy with two black cones pointing upward indicate?',
          image: 'buoyage_002.svg',
          options: [
            'North cardinal mark',
            'South cardinal mark',
            'East cardinal mark',
            'West cardinal mark'
          ],
          correctAnswer: 0,
          explanation: 'A black and yellow striped buoy with two black cones pointing upward is a north cardinal mark, indicating safe water to the north.',
          difficulty: 'medium'
        },
        {
          id: 'chart_003',
          module: 'chart_symbols',
          question: 'What does a red and white checkered buoy indicate?',
          image: 'buoyage_003.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 0,
          explanation: 'A red and white checkered buoy is a safe water mark, indicating navigable water all around and often used to mark the center of a channel.',
          difficulty: 'easy'
        },
        {
          id: 'chart_004',
          module: 'chart_symbols',
          question: 'What does a yellow buoy with an X topmark indicate?',
          image: 'buoyage_004.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 3,
          explanation: 'A yellow buoy with an X topmark is a special mark, indicating a special area or feature such as a military exercise area or cable.',
          difficulty: 'medium'
        },
        {
          id: 'chart_005',
          module: 'chart_symbols',
          question: 'What does a red buoy with a red light indicate?',
          image: 'buoyage_005.svg',
          options: [
            'Port hand mark',
            'Starboard hand mark',
            'Safe water mark',
            'Isolated danger mark'
          ],
          correctAnswer: 0,
          explanation: 'A red buoy with a red light is a port hand mark, indicating the port (left) side of a channel when entering from seaward.',
          difficulty: 'easy'
        },
        {
          id: 'chart_006',
          module: 'chart_symbols',
          question: 'What does a green buoy with a green light indicate?',
          image: 'buoyage_006.svg',
          options: [
            'Port hand mark',
            'Starboard hand mark',
            'Safe water mark',
            'Isolated danger mark'
          ],
          correctAnswer: 1,
          explanation: 'A green buoy with a green light is a starboard hand mark, indicating the starboard (right) side of a channel when entering from seaward.',
          difficulty: 'easy'
        },
        {
          id: 'chart_007',
          module: 'chart_symbols',
          question: 'What does a red and white vertically striped buoy indicate?',
          image: 'buoyage_007.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 0,
          explanation: 'A red and white vertically striped buoy is a safe water mark, indicating navigable water all around and often used to mark the center of a channel.',
          difficulty: 'easy'
        },
        {
          id: 'chart_008',
          module: 'chart_symbols',
          question: 'What does a black and yellow striped buoy with two black cones pointing downward indicate?',
          image: 'buoyage_008.svg',
          options: [
            'North cardinal mark',
            'South cardinal mark',
            'East cardinal mark',
            'West cardinal mark'
          ],
          correctAnswer: 1,
          explanation: 'A black and yellow striped buoy with two black cones pointing downward is a south cardinal mark, indicating safe water to the south.',
          difficulty: 'medium'
        },
        {
          id: 'chart_009',
          module: 'chart_symbols',
          question: 'What does a black and yellow striped buoy with two black cones pointing away from each other indicate?',
          image: 'buoyage_009.svg',
          options: [
            'North cardinal mark',
            'South cardinal mark',
            'East cardinal mark',
            'West cardinal mark'
          ],
          correctAnswer: 2,
          explanation: 'A black and yellow striped buoy with two black cones pointing away from each other is an east cardinal mark, indicating safe water to the east.',
          difficulty: 'medium'
        },
        {
          id: 'chart_010',
          module: 'chart_symbols',
          question: 'What does a black and yellow striped buoy with two black cones pointing toward each other indicate?',
          image: 'buoyage_010.svg',
          options: [
            'North cardinal mark',
            'South cardinal mark',
            'East cardinal mark',
            'West cardinal mark'
          ],
          correctAnswer: 3,
          explanation: 'A black and yellow striped buoy with two black cones pointing toward each other is a west cardinal mark, indicating safe water to the west.',
          difficulty: 'medium'
        },
        {
          "id": "chart_001",
          "module": "chart_symbols",
          "question": "On a nautical chart, what does a blue shaded area usually represent?",
          "image": "chart_001.svg",
          "options": [
            "Shallow water or drying heights",
            "Deep water",
            "Shipping lanes",
            "Restricted areas"
          ],
          "correctAnswer": 0,
          "explanation": "Blue shaded areas on charts usually indicate shallower depths and drying areas, which may be unsafe for navigation.",
          "difficulty": "easy"
        },
        {
          "id": "chart_002",
          "module": "chart_symbols",
          "question": "What does an anchor symbol on a chart usually indicate?",
          "image": "chart_002.svg",
          "options": [
            "A shipwreck",
            "An anchorage area",
            "A mooring buoy",
            "A prohibited area"
          ],
          "correctAnswer": 1,
          "explanation": "An anchor symbol indicates a designated anchorage area where vessels may anchor.",
          "difficulty": "easy"
        },
        {
          "id": "chart_003",
          "module": "chart_symbols",
          "question": "What do magenta diamonds on a chart indicate?",
          "image": "chart_003.svg",
          "options": [
            "Recommended track",
            "Special marks",
            "Position of lights",
            "Radio reporting points"
          ],
          "correctAnswer": 3,
          "explanation": "Magenta diamonds typically mark VHF reporting points or other important communication positions.",
          "difficulty": "medium"
        },
        {
          "id": "chart_004",
          "module": "chart_symbols",
          "question": "On a chart, what does a magenta circle with a dot in the center usually represent?",
          "image": "chart_004.svg",
          "options": [
            "Safe water mark",
            "Light position",
            "Underwater cable",
            "Compass rose"
          ],
          "correctAnswer": 1,
          "explanation": "A magenta circle with a dot shows the exact position of a light.",
          "difficulty": "easy"
        },
        {
          "id": "chart_005",
          "module": "chart_symbols",
          "question": "What does the symbol of a small black cross usually represent on a chart?",
          "image": "chart_005.svg",
          "options": [
            "Rock which covers and uncovers",
            "Church or conspicuous landmark",
            "Survey position",
            "Danger area"
          ],
          "correctAnswer": 2,
          "explanation": "A small black cross marks a survey or triangulation point used for charting.",
          "difficulty": "medium"
        },
        {
          "id": "chart_006",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'F' next to a light on a chart mean?",
          "image": "chart_006.svg",
          "options": [
            "Flashing",
            "Fixed",
            "Fog signal",
            "Fading"
          ],
          "correctAnswer": 1,
          "explanation": "‘F’ indicates a fixed light, meaning it shows continuously without flashing.",
          "difficulty": "easy"
        },
        {
          "id": "chart_007",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Fl(3)10s' mean on a chart?",
          "image": "chart_007.svg",
          "options": [
            "A light that flashes 3 times every 10 seconds",
            "A light that flashes every 3 seconds",
            "A light that is fixed for 10 seconds",
            "A light that flashes once every 10 seconds"
          ],
          "correctAnswer": 0,
          "explanation": "'Fl(3)10s' means a group of 3 flashes repeated every 10 seconds.",
          "difficulty": "medium"
        },
        {
          "id": "chart_008",
          "module": "chart_symbols",
          "question": "What does a black and yellow striped buoy with two black cones pointing downward indicate?",
          "image": "chart_008.svg",
          "options": [
            "North cardinal mark",
            "South cardinal mark",
            "East cardinal mark",
            "West cardinal mark"
          ],
          "correctAnswer": 1,
          "explanation": "A south cardinal mark has black above yellow with cones pointing downward, indicating safe water to the south.",
          "difficulty": "medium"
        },
        {
          "id": "chart_009",
          "module": "chart_symbols",
          "question": "What does a symbol of a fish net with dots across a chart indicate?",
          "image": "chart_009.svg",
          "options": [
            "Anchorage prohibited",
            "Foul ground",
            "Fishing area or nets",
            "Underwater cable"
          ],
          "correctAnswer": 2,
          "explanation": "Fish net or dotted line symbols mark fishing areas or nets, which may obstruct passage.",
          "difficulty": "medium"
        },
        {
          "id": "chart_010",
          "module": "chart_symbols",
          "question": "What do magenta dashed lines on a chart usually represent?",
          "image": "chart_010.svg",
          "options": [
            "TSS separation lines",
            "Recommended routes",
            "Submarine cables",
            "Areas to be avoided"
          ],
          "correctAnswer": 1,
          "explanation": "Magenta dashed lines mark recommended tracks or routes for navigation.",
          "difficulty": "medium"
        },
        {
          "id": "chart_011",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Oc' next to a light mean?",
          "image": "chart_011.svg",
          "options": [
            "Occulting light",
            "Obscured light",
            "Occasional light",
            "Oceanic light"
          ],
          "correctAnswer": 0,
          "explanation": "'Oc' indicates an occulting light where the light is longer on than off in its cycle.",
          "difficulty": "medium"
        },
        {
          "id": "chart_012",
          "module": "chart_symbols",
          "question": "What does a magenta 'P' symbol usually mark on charts?",
          "image": "chart_012.svg",
          "options": [
            "Prohibited area",
            "Pilot boarding station",
            "Pipeline",
            "Port authority office"
          ],
          "correctAnswer": 1,
          "explanation": "A magenta 'P' symbol marks pilot boarding stations.",
          "difficulty": "medium"
        },
        {
          "id": "chart_013",
          "module": "chart_symbols",
          "question": "What does a small open circle with a dot in the center on a chart indicate?",
          "image": "chart_013.svg",
          "options": [
            "Fixed radar reflector",
            "Conspicuous tower",
            "Position of a light",
            "Isolated rock"
          ],
          "correctAnswer": 2,
          "explanation": "A circle with a dot indicates the position of a light.",
          "difficulty": "easy"
        },
        {
          "id": "chart_014",
          "module": "chart_symbols",
          "question": "On a chart, what does 'PA' stand for near a depth sounding?",
          "image": "chart_014.svg",
          "options": [
            "Position approximate",
            "Position accurate",
            "Pilotage area",
            "Passage approved"
          ],
          "correctAnswer": 0,
          "explanation": "‘PA’ means position approximate, showing the charted feature is not surveyed exactly.",
          "difficulty": "medium"
        },
        {
          "id": "chart_015",
          "module": "chart_symbols",
          "question": "What does 'ED' stand for on a chart?",
          "image": "chart_015.svg",
          "options": [
            "Estimated depth",
            "Electronic data",
            "Explosive danger",
            "Echo sounding"
          ],
          "correctAnswer": 0,
          "explanation": "'ED' means estimated depth, where exact survey information is not available.",
          "difficulty": "medium"
        },
        {
          "id": "chart_016",
          "module": "chart_symbols",
          "question": "What symbol usually marks a submarine cable on charts?",
          "image": "chart_016.svg",
          "options": [
            "Dashed magenta line with text 'Cable'",
            "Black line with anchor symbols",
            "Dashed line with magenta crosses",
            "Wavy line"
          ],
          "correctAnswer": 2,
          "explanation": "Submarine cables are shown as dashed lines with magenta crosses—anchoring is prohibited nearby.",
          "difficulty": "medium"
        },
        {
          "id": "chart_017",
          "module": "chart_symbols",
          "question": "What does a drying height symbol look like?",
          "image": "chart_017.svg",
          "options": [
            "Number with underline",
            "Number with a dot",
            "Number with overline",
            "Number in italics"
          ],
          "correctAnswer": 0,
          "explanation": "Drying heights are shown with an underline to distinguish them from depths below chart datum.",
          "difficulty": "medium"
        },
        {
          "id": "chart_018",
          "module": "chart_symbols",
          "question": "What does 'M' in seabed notation indicate?",
          "image": "chart_018.svg",
          "options": [
            "Mud",
            "Marker buoy",
            "Magnetic",
            "Mineral deposits"
          ],
          "correctAnswer": 0,
          "explanation": "‘M’ stands for mud, a type of seabed composition important for anchoring.",
          "difficulty": "easy"
        },
        {
          "id": "chart_019",
          "module": "chart_symbols",
          "question": "What does 'S' in seabed notation indicate?",
          "image": "chart_019.svg",
          "options": [
            "Sand",
            "Shale",
            "Shells",
            "Slope"
          ],
          "correctAnswer": 0,
          "explanation": "'S' stands for sand, describing the seabed type.",
          "difficulty": "easy"
        },
        {
          "id": "chart_020",
          "module": "chart_symbols",
          "question": "What does 'Sh' in seabed notation mean?",
          "image": "chart_020.svg",
          "options": [
            "Shells",
            "Shale",
            "Shoal",
            "Sharp rocks"
          ],
          "correctAnswer": 0,
          "explanation": "'Sh' indicates shells on the seabed.",
          "difficulty": "medium"
        },
        {
          "id": "chart_021",
          "module": "chart_symbols",
          "question": "On a chart, what does 'Gr' in seabed notation indicate?",
          "image": "chart_021.svg",
          "options": [
            "Gravel",
            "Grass",
            "Granite",
            "Grounded"
          ],
          "correctAnswer": 0,
          "explanation": "'Gr' indicates gravel as seabed type.",
          "difficulty": "easy"
        },
        {
          "id": "chart_022",
          "module": "chart_symbols",
          "question": "What does a symbol of a small circle with radiating lines mean?",
          "image": "chart_022.svg",
          "options": [
            "Conspicuous tower",
            "Radar transponder (Racon)",
            "Radio beacon",
            "Church spire"
          ],
          "correctAnswer": 1,
          "explanation": "A small circle with radiating lines indicates a Racon, which provides a radar response.",
          "difficulty": "medium"
        },
        {
          "id": "chart_023",
          "module": "chart_symbols",
          "question": "What does a black square symbol usually represent?",
          "image": "chart_023.svg",
          "options": [
            "Tank",
            "Conspicuous building",
            "Dangerous wreck",
            "Beacon"
          ],
          "correctAnswer": 1,
          "explanation": "A black square often shows a conspicuous building or landmark useful for navigation.",
          "difficulty": "medium"
        },
        {
          "id": "chart_024",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Lt Ho' mean on a chart?",
          "image": "chart_024.svg",
          "options": [
            "Light house",
            "Lighted house",
            "Light horn",
            "Lateral holding"
          ],
          "correctAnswer": 0,
          "explanation": "‘Lt Ho’ is the abbreviation for lighthouse on Admiralty charts.",
          "difficulty": "easy"
        },
        {
          "id": "chart_025",
          "module": "chart_symbols",
          "question": "What does a purple TSS area marked on a chart indicate?",
          "image": "chart_025.svg",
          "options": [
            "Traffic Separation Scheme",
            "Temporary Speed System",
            "Tidal Stream Station",
            "Transport Safety Sector"
          ],
          "correctAnswer": 0,
          "explanation": "TSS (Traffic Separation Scheme) areas regulate vessel traffic flow for safety.",
          "difficulty": "medium"
        },
        {
          "id": "chart_026",
          "module": "chart_symbols",
          "question": "What does 'Wk' indicate on a chart?",
          "image": "chart_026.svg",
          "options": [
            "Weak tide",
            "Wreck",
            "Waypoint known",
            "Water intake"
          ],
          "correctAnswer": 1,
          "explanation": "'Wk' is the abbreviation for wreck, often accompanied by depth or drying information.",
          "difficulty": "easy"
        },
        {
          "id": "chart_027",
          "module": "chart_symbols",
          "question": "What does the symbol of a dotted magenta circle around a buoy indicate?",
          "image": "chart_027.svg",
          "options": [
            "Area to avoid",
            "Radar conspicuous buoy",
            "Safe water zone",
            "Racon range"
          ],
          "correctAnswer": 1,
          "explanation": "A dotted magenta circle around a buoy indicates it is radar conspicuous.",
          "difficulty": "medium"
        },
        {
          "id": "chart_028",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Iso' mean for a light characteristic?",
          "image": "chart_028.svg",
          "options": [
            "Isolated danger light",
            "Isochronous light",
            "Isophase light",
            "Isolated sector"
          ],
          "correctAnswer": 2,
          "explanation": "‘Iso’ means an isophase light, where the light and darkness are of equal duration.",
          "difficulty": "medium"
        },
        {
          "id": "chart_029",
          "module": "chart_symbols",
          "question": "On a chart, what does 'Mo(A)' mean in a light description?",
          "image": "chart_029.svg",
          "options": [
            "Morse code signal 'A'",
            "Morning light",
            "Modified alternating light",
            "Moving obstruction"
          ],
          "correctAnswer": 0,
          "explanation": "‘Mo(A)’ means the light shows the Morse code for 'A' (short-long).",
          "difficulty": "hard"
        },
        {
          "id": "chart_030",
          "module": "chart_symbols",
          "question": "What do two concentric magenta circles around a buoy symbol indicate?",
          "image": "chart_030.svg",
          "options": [
            "Fog signal",
            "Bell buoy",
            "Whistle buoy",
            "Sound signal"
          ],
          "correctAnswer": 3,
          "explanation": "Concentric magenta circles indicate a buoy fitted with a sound signal such as a bell, gong, or whistle.",
          "difficulty": "medium"
        },
        {
          "id": "chart_031",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Tr' mean in seabed notation?",
          "image": "chart_031.svg",
          "options": [
            "Tree debris",
            "Trench",
            "Trawl ground",
            "Shingle or gravel"
          ],
          "correctAnswer": 3,
          "explanation": "'Tr' indicates shingle or gravel seabed composition.",
          "difficulty": "medium"
        },
        {
          "id": "chart_032",
          "module": "chart_symbols",
          "question": "What does 'Coral' in seabed notation indicate?",
          "image": "chart_032.svg",
          "options": [
            "Coral reef area",
            "Cordon restricted zone",
            "Corner of chart",
            "Current observed"
          ],
          "correctAnswer": 0,
          "explanation": "'Coral' marks areas of coral seabed which may be hazardous to anchoring and navigation.",
          "difficulty": "medium"
        },
        {
          "id": "chart_033",
          "module": "chart_symbols",
          "question": "What does 'Bk' mean in seabed notation?",
          "image": "chart_033.svg",
          "options": [
            "Bank",
            "Brick",
            "Broken shell",
            "Black rock"
          ],
          "correctAnswer": 2,
          "explanation": "'Bk' indicates broken shells on the seabed.",
          "difficulty": "medium"
        },
        {
          "id": "chart_034",
          "module": "chart_symbols",
          "question": "What symbol is used for a wreck that is considered dangerous?",
          "image": "chart_034.svg",
          "options": [
            "Sunken ship symbol with depth",
            "Sunken ship symbol with dotted line",
            "Black cross",
            "Magenta danger circle"
          ],
          "correctAnswer": 0,
          "explanation": "A wreck symbol with a specific depth shown is considered dangerous to surface navigation.",
          "difficulty": "hard"
        },
        {
          "id": "chart_035",
          "module": "chart_symbols",
          "question": "What does 'Obstn' mean on a chart?",
          "image": "chart_035.svg",
          "options": [
            "Obstruction",
            "Observation tower",
            "Obstacle clearance",
            "Obsolete data"
          ],
          "correctAnswer": 0,
          "explanation": "'Obstn' means obstruction, indicating an underwater hazard not clearly defined.",
          "difficulty": "medium"
        },
        {
          "id": "chart_036",
          "module": "chart_symbols",
          "question": "What symbol marks a rock that is always covered by water?",
          "image": "chart_036.svg",
          "options": [
            "Plus symbol with drying height",
            "Asterisk symbol",
            "Cross with dotted circle",
            "Black triangle"
          ],
          "correctAnswer": 1,
          "explanation": "An asterisk (*) symbol indicates a rock that is always covered, even at low water.",
          "difficulty": "easy"
        },
        {
          "id": "chart_037",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'VR' mean in a light description?",
          "image": "chart_037.svg",
          "options": [
            "Variable range",
            "Vertical red",
            "Very rapid flashing",
            "Visible radar"
          ],
          "correctAnswer": 2,
          "explanation": "'VR' means very rapid flashing, usually over 100 flashes per minute.",
          "difficulty": "medium"
        },
        {
          "id": "chart_038",
          "module": "chart_symbols",
          "question": "What does 'Unsurveyed' area shading on charts mean?",
          "image": "chart_038.svg",
          "options": [
            "The depths are accurate",
            "The area has not been surveyed in detail",
            "The area is dangerous",
            "The area is prohibited"
          ],
          "correctAnswer": 1,
          "explanation": "Unsurveyed areas mean depths and hazards may not be accurately known and extra caution is needed.",
          "difficulty": "easy"
        },
        {
          "id": "chart_039",
          "module": "chart_symbols",
          "question": "What does 'Pile' indicate on a chart?",
          "image": "chart_039.svg",
          "options": [
            "A wooden or metal post driven into the seabed",
            "A pile of rocks",
            "A submerged wreck",
            "A tidal gauge"
          ],
          "correctAnswer": 0,
          "explanation": "'Pile' indicates a wooden or metal post fixed into the seabed, often used as a marker or mooring.",
          "difficulty": "medium"
        },
        {
          "id": "chart_040",
          "module": "chart_symbols",
          "question": "What does 'Psn' mean on a chart?",
          "image": "chart_040.svg",
          "options": [
            "Position doubtful",
            "Position known",
            "Position safe",
            "Position survey"
          ],
          "correctAnswer": 0,
          "explanation": "'Psn' indicates a doubtful position of a feature, so it may not be exactly located.",
          "difficulty": "medium"
        },
        {
          "id": "chart_041",
          "module": "chart_symbols",
          "question": "What does a magenta anchor symbol with a circle mean?",
          "image": "chart_041.svg",
          "options": [
            "Anchoring prohibited",
            "Designated anchorage",
            "Mooring buoy",
            "Harbour entrance"
          ],
          "correctAnswer": 0,
          "explanation": "An anchor symbol crossed out or circled in magenta indicates anchoring is prohibited.",
          "difficulty": "medium"
        },
        {
          "id": "chart_042",
          "module": "chart_symbols",
          "question": "What does a green or red sector light on a chart indicate?",
          "image": "chart_042.svg",
          "options": [
            "Tidal flow",
            "Safe bearing sector",
            "Direction to steer",
            "Anchorage sector"
          ],
          "correctAnswer": 1,
          "explanation": "Sector lights show safe approaches and indicate danger areas when viewed in the wrong colour.",
          "difficulty": "medium"
        },
        {
          "id": "chart_043",
          "module": "chart_symbols",
          "question": "What does a dotted black line across a charted area usually represent?",
          "image": "chart_043.svg",
          "options": [
            "Submarine cable",
            "Ferry route",
            "Pipeline",
            "Harbour limit"
          ],
          "correctAnswer": 1,
          "explanation": "Dotted black lines usually mark ferry routes or crossing lanes.",
          "difficulty": "medium"
        },
        {
          "id": "chart_044",
          "module": "chart_symbols",
          "question": "What does a star symbol with a dot represent on a chart?",
          "image": "chart_044.svg",
          "options": [
            "Position of a starboard hand buoy",
            "Position of a light",
            "Position of a church with a spire",
            "Position of a landmark tower"
          ],
          "correctAnswer": 2,
          "explanation": "A star with a dot symbol often marks a church with a spire, a conspicuous landmark.",
          "difficulty": "medium"
        },
        {
          "id": "chart_045",
          "module": "chart_symbols",
          "question": "What does 'Dir' in a light description mean?",
          "image": "chart_045.svg",
          "options": [
            "Directional light",
            "Direct flashing",
            "Direct bearing",
            "Distant range"
          ],
          "correctAnswer": 0,
          "explanation": "'Dir' means directional light, which covers a narrow sector to guide vessels.",
          "difficulty": "medium"
        },
        {
          "id": "chart_046",
          "module": "chart_symbols",
          "question": "What does a triangle symbol on land represent?",
          "image": "chart_046.svg",
          "options": [
            "Radio tower",
            "Lookout tower",
            "Triangulation station",
            "Light beacon"
          ],
          "correctAnswer": 2,
          "explanation": "A triangle symbol on land marks a triangulation station used in chart surveying.",
          "difficulty": "medium"
        },
        {
          "id": "chart_047",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Fog Sig' mean on a chart?",
          "image": "chart_047.svg",
          "options": [
            "Fog signal",
            "Fog significant",
            "Fog signature",
            "Fog sighting"
          ],
          "correctAnswer": 0,
          "explanation": "'Fog Sig' indicates a fog signal installation such as a horn, bell, or siren.",
          "difficulty": "easy"
        },
        {
          "id": "chart_048",
          "module": "chart_symbols",
          "question": "What does 'N' represent in a seabed description?",
          "image": "chart_048.svg",
          "options": [
            "Nautical feature",
            "Nets",
            "Nodule",
            "Nodules or clay"
          ],
          "correctAnswer": 3,
          "explanation": "'N' indicates nodules or clay seabed type.",
          "difficulty": "hard"
        },
        {
          "id": "chart_049",
          "module": "chart_symbols",
          "question": "What does a bold magenta line across a charted channel usually represent?",
          "image": "chart_049.svg",
          "options": [
            "Bridge",
            "Overhead cable",
            "Harbour limit",
            "Traffic separation line"
          ],
          "correctAnswer": 1,
          "explanation": "A bold magenta line often marks the position of overhead cables or power lines.",
          "difficulty": "medium"
        },
        {
          "id": "chart_050",
          "module": "chart_symbols",
          "question": "What does the abbreviation 'Pile Lts' mean on a chart?",
          "image": "chart_050.svg",
          "options": [
            "Pile with lights",
            "Pile located",
            "Pilot light station",
            "Pipeline lights"
          ],
          "correctAnswer": 0,
          "explanation": "'Pile Lts' means a pile fitted with lights for navigational purposes.",
          "difficulty": "medium"
        },
      ],
      anchorwork: [
        {
          id: 'anchor_001',
          module: 'anchorwork',
          question: 'What is the recommended scope for anchoring in good holding ground?',
          image: 'anchorwork_001.svg',
          options: [
            '3:1 (3 times the depth)',
            '5:1 (5 times the depth)',
            '7:1 (7 times the depth)',
            '10:1 (10 times the depth)'
          ],
          correctAnswer: 2,
          explanation: 'The recommended scope for anchoring in good holding ground is 7:1 (7 times the depth), providing adequate holding power.',
          difficulty: 'medium'
        },
        {
          id: 'anchor_002',
          module: 'anchorwork',
          question: 'What is the minimum scope recommended for anchoring in poor holding ground?',
          image: 'anchorwork_002.svg',
          options: [
            '5:1 (5 times the depth)',
            '7:1 (7 times the depth)',
            '10:1 (10 times the depth)',
            '15:1 (15 times the depth)'
          ],
          correctAnswer: 2,
          explanation: 'In poor holding ground, a minimum scope of 10:1 (10 times the depth) is recommended to ensure adequate holding power.',
          difficulty: 'medium'
        },
        {
          id: 'anchor_003',
          module: 'anchorwork',
          question: 'What is the purpose of a snubber when anchoring?',
          image: 'anchorwork_003.svg',
          options: [
            'To increase the scope',
            'To reduce shock loading on the anchor chain',
            'To mark the anchor position',
            'To prevent the anchor from dragging'
          ],
          correctAnswer: 1,
          explanation: 'A snubber is used to reduce shock loading on the anchor chain, providing elasticity and reducing stress on the anchor system.',
          difficulty: 'medium'
        },
        {
          id: 'anchor_004',
          module: 'anchorwork',
          question: 'What is the recommended angle for setting an anchor?',
          image: 'anchorwork_004.svg',
          options: [
            '30 degrees',
            '45 degrees',
            '60 degrees',
            '90 degrees'
          ],
          correctAnswer: 1,
          explanation: 'The recommended angle for setting an anchor is 45 degrees, allowing the anchor to dig in properly and provide maximum holding power.',
          difficulty: 'easy'
        },
        {
          id: 'anchor_005',
          module: 'anchorwork',
          question: 'What is the purpose of a trip line when anchoring?',
          image: 'anchorwork_005.svg',
          options: [
            'To increase holding power',
            'To help retrieve a fouled anchor',
            'To mark the anchor position',
            'To reduce scope'
          ],
          correctAnswer: 1,
          explanation: 'A trip line is used to help retrieve a fouled anchor by providing an alternative way to pull the anchor from a different angle.',
          difficulty: 'medium'
        },
        {
          id: 'anchor_006',
          module: 'anchorwork',
          question: 'What is the recommended minimum depth for anchoring?',
          image: 'anchorwork_006.svg',
          options: [
            '2 meters',
            '3 meters',
            '5 meters',
            '10 meters'
          ],
          correctAnswer: 1,
          explanation: 'The recommended minimum depth for anchoring is 3 meters to ensure adequate clearance and prevent grounding.',
          difficulty: 'easy'
        },
        {
          id: 'anchor_007',
          module: 'anchorwork',
          question: 'What is the purpose of a kedge anchor?',
          image: 'anchorwork_007.svg',
          options: [
            'Primary anchoring',
            'Emergency anchoring',
            'Mooring',
            'All of the above'
          ],
          correctAnswer: 3,
          explanation: 'A kedge anchor can be used for primary anchoring, emergency anchoring, and mooring, making it a versatile anchor type.',
          difficulty: 'medium'
        },
        {
          id: 'anchor_008',
          module: 'anchorwork',
          question: 'What is the recommended material for anchor chain?',
          image: 'anchorwork_008.svg',
          options: [
            'Stainless steel',
            'Galvanized steel',
            'Aluminum',
            'Copper'
          ],
          correctAnswer: 1,
          explanation: 'Galvanized steel is the recommended material for anchor chain due to its strength, durability, and corrosion resistance.',
          difficulty: 'easy'
        },
        {
          id: 'anchor_009',
          module: 'anchorwork',
          question: 'What is the purpose of a chain stopper?',
          image: 'anchorwork_009.svg',
          options: [
            'To increase scope',
            'To secure the anchor chain',
            'To reduce shock loading',
            'To mark the anchor position'
          ],
          correctAnswer: 1,
          explanation: 'A chain stopper is used to secure the anchor chain, taking the load off the windlass and providing a secure attachment point.',
          difficulty: 'medium'
        },
        {
          id: 'anchor_010',
          module: 'anchorwork',
          question: 'What is the recommended minimum weight for a primary anchor?',
          image: 'anchorwork_010.svg',
          options: [
            '1 kg per meter of boat length',
            '2 kg per meter of boat length',
            '3 kg per meter of boat length',
            '5 kg per meter of boat length'
          ],
          correctAnswer: 1,
          explanation: 'The recommended minimum weight for a primary anchor is 2 kg per meter of boat length, providing adequate holding power.',
          difficulty: 'medium'
        }
      ],
      lights: [
        {
          id: 'lights_001',
          module: 'lights',
          question: 'What does a white light over a red light indicate?',
          image: 'lights_001.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 1,
          explanation: 'A white light over a red light indicates a vessel restricted in its ability to maneuver, such as a vessel engaged in dredging or underwater operations.',
          difficulty: 'medium'
        },
        {
          id: 'lights_002',
          module: 'lights',
          question: 'What does a red light over a white light indicate?',
          image: 'lights_002.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 0,
          explanation: 'A red light over a white light indicates a vessel not under command, meaning it cannot maneuver as required by the rules.',
          difficulty: 'medium'
        },
        {
          id: 'lights_003',
          module: 'lights',
          question: 'What does a green light over a white light indicate?',
          image: 'lights_003.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 2,
          explanation: 'A green light over a white light indicates a vessel constrained by its draft, meaning it is severely restricted in its ability to deviate from its course.',
          difficulty: 'medium'
        },
        {
          id: 'lights_004',
          module: 'lights',
          question: 'What does a white light over a red light over a white light indicate?',
          image: 'lights_004.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 3,
          explanation: 'A white light over a red light over a white light indicates a vessel aground, meaning it is stuck on the bottom.',
          difficulty: 'medium'
        },
        {
          id: 'lights_005',
          module: 'lights',
          question: 'What does a yellow light over a white light indicate?',
          image: 'lights_005.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 1,
          explanation: 'A yellow light over a white light indicates a vessel restricted in its ability to maneuver, such as a vessel engaged in towing operations.',
          difficulty: 'medium'
        },
        {
          id: 'lights_006',
          module: 'lights',
          question: 'What does a red light over a red light indicate?',
          image: 'lights_006.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 0,
          explanation: 'A red light over a red light indicates a vessel not under command, meaning it cannot maneuver as required by the rules.',
          difficulty: 'medium'
        },
        {
          id: 'lights_007',
          module: 'lights',
          question: 'What does a green light over a green light indicate?',
          image: 'lights_007.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 2,
          explanation: 'A green light over a green light indicates a vessel constrained by its draft, meaning it is severely restricted in its ability to deviate from its course.',
          difficulty: 'medium'
        },
        {
          id: 'lights_008',
          module: 'lights',
          question: 'What does a white light over a white light indicate?',
          image: 'lights_008.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 3,
          explanation: 'A white light over a white light indicates a vessel aground, meaning it is stuck on the bottom.',
          difficulty: 'medium'
        },
        {
          id: 'lights_009',
          module: 'lights',
          question: 'What does a yellow light over a yellow light indicate?',
          image: 'lights_009.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 1,
          explanation: 'A yellow light over a yellow light indicates a vessel restricted in its ability to maneuver, such as a vessel engaged in fishing operations.',
          difficulty: 'medium'
        },
        {
          id: 'lights_010',
          module: 'lights',
          question: 'What does a red light over a green light indicate?',
          image: 'lights_010.svg',
          options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by draft',
            'Vessel aground'
          ],
          correctAnswer: 0,
          explanation: 'A red light over a green light indicates a vessel not under command, meaning it cannot maneuver as required by the rules.',
          difficulty: 'medium'
        }
      ],
      buoyage: [
        {
          id: 'buoy_001',
          module: 'buoyage',
          question: 'What does a red and white horizontally striped buoy indicate?',
          image: 'buoyage_001.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 0,
          explanation: 'A red and white horizontally striped buoy is a safe water mark, indicating navigable water all around and often used to mark the center of a channel.',
          difficulty: 'easy'
        },
        {
          id: 'buoy_002',
          module: 'buoyage',
          question: 'What does a black and yellow vertically striped buoy indicate?',
          image: 'buoyage_002.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 1,
          explanation: 'A black and yellow vertically striped buoy is a cardinal mark, indicating the direction of safe water relative to the mark.',
          difficulty: 'medium'
        },
        {
          id: 'buoy_003',
          module: 'buoyage',
          question: 'What does a red and white diagonally striped buoy indicate?',
          image: 'buoyage_003.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 2,
          explanation: 'A red and white diagonally striped buoy is an isolated danger mark, indicating a hazard with navigable water all around it.',
          difficulty: 'medium'
        },
        {
          id: 'buoy_004',
          module: 'buoyage',
          question: 'What does a yellow buoy with a yellow light indicate?',
          image: 'buoyage_004.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 3,
          explanation: 'A yellow buoy with a yellow light is a special mark, indicating a special area or feature such as a military exercise area or cable.',
          difficulty: 'medium'
        },
        {
          id: 'buoy_005',
          module: 'buoyage',
          question: 'What does a red buoy with a red light indicate?',
          image: 'buoyage_005.svg',
          options: [
            'Port hand mark',
            'Starboard hand mark',
            'Safe water mark',
            'Isolated danger mark'
          ],
          correctAnswer: 0,
          explanation: 'A red buoy with a red light is a port hand mark, indicating the port (left) side of a channel when entering from seaward.',
          difficulty: 'easy'
        },
        {
          id: 'buoy_006',
          module: 'buoyage',
          question: 'What does a green buoy with a green light indicate?',
          image: 'buoyage_006.svg',
          options: [
            'Port hand mark',
            'Starboard hand mark',
            'Safe water mark',
            'Isolated danger mark'
          ],
          correctAnswer: 1,
          explanation: 'A green buoy with a green light is a starboard hand mark, indicating the starboard (right) side of a channel when entering from seaward.',
          difficulty: 'easy'
        },
        {
          id: 'buoy_007',
          module: 'buoyage',
          question: 'What does a red and white vertically striped buoy indicate?',
          image: 'buoyage_007.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 0,
          explanation: 'A red and white vertically striped buoy is a safe water mark, indicating navigable water all around and often used to mark the center of a channel.',
          difficulty: 'easy'
        },
        {
          id: 'buoy_008',
          module: 'buoyage',
          question: 'What does a black and yellow horizontally striped buoy indicate?',
          image: 'buoyage_008.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 1,
          explanation: 'A black and yellow horizontally striped buoy is a cardinal mark, indicating the direction of safe water relative to the mark.',
          difficulty: 'medium'
        },
        {
          id: 'buoy_009',
          module: 'buoyage',
          question: 'What does a red and white checkered buoy indicate?',
          image: 'buoyage_009.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 0,
          explanation: 'A red and white checkered buoy is a safe water mark, indicating navigable water all around and often used to mark the center of a channel.',
          difficulty: 'easy'
        },
        {
          id: 'buoy_010',
          module: 'buoyage',
          question: 'What does a yellow buoy with an X topmark indicate?',
          image: 'buoyage_010.svg',
          options: [
            'Safe water mark',
            'Cardinal mark',
            'Isolated danger mark',
            'Special mark'
          ],
          correctAnswer: 3,
          explanation: 'A yellow buoy with an X topmark is a special mark, indicating a special area or feature such as a military exercise area or cable.',
          difficulty: 'medium'
        }
      ],
      irpcs: [
        {
          id: 'irpcs_001',
          module: 'irpcs',
          question: 'What is the stand-on vessel in a crossing situation?',
          image: 'irpcs_001.svg',
          options: [
            'The vessel to starboard',
            'The vessel to port',
            'The vessel with right of way',
            'The vessel that can maneuver more easily'
          ],
          correctAnswer: 0,
          explanation: 'In a crossing situation, the vessel to starboard is the stand-on vessel and has right of way, while the vessel to port must give way.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_002',
          module: 'irpcs',
          question: 'What is the give-way vessel in a crossing situation?',
          image: 'irpcs_002.svg',
          options: [
            'The vessel to starboard',
            'The vessel to port',
            'The vessel with right of way',
            'The vessel that can maneuver more easily'
          ],
          correctAnswer: 1,
          explanation: 'In a crossing situation, the vessel to port is the give-way vessel and must take action to avoid collision.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_003',
          module: 'irpcs',
          question: 'What is the stand-on vessel in a head-on situation?',
          image: 'irpcs_003.svg',
          options: [
            'The vessel to starboard',
            'The vessel to port',
            'Both vessels',
            'Neither vessel'
          ],
          correctAnswer: 2,
          explanation: 'In a head-on situation, both vessels are stand-on vessels and must alter course to starboard to pass port to port.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_004',
          module: 'irpcs',
          question: 'What is the give-way vessel in a head-on situation?',
          image: 'irpcs_004.svg',
          options: [
            'The vessel to starboard',
            'The vessel to port',
            'Both vessels',
            'Neither vessel'
          ],
          correctAnswer: 2,
          explanation: 'In a head-on situation, both vessels are give-way vessels and must alter course to starboard to pass port to port.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_005',
          module: 'irpcs',
          question: 'What is the stand-on vessel in an overtaking situation?',
          image: 'irpcs_005.svg',
          options: [
            'The vessel being overtaken',
            'The vessel overtaking',
            'The vessel to starboard',
            'The vessel to port'
          ],
          correctAnswer: 0,
          explanation: 'In an overtaking situation, the vessel being overtaken is the stand-on vessel and has right of way.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_006',
          module: 'irpcs',
          question: 'What is the give-way vessel in an overtaking situation?',
          image: 'irpcs_006.svg',
          options: [
            'The vessel being overtaken',
            'The vessel overtaking',
            'The vessel to starboard',
            'The vessel to port'
          ],
          correctAnswer: 1,
          explanation: 'In an overtaking situation, the vessel overtaking is the give-way vessel and must keep clear of the vessel being overtaken.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_007',
          module: 'irpcs',
          question: 'What is the stand-on vessel in a power-driven vessel meeting a sailing vessel?',
          image: 'irpcs_007.svg',
          options: [
            'The power-driven vessel',
            'The sailing vessel',
            'The vessel to starboard',
            'The vessel to port'
          ],
          correctAnswer: 1,
          explanation: 'When a power-driven vessel meets a sailing vessel, the sailing vessel is the stand-on vessel and has right of way.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_008',
          module: 'irpcs',
          question: 'What is the give-way vessel in a power-driven vessel meeting a sailing vessel?',
          image: 'irpcs_008.svg',
          options: [
            'The power-driven vessel',
            'The sailing vessel',
            'The vessel to starboard',
            'The vessel to port'
          ],
          correctAnswer: 0,
          explanation: 'When a power-driven vessel meets a sailing vessel, the power-driven vessel is the give-way vessel and must keep clear.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_009',
          module: 'irpcs',
          question: 'What is the stand-on vessel in a vessel meeting a vessel not under command?',
          image: 'irpcs_009.svg',
          options: [
            'The vessel not under command',
            'The other vessel',
            'The vessel to starboard',
            'The vessel to port'
          ],
          correctAnswer: 0,
          explanation: 'A vessel not under command is always the stand-on vessel and has right of way over all other vessels.',
          difficulty: 'medium'
        },
        {
          id: 'irpcs_010',
          module: 'irpcs',
          question: 'What is the give-way vessel in a vessel meeting a vessel not under command?',
          image: 'irpcs_010.svg',
          options: [
            'The vessel not under command',
            'The other vessel',
            'The vessel to starboard',
            'The vessel to port'
          ],
          correctAnswer: 1,
          explanation: 'When meeting a vessel not under command, the other vessel is the give-way vessel and must keep clear.',
          difficulty: 'medium'
        }
      ],
      weather: [
        {
          id: 'weather_001',
          module: 'weather',
          question: 'What does a falling barometer indicate?',
          image: 'weather_001.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 1,
          explanation: 'A falling barometer indicates deteriorating weather, often associated with approaching low pressure systems and storms.',
          difficulty: 'easy'
        },
        {
          id: 'weather_002',
          module: 'weather',
          question: 'What does a rising barometer indicate?',
          image: 'weather_002.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 0,
          explanation: 'A rising barometer indicates improving weather, often associated with high pressure systems and fair conditions.',
          difficulty: 'easy'
        },
        {
          id: 'weather_003',
          module: 'weather',
          question: 'What does a steady barometer indicate?',
          image: 'weather_003.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 2,
          explanation: 'A steady barometer indicates stable weather conditions with no significant changes expected.',
          difficulty: 'easy'
        },
        {
          id: 'weather_004',
          module: 'weather',
          question: 'What does a rapidly falling barometer indicate?',
          image: 'weather_004.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 1,
          explanation: 'A rapidly falling barometer indicates rapidly deteriorating weather, often associated with severe storms and strong winds.',
          difficulty: 'medium'
        },
        {
          id: 'weather_005',
          module: 'weather',
          question: 'What does a rapidly rising barometer indicate?',
          image: 'weather_005.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 0,
          explanation: 'A rapidly rising barometer indicates rapidly improving weather, often associated with clearing skies and fair conditions.',
          difficulty: 'medium'
        },
        {
          id: 'weather_006',
          module: 'weather',
          question: 'What does a slowly falling barometer indicate?',
          image: 'weather_006.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 1,
          explanation: 'A slowly falling barometer indicates slowly deteriorating weather, often associated with approaching weather systems.',
          difficulty: 'medium'
        },
        {
          id: 'weather_007',
          module: 'weather',
          question: 'What does a slowly rising barometer indicate?',
          image: 'weather_007.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 0,
          explanation: 'A slowly rising barometer indicates slowly improving weather, often associated with clearing conditions.',
          difficulty: 'medium'
        },
        {
          id: 'weather_008',
          module: 'weather',
          question: 'What does a fluctuating barometer indicate?',
          image: 'weather_008.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'Unstable weather'
          ],
          correctAnswer: 3,
          explanation: 'A fluctuating barometer indicates unstable weather conditions with rapid changes and unpredictable conditions.',
          difficulty: 'medium'
        },
        {
          id: 'weather_009',
          module: 'weather',
          question: 'What does a high barometer reading indicate?',
          image: 'weather_009.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 0,
          explanation: 'A high barometer reading indicates improving weather, often associated with high pressure systems and fair conditions.',
          difficulty: 'easy'
        },
        {
          id: 'weather_010',
          module: 'weather',
          question: 'What does a low barometer reading indicate?',
          image: 'weather_010.svg',
          options: [
            'Improving weather',
            'Deteriorating weather',
            'Stable weather',
            'No change in weather'
          ],
          correctAnswer: 1,
          explanation: 'A low barometer reading indicates deteriorating weather, often associated with low pressure systems and storms.',
          difficulty: 'easy'
        }
      ],
      safety: [
        {
          id: 'safety_001',
          module: 'safety',
          question: 'What is the minimum number of lifejackets required on board?',
          image: 'safety_001.svg',
          options: [
            'One per person',
            'Two per person',
            'One per person plus one spare',
            'Two per person plus one spare'
          ],
          correctAnswer: 0,
          explanation: 'The minimum number of lifejackets required on board is one per person, ensuring everyone has access to a lifejacket.',
          difficulty: 'easy'
        },
        {
          id: 'safety_002',
          module: 'safety',
          question: 'What is the minimum number of fire extinguishers required on board?',
          image: 'safety_002.svg',
          options: [
            'One',
            'Two',
            'Three',
            'Four'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of fire extinguishers required on board is two, providing adequate fire protection.',
          difficulty: 'easy'
        },
        {
          id: 'safety_003',
          module: 'safety',
          question: 'What is the minimum number of flares required on board?',
          image: 'safety_003.svg',
          options: [
            'Two',
            'Four',
            'Six',
            'Eight'
          ],
          correctAnswer: 2,
          explanation: 'The minimum number of flares required on board is six, providing adequate signaling capability in emergencies.',
          difficulty: 'easy'
        },
        {
          id: 'safety_004',
          module: 'safety',
          question: 'What is the minimum number of lifebuoys required on board?',
          image: 'safety_004.svg',
          options: [
            'One',
            'Two',
            'Three',
            'Four'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of lifebuoys required on board is two, providing adequate rescue capability.',
          difficulty: 'easy'
        },
        {
          id: 'safety_005',
          module: 'safety',
          question: 'What is the minimum number of first aid kits required on board?',
          image: 'safety_005.svg',
          options: [
            'One',
            'Two',
            'Three',
            'Four'
          ],
          correctAnswer: 0,
          explanation: 'The minimum number of first aid kits required on board is one, providing basic medical supplies.',
          difficulty: 'easy'
        },
        {
          id: 'safety_006',
          module: 'safety',
          question: 'What is the minimum number of bilge pumps required on board?',
          image: 'safety_006.svg',
          options: [
            'One',
            'Two',
            'Three',
            'Four'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of bilge pumps required on board is two, providing adequate water removal capability.',
          difficulty: 'easy'
        },
        {
          id: 'safety_007',
          module: 'safety',
          question: 'What is the minimum number of anchors required on board?',
          image: 'safety_007.svg',
          options: [
            'One',
            'Two',
            'Three',
            'Four'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of anchors required on board is two, providing adequate anchoring capability.',
          difficulty: 'easy'
        },
        {
          id: 'safety_008',
          module: 'safety',
          question: 'What is the minimum number of ropes required on board?',
          image: 'safety_008.svg',
          options: [
            'Two',
            'Four',
            'Six',
            'Eight'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of ropes required on board is four, providing adequate mooring and anchoring capability.',
          difficulty: 'easy'
        },
        {
          id: 'safety_009',
          module: 'safety',
          question: 'What is the minimum number of fenders required on board?',
          image: 'safety_009.svg',
          options: [
            'Two',
            'Four',
            'Six',
            'Eight'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of fenders required on board is four, providing adequate protection when mooring.',
          difficulty: 'easy'
        },
        {
          id: 'safety_010',
          module: 'safety',
          question: 'What is the minimum number of navigation lights required on board?',
          image: 'safety_010.svg',
          options: [
            'Two',
            'Four',
            'Six',
            'Eight'
          ],
          correctAnswer: 1,
          explanation: 'The minimum number of navigation lights required on board is four, providing adequate visibility at night.',
          difficulty: 'easy'
        }
      ],
};
