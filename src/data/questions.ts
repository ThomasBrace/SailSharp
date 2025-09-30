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
    },
    {
      "id": "nautical_001",
      "module": "nautical_terms",
      "question": "What does the term 'port' refer to on a boat?",
      "image": "nautical_001.svg",
      "options": [
        "Left side of the vessel when facing forward",
        "Right side of the vessel when facing forward",
        "Back of the vessel",
        "Front of the vessel"
      ],
      "correctAnswer": 0,
      "explanation": "Port is the left-hand side of the vessel when facing forward towards the bow.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_002",
      "module": "nautical_terms",
      "question": "What does 'starboard' mean?",
      "image": "nautical_002.svg",
      "options": [
        "Right side of the vessel when facing forward",
        "Left side of the vessel when facing forward",
        "Rear of the vessel",
        "Front of the vessel"
      ],
      "correctAnswer": 0,
      "explanation": "Starboard refers to the right-hand side of the vessel when facing the bow.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_003",
      "module": "nautical_terms",
      "question": "What is the 'bow' of a boat?",
      "image": "nautical_003.svg",
      "options": [
        "The front of the boat",
        "The rear of the boat",
        "The side of the boat",
        "The mast"
      ],
      "correctAnswer": 0,
      "explanation": "The bow is the forward or front end of the boat.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_004",
      "module": "nautical_terms",
      "question": "What is the 'stern' of a vessel?",
      "image": "nautical_004.svg",
      "options": [
        "The back of the boat",
        "The front of the boat",
        "The mast",
        "The hull bottom"
      ],
      "correctAnswer": 0,
      "explanation": "The stern refers to the rear or aft part of the boat.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_005",
      "module": "nautical_terms",
      "question": "What does 'beam' refer to on a boat?",
      "image": "nautical_005.svg",
      "options": [
        "The widest part of the vessel",
        "The mast height",
        "The hull depth",
        "The sail area"
      ],
      "correctAnswer": 0,
      "explanation": "Beam is the widest part of a vessel from one side to the other.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_006",
      "module": "nautical_terms",
      "question": "What is the 'draft' of a boat?",
      "image": "nautical_006.svg",
      "options": [
        "Vertical distance from waterline to bottom of hull",
        "Length of the boat",
        "Height of the mast",
        "Width of the boat"
      ],
      "correctAnswer": 0,
      "explanation": "Draft is the vertical distance between the waterline and the lowest part of the hull or keel.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_007",
      "module": "nautical_terms",
      "question": "What does 'helm' refer to?",
      "image": "nautical_007.svg",
      "options": [
        "The steering mechanism of the boat",
        "The anchor",
        "The sails",
        "The hull bottom"
      ],
      "correctAnswer": 0,
      "explanation": "The helm is the wheel or tiller used to steer the boat.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_008",
      "module": "nautical_terms",
      "question": "What is a 'keel'?",
      "image": "nautical_008.svg",
      "options": [
        "Structural backbone of the boat along the bottom",
        "Top of the mast",
        "Rudder",
        "Sail boom"
      ],
      "correctAnswer": 0,
      "explanation": "The keel is the main structural element along the bottom of the hull providing stability.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_009",
      "module": "nautical_terms",
      "question": "What is a 'tiller' used for?",
      "image": "nautical_009.svg",
      "options": [
        "To steer the boat",
        "To anchor",
        "To hoist sails",
        "To measure depth"
      ],
      "correctAnswer": 0,
      "explanation": "A tiller is a lever attached to the rudder for steering the boat manually.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_010",
      "module": "nautical_terms",
      "question": "What is the purpose of a 'cleat' on a boat?",
      "image": "nautical_010.svg",
      "options": [
        "To secure ropes",
        "To steer the boat",
        "To measure wind",
        "To attach sails"
      ],
      "correctAnswer": 0,
      "explanation": "A cleat is a fitting where ropes are fastened to secure sails, mooring lines, or other equipment.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_011",
      "module": "nautical_terms",
      "question": "What is a 'boom' on a sailing boat?",
      "image": "nautical_011.svg",
      "options": [
        "Horizontal spar along the bottom of a sail",
        "Vertical mast",
        "Rudder",
        "Anchor line"
      ],
      "correctAnswer": 0,
      "explanation": "The boom holds the bottom of a sail and allows it to pivot during sailing maneuvers.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_012",
      "module": "nautical_terms",
      "question": "What does 'shrouds' refer to?",
      "image": "nautical_012.svg",
      "options": [
        "Wires or ropes supporting the mast sideways",
        "Ropes to raise sails",
        "Rudder cables",
        "Anchor chains"
      ],
      "correctAnswer": 0,
      "explanation": "Shrouds are stays on the sides of the mast that provide lateral support.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_013",
      "module": "nautical_terms",
      "question": "What is a 'forestay'?",
      "image": "nautical_013.svg",
      "options": [
        "Cable supporting the mast from bow",
        "Wire holding boom",
        "Rudder attachment",
        "Anchor rope"
      ],
      "correctAnswer": 0,
      "explanation": "A forestay runs from the top of the mast to the bow to support the mast forward.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_014",
      "module": "nautical_terms",
      "question": "What is a 'sheet' on a sailing boat?",
      "image": "nautical_014.svg",
      "options": [
        "Rope controlling the angle of a sail",
        "Anchor line",
        "Mast support",
        "Steering rope"
      ],
      "correctAnswer": 0,
      "explanation": "Sheets are lines used to control the trim and angle of sails relative to the wind.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_015",
      "module": "nautical_terms",
      "question": "What does 'tacking' mean?",
      "image": "nautical_015.svg",
      "options": [
        "Turning the bow through the wind",
        "Reversing the rudder",
        "Lowering sails",
        "Anchoring"
      ],
      "correctAnswer": 0,
      "explanation": "Tacking is sailing the bow through the wind to change direction relative to the wind.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_016",
      "module": "nautical_terms",
      "question": "What does 'gybing' mean?",
      "image": "nautical_016.svg",
      "options": [
        "Turning the stern through the wind",
        "Turning the bow through the wind",
        "Anchoring",
        "Hoisting the sail"
      ],
      "correctAnswer": 0,
      "explanation": "Gybing is turning the stern through the wind, typically when running downwind.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_017",
      "module": "nautical_terms",
      "question": "What is a 'winch' used for?",
      "image": "nautical_017.svg",
      "options": [
        "To haul in or adjust ropes under load",
        "To steer the boat",
        "To anchor",
        "To measure depth"
      ],
      "correctAnswer": 0,
      "explanation": "Winches provide mechanical advantage for trimming sails or hauling lines under load.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_018",
      "module": "nautical_terms",
      "question": "What is the 'cockpit' of a boat?",
      "image": "nautical_018.svg",
      "options": [
        "Area where the helm and crew operate",
        "Cabin below deck",
        "Foredeck",
        "Storage locker"
      ],
      "correctAnswer": 0,
      "explanation": "The cockpit is the area from which the boat is steered and sails are managed.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_019",
      "module": "nautical_terms",
      "question": "What is the 'keelson'?",
      "image": "nautical_019.svg",
      "options": [
        "Internal structure along the keel for strength",
        "External keel",
        "Mast support",
        "Rudder attachment"
      ],
      "correctAnswer": 0,
      "explanation": "The keelson is a longitudinal internal beam reinforcing the keel and hull.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_020",
      "module": "nautical_terms",
      "question": "What does 'fairlead' mean?",
      "image": "nautical_020.svg",
      "options": [
        "Guide for ropes to prevent chafing",
        "Steering mechanism",
        "Anchor attachment",
        "Mast fitting"
      ],
      "correctAnswer": 0,
      "explanation": "Fairleads guide ropes and prevent friction or chafing when pulling lines.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_021",
      "module": "nautical_terms",
      "question": "What is a 'pulpit' on a boat?",
      "image": "nautical_021.svg",
      "options": [
        "Guardrail at bow or stern",
        "Raised deck area",
        "Cockpit seat",
        "Anchor platform"
      ],
      "correctAnswer": 0,
      "explanation": "The pulpit is a safety rail at the bow or stern to prevent crew from falling overboard.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_022",
      "module": "nautical_terms",
      "question": "What does 'hull' refer to?",
      "image": "nautical_022.svg",
      "options": [
        "Main body of the boat",
        "Sail",
        "Mast",
        "Rudder"
      ],
      "correctAnswer": 0,
      "explanation": "The hull is the main structural body of the boat that provides buoyancy.",
      "difficulty": "easy"
    },
    {
      "id": "nautical_023",
      "module": "nautical_terms",
      "question": "What is a 'dodger'?",
      "image": "nautical_023.svg",
      "options": [
        "Canvas or rigid screen for cockpit protection",
        "Type of sail",
        "Anchor type",
        "Deck hatch"
      ],
      "correctAnswer": 0,
      "explanation": "A dodger protects the cockpit and crew from wind and spray.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_024",
      "module": "nautical_terms",
      "question": "What is a 'companionway'?",
      "image": "nautical_024.svg",
      "options": [
        "Stairway or ladder to cabin",
        "Mast step",
        "Deck hatch",
        "Cockpit seat"
      ],
      "correctAnswer": 0,
      "explanation": "The companionway is the entry point from the deck to the cabin below.",
      "difficulty": "medium"
    },
    {
      "id": "nautical_025",
      "module": "nautical_terms",
      "question": "What does 'leeward' mean?",
      "image": "nautical_025.svg",
      "options": [
        "Side sheltered from the wind",
        "Windward side",
        "Front of the boat",
        "Rear of the boat"
      ],
      "correctAnswer": 0,
      "explanation": "Leeward is the side of the boat away from the wind and sheltered from it.",
      "difficulty": "medium"
    },
        {
          "id": "nautical_026",
          "module": "nautical_terms",
          "question": "What does 'windward' mean?",
          "image": "nautical_026.svg",
          "options": [
            "Side facing the wind",
            "Side sheltered from wind",
            "Bow of the boat",
            "Stern of the boat"
          ],
          "correctAnswer": 0,
          "explanation": "Windward is the side of the boat that faces the oncoming wind.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_027",
          "module": "nautical_terms",
          "question": "What is a 'backstay'?",
          "image": "nautical_027.svg",
          "options": [
            "Wire supporting the mast from aft",
            "Horizontal spar",
            "Rope to anchor",
            "Safety line"
          ],
          "correctAnswer": 0,
          "explanation": "The backstay runs from the top of the mast to the stern to support the mast backward.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_028",
          "module": "nautical_terms",
          "question": "What is a 'preventer' used for?",
          "image": "nautical_028.svg",
          "options": [
            "To prevent accidental gybe of the boom",
            "To anchor quickly",
            "To secure the tiller",
            "To support the mast"
          ],
          "correctAnswer": 0,
          "explanation": "A preventer line reduces the risk of the boom swinging dangerously during a gybe.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_029",
          "module": "nautical_terms",
          "question": "What is a 'sail track'?",
          "image": "nautical_029.svg",
          "options": [
            "Guide for sail slides on mast",
            "Rope for anchoring",
            "Rudder control",
            "Deck fitting"
          ],
          "correctAnswer": 0,
          "explanation": "A sail track allows the sail slides to move up and down the mast smoothly.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_030",
          "module": "nautical_terms",
          "question": "What is a 'reef' in sailing?",
          "image": "nautical_030.svg",
          "options": [
            "Partially lowering a sail to reduce area",
            "Rope line on deck",
            "Anchor point",
            "Type of hull"
          ],
          "correctAnswer": 0,
          "explanation": "Reefing reduces sail area in strong winds to maintain control and safety.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_031",
          "module": "nautical_terms",
          "question": "What is a 'telltale'?",
          "image": "nautical_031.svg",
          "options": [
            "Small ribbon indicating airflow over a sail",
            "Navigation light",
            "Rope stop",
            "Rudder handle"
          ],
          "correctAnswer": 0,
          "explanation": "Telltales help sailors trim sails correctly by showing wind direction over the sail.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_032",
          "module": "nautical_terms",
          "question": "What does 'luffing' mean?",
          "image": "nautical_032.svg",
          "options": [
            "Sail flaps when pointing too close to wind",
            "Rudder turned sharply",
            "Anchor dragging",
            "Boom swinging"
          ],
          "correctAnswer": 0,
          "explanation": "Luffing occurs when the sail is not filled properly due to pointing too close to the wind.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_033",
          "module": "nautical_terms",
          "question": "What is a 'hatch'?",
          "image": "nautical_033.svg",
          "options": [
            "Opening in deck to cabin",
            "Deck fitting for cleat",
            "Sail attachment",
            "Rudder guide"
          ],
          "correctAnswer": 0,
          "explanation": "Hatches provide access to below-deck areas or storage compartments.",
          "difficulty": "easy"
        },
        {
          "id": "nautical_034",
          "module": "nautical_terms",
          "question": "What is a 'spinnaker'?",
          "image": "nautical_034.svg",
          "options": [
            "Large sail used when sailing downwind",
            "Small jib",
            "Anchor type",
            "Mast support"
          ],
          "correctAnswer": 0,
          "explanation": "A spinnaker is a lightweight sail designed for downwind sailing to maximize speed.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_035",
          "module": "nautical_terms",
          "question": "What is the 'foot' of a sail?",
          "image": "nautical_035.svg",
          "options": [
            "Bottom edge of the sail",
            "Top of the mast",
            "Side of the sail",
            "Boom end"
          ],
          "correctAnswer": 0,
          "explanation": "The foot is the lower edge of the sail that runs along the boom or deck.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_036",
          "module": "nautical_terms",
          "question": "What is the 'head' of a sail?",
          "image": "nautical_036.svg",
          "options": [
            "Top corner of the sail",
            "Bottom edge",
            "Side edge",
            "Boom attachment"
          ],
          "correctAnswer": 0,
          "explanation": "The head is the top corner of the sail where it is hoisted to the mast.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_037",
          "module": "nautical_terms",
          "question": "What is the 'clew' of a sail?",
          "image": "nautical_037.svg",
          "options": [
            "Lower aft corner of the sail",
            "Top corner",
            "Mast attachment",
            "Deck fitting"
          ],
          "correctAnswer": 0,
          "explanation": "The clew is the aft bottom corner of a sail, often attached to a sheet for control.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_038",
          "module": "nautical_terms",
          "question": "What is the 'luff' of a sail?",
          "image": "nautical_038.svg",
          "options": [
            "Leading edge of a sail",
            "Trailing edge",
            "Bottom edge",
            "Boom attachment"
          ],
          "correctAnswer": 0,
          "explanation": "The luff is the front edge of a sail that faces the wind when sailing.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_039",
          "module": "nautical_terms",
          "question": "What is a 'lazy sheet'?",
          "image": "nautical_039.svg",
          "options": [
            "Sheet not currently under load",
            "Main sheet controlling sail",
            "Anchor line",
            "Rudder cable"
          ],
          "correctAnswer": 0,
          "explanation": "A lazy sheet is the line of a sail that is not actively trimmed during a tack or gybe.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_040",
          "module": "nautical_terms",
          "question": "What is a 'backstay adjuster' used for?",
          "image": "nautical_040.svg",
          "options": [
            "To tension the backstay for mast support",
            "To control rudder",
            "To raise anchor",
            "To trim mainsail"
          ],
          "correctAnswer": 0,
          "explanation": "Adjusting the backstay changes mast bend and sail shape, affecting performance.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_041",
          "module": "nautical_terms",
          "question": "What is a 'jackline'?",
          "image": "nautical_041.svg",
          "options": [
            "Line running along deck for clipping harness",
            "Sheet controlling jib",
            "Rudder control",
            "Boom preventer"
          ],
          "correctAnswer": 0,
          "explanation": "Jacklines allow crew to move safely on deck while clipped into a harness.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_042",
          "module": "nautical_terms",
          "question": "What is a 'spreader'?",
          "image": "nautical_042.svg",
          "options": [
            "Horizontal strut supporting mast shrouds",
            "Anchor point",
            "Sail attachment",
            "Rudder fitting"
          ],
          "correctAnswer": 0,
          "explanation": "Spreaders push shrouds away from the mast to support it and distribute load.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_043",
          "module": "nautical_terms",
          "question": "What is a 'turnbuckle' used for?",
          "image": "nautical_043.svg",
          "options": [
            "To adjust tension in rigging",
            "To control rudder",
            "To fasten sails",
            "To anchor the boat"
          ],
          "correctAnswer": 0,
          "explanation": "Turnbuckles are used to tighten or loosen shrouds and stays for correct mast tension.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_044",
          "module": "nautical_terms",
          "question": "What is a 'bosun’s chair'?",
          "image": "nautical_044.svg",
          "options": [
            "Seat for hoisting a person up the mast",
            "Anchor platform",
            "Sail tie",
            "Rudder control"
          ],
          "correctAnswer": 0,
          "explanation": "A bosun’s chair is a seat used to safely lift someone up the mast for maintenance.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_045",
          "module": "nautical_terms",
          "question": "What is the 'thwart' on a small boat?",
          "image": "nautical_045.svg",
          "options": [
            "Seat or crosspiece",
            "Mast support",
            "Rudder attachment",
            "Deck fitting"
          ],
          "correctAnswer": 0,
          "explanation": "Thwarts are seats or structural crosspieces in small boats.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_046",
          "module": "nautical_terms",
          "question": "What is a 'fairlead block'?",
          "image": "nautical_046.svg",
          "options": [
            "Pulley to guide ropes",
            "Anchor point",
            "Mast fitting",
            "Rudder control"
          ],
          "correctAnswer": 0,
          "explanation": "Fairlead blocks help guide ropes and prevent chafing or rubbing.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_047",
          "module": "nautical_terms",
          "question": "What is the 'hull speed' of a boat?",
          "image": "nautical_047.svg",
          "options": [
            "Maximum theoretical speed based on waterline length",
            "Speed of engine",
            "Wind speed over sails",
            "Rudder rotation speed"
          ],
          "correctAnswer": 0,
          "explanation": "Hull speed is calculated from the waterline length and represents the theoretical speed limit of a displacement hull.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_048",
          "module": "nautical_terms",
          "question": "What is a 'toe rail'?",
          "image": "nautical_048.svg",
          "options": [
            "Raised edge along deck for footing and safety",
            "Anchor attachment",
            "Rudder guide",
            "Sail attachment"
          ],
          "correctAnswer": 0,
          "explanation": "Toe rails prevent feet from slipping overboard and provide something to brace against.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_049",
          "module": "nautical_terms",
          "question": "What is a 'backstay adjuster'?",
          "image": "nautical_049.svg",
          "options": [
            "Device to tension the backstay",
            "Rudder handle",
            "Anchor line",
            "Boom fitting"
          ],
          "correctAnswer": 0,
          "explanation": "It allows sailors to adjust the tension on the backstay, affecting mast bend and sail shape.",
          "difficulty": "medium"
        },
        {
          "id": "nautical_050",
          "module": "nautical_terms",
          "question": "What is a 'sprayhood'?",
          "image": "nautical_050.svg",
          "options": [
            "Canvas cover to protect cockpit from spray",
            "Sail type",
            "Deck fitting",
            "Rudder cover"
          ],
          "correctAnswer": 0,
          "explanation": "Sprayhoods shield the cockpit and crew from wind and water spray while sailing.",
          "difficulty": "medium"
        },
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
      {
        "id": "chart_001",
        "module": "chart_symbols",
        "question": "What does a lighthouse symbol on a chart indicate?",
        "image": "chart_001.svg",
        "options": [
          "A navigational light",
          "A port",
          "A marina",
          "A wreck"
        ],
        "correctAnswer": 0,
        "explanation": "A lighthouse symbol indicates a navigational light structure, often on land or a prominent headland.",
        "difficulty": "easy"
      },
      {
        "id": "chart_002",
        "module": "chart_symbols",
        "question": "What symbol represents a wreck that is always submerged?",
        "image": "chart_002.svg",
        "options": [
          "Crossed anchors",
          "Asterisks",
          "A small black dot with a cross",
          "Circle with a dot"
        ],
        "correctAnswer": 2,
        "explanation": "A wreck always submerged is shown as a small black dot with a cross on nautical charts.",
        "difficulty": "medium"
      },
      {
        "id": "chart_003",
        "module": "chart_symbols",
        "question": "How is a marina depicted on a chart?",
        "image": "chart_003.svg",
        "options": [
          "Anchor symbol",
          "White rectangle",
          "Black triangle",
          "Blue square"
        ],
        "correctAnswer": 0,
        "explanation": "A marina or anchorage area is usually depicted with an anchor symbol.",
        "difficulty": "easy"
      },
      {
        "id": "chart_004",
        "module": "chart_symbols",
        "question": "What does a depth contour line indicate?",
        "image": "chart_004.svg",
        "options": [
          "Depth of water along that line",
          "Location of hazards",
          "Tidal streams",
          "Buoy positions"
        ],
        "correctAnswer": 0,
        "explanation": "Depth contour lines (isobaths) connect points of equal depth.",
        "difficulty": "easy"
      },
      {
        "id": "chart_005",
        "module": "chart_symbols",
        "question": "How are rocks that are exposed at low water shown?",
        "image": "chart_005.svg",
        "options": [
          "Black X",
          "Small black asterisk",
          "Dot",
          "Triangle"
        ],
        "correctAnswer": 1,
        "explanation": "Rocks awash or exposed at low water are shown with a small black asterisk.",
        "difficulty": "medium"
      },
      {
        "id": "chart_006",
        "module": "chart_symbols",
        "question": "How is a sandbank depicted on a chart?",
        "image": "chart_006.svg",
        "options": [
          "Shaded area with dots",
          "Crossed anchors",
          "Dashed line",
          "Triangle symbol"
        ],
        "correctAnswer": 0,
        "explanation": "Sandbanks are shown as shaded areas with small dots or stippling to indicate the type of seabed.",
        "difficulty": "medium"
      },
      {
        "id": "chart_007",
        "module": "chart_symbols",
        "question": "What does a light beacon symbol indicate?",
        "image": "chart_007.svg",
        "options": [
          "A navigational mark showing light",
          "A buoy",
          "A port",
          "An anchorage"
        ],
        "correctAnswer": 0,
        "explanation": "A light beacon is a fixed navigational mark with a light characteristic.",
        "difficulty": "easy"
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
        "explanation": "A black and yellow striped buoy with two black cones pointing downward is a south cardinal mark, indicating safe water to the south.",
        "difficulty": "medium"
      },
      {
        "id": "chart_009",
        "module": "chart_symbols",
        "question": "How is a dangerous wreck indicated on a chart?",
        "image": "chart_009.svg",
        "options": [
          "Crossed anchors",
          "Small black cross",
          "Circle with a dot",
          "Black X"
        ],
        "correctAnswer": 3,
        "explanation": "Dangerous wrecks are indicated with a black X on the chart.",
        "difficulty": "medium"
      },
      {
        "id": "chart_010",
        "module": "chart_symbols",
        "question": "What does a magenta dashed line represent on a chart?",
        "image": "chart_010.svg",
        "options": [
          "Traffic separation scheme",
          "Safe water mark",
          "Depth contour",
          "Buoyage boundary"
        ],
        "correctAnswer": 0,
        "explanation": "Magenta dashed lines are used to mark traffic separation schemes on charts.",
        "difficulty": "medium"
      },
      {
        "id": "chart_011",
        "module": "chart_symbols",
        "question": "How are overhead cables shown on a chart?",
        "image": "chart_011.svg",
        "options": [
          "Dashed line with height annotation",
          "Solid line",
          "Circle",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Overhead cables are depicted with dashed lines and the air draught height indicated.",
        "difficulty": "medium"
      },
      {
        "id": "chart_012",
        "module": "chart_symbols",
        "question": "What symbol is used for a bridge on a chart?",
        "image": "chart_012.svg",
        "options": [
          "Two parallel lines",
          "Solid rectangle",
          "Black dot",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Bridges are shown as two parallel lines across a channel, often with height annotations.",
        "difficulty": "medium"
      },
      {
        "id": "chart_013",
        "module": "chart_symbols",
        "question": "What colour represents shallow water on a chart?",
        "image": "chart_013.svg",
        "options": [
          "Blue",
          "Green",
          "Yellow",
          "White"
        ],
        "correctAnswer": 0,
        "explanation": "Shallow water is usually shown in blue, deeper areas are white.",
        "difficulty": "easy"
      },
      {
        "id": "chart_014",
        "module": "chart_symbols",
        "question": "How is a rock awash at high water shown on a chart?",
        "image": "chart_014.svg",
        "options": [
          "Black dot",
          "Small black cross",
          "Circle",
          "Triangle"
        ],
        "correctAnswer": 1,
        "explanation": "Rocks awash at high water are shown as a small black cross.",
        "difficulty": "medium"
      },
      {
        "id": "chart_015",
        "module": "chart_symbols",
        "question": "What does a magenta circle with a dot in the centre indicate?",
        "image": "chart_015.svg",
        "options": [
          "Isolated danger mark",
          "Safe water mark",
          "Port-hand buoy",
          "Special mark"
        ],
        "correctAnswer": 1,
        "explanation": "A magenta circle with a dot in the centre indicates a safe water mark on charts.",
        "difficulty": "medium"
      },
      {
        "id": "chart_016",
        "module": "chart_symbols",
        "question": "How is a light vessel shown on a chart?",
        "image": "chart_016.svg",
        "options": [
          "Anchor symbol with light annotation",
          "Black dot",
          "Triangle",
          "Circle"
        ],
        "correctAnswer": 0,
        "explanation": "Light vessels are depicted with an anchor symbol and a light characteristic annotation.",
        "difficulty": "medium"
      },
      {
        "id": "chart_017",
        "module": "chart_symbols",
        "question": "What symbol shows an area where anchoring is prohibited?",
        "image": "chart_017.svg",
        "options": [
          "Anchoring prohibited symbol",
          "Crossed anchors",
          "Black dot",
          "Blue square"
        ],
        "correctAnswer": 0,
        "explanation": "Anchoring prohibited areas are marked with a symbol resembling an anchor with a line through it.",
        "difficulty": "medium"
      },
      {
        "id": "chart_018",
        "module": "chart_symbols",
        "question": "How is a submarine cable indicated?",
        "image": "chart_018.svg",
        "options": [
          "Dashed line with annotation",
          "Solid line",
          "Black dot",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Submarine cables are shown as dashed lines with the annotation 'CABLE'.",
        "difficulty": "medium"
      },
      {
        "id": "chart_019",
        "module": "chart_symbols",
        "question": "What symbol indicates a port or harbour?",
        "image": "chart_019.svg",
        "options": [
          "Solid rectangle",
          "Anchor symbol",
          "Black dot",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Ports and harbours are represented by solid rectangles or filled shapes.",
        "difficulty": "easy"
      },
      {
        "id": "chart_020",
        "module": "chart_symbols",
        "question": "What symbol shows an overhead obstruction such as a bridge or power line?",
        "image": "chart_020.svg",
        "options": [
          "Dashed line with height",
          "Solid line",
          "Black dot",
          "Circle"
        ],
        "correctAnswer": 0,
        "explanation": "Overhead obstructions are shown with dashed lines and the vertical clearance indicated.",
        "difficulty": "medium"
      },
      {
        "id": "chart_021",
        "module": "chart_symbols",
        "question": "What is indicated by a triangle with a number inside on a chart?",
        "image": "chart_021.svg",
        "options": [
          "Height of lighthouse or beacon",
          "Depth of water",
          "Port number",
          "Buoy number"
        ],
        "correctAnswer": 0,
        "explanation": "Triangles with numbers indicate height of lights, beacons, or landmarks.",
        "difficulty": "medium"
      },
      {
        "id": "chart_022",
        "module": "chart_symbols",
        "question": "How is an area of rocks that dries at low water shown?",
        "image": "chart_022.svg",
        "options": [
          "Black X",
          "Asterisk",
          "Circle",
          "Triangle"
        ],
        "correctAnswer": 1,
        "explanation": "Rocks that dry at low water are shown as an asterisk or small star symbol.",
        "difficulty": "medium"
      },
      {
        "id": "chart_023",
        "module": "chart_symbols",
        "question": "How are tidal streams often represented on a chart?",
        "image": "chart_023.svg",
        "options": [
          "Arrows with speed annotation",
          "Dashed line",
          "Solid line",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Tidal streams are depicted with arrows indicating direction and speed annotation.",
        "difficulty": "medium"
      },
      {
        "id": "chart_024",
        "module": "chart_symbols",
        "question": "What symbol indicates a marina or yacht haven?",
        "image": "chart_024.svg",
        "options": [
          "Anchor symbol",
          "Black dot",
          "Triangle",
          "Solid rectangle"
        ],
        "correctAnswer": 0,
        "explanation": "Marinas are shown with an anchor symbol on charts.",
        "difficulty": "easy"
      },
      {
        "id": "chart_025",
        "module": "chart_symbols",
        "question": "How are buoys depicted on charts?",
        "image": "chart_025.svg",
        "options": [
          "Circle with topmark annotation",
          "Triangle",
          "Solid rectangle",
          "Black dot"
        ],
        "correctAnswer": 0,
        "explanation": "Buoys are represented as circles with annotations showing type and characteristics.",
        "difficulty": "medium"
      },
      {
        "id": "chart_026",
        "module": "chart_symbols",
        "question": "What does a red and white vertical striped buoy indicate?",
        "image": "chart_026.svg",
        "options": [
          "Safe water mark",
          "Port-hand buoy",
          "Isolated danger mark",
          "Starboard-hand buoy"
        ],
        "correctAnswer": 2,
        "explanation": "Red and white vertical striped buoys indicate an isolated danger mark.",
        "difficulty": "medium"
      },
      {
        "id": "chart_027",
        "module": "chart_symbols",
        "question": "How is a safe water mark represented on a chart?",
        "image": "chart_027.svg",
        "options": [
          "Red and white vertical stripes",
          "Red and white horizontal stripes",
          "Black and yellow vertical stripes",
          "Blue circle"
        ],
        "correctAnswer": 1,
        "explanation": "Safe water marks are depicted with red and white horizontal stripes, indicating navigable water all around.",
        "difficulty": "medium"
      },
      {
        "id": "chart_028",
        "module": "chart_symbols",
        "question": "Which symbol indicates a port-hand lateral buoy?",
        "image": "chart_028.svg",
        "options": [
          "Red cylinder or pillar",
          "Green cone",
          "Red and white stripes",
          "Yellow diamond"
        ],
        "correctAnswer": 0,
        "explanation": "Port-hand buoys are red and cylindrical or pillar-shaped, marking the left-hand side of a channel when entering from sea.",
        "difficulty": "easy"
      },
      {
        "id": "chart_029",
        "module": "chart_symbols",
        "question": "Which symbol indicates a starboard-hand lateral buoy?",
        "image": "chart_029.svg",
        "options": [
          "Green cone",
          "Red cylinder",
          "Black X",
          "Yellow triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Starboard-hand buoys are green and conical, marking the right-hand side of a channel when entering from sea.",
        "difficulty": "easy"
      },
      {
        "id": "chart_030",
        "module": "chart_symbols",
        "question": "What does a yellow special mark indicate?",
        "image": "chart_030.svg",
        "options": [
          "Special purpose or caution",
          "Port-hand side",
          "Starboard-hand side",
          "Isolated danger"
        ],
        "correctAnswer": 0,
        "explanation": "Yellow special marks indicate areas of special caution or purpose, such as pipelines or spoil grounds.",
        "difficulty": "medium"
      },
      {
        "id": "chart_031",
        "module": "chart_symbols",
        "question": "How is a rock that is submerged shown on a chart?",
        "image": "chart_031.svg",
        "options": [
          "Black X",
          "Small black dot with cross",
          "Circle",
          "Triangle"
        ],
        "correctAnswer": 1,
        "explanation": "Submerged rocks are shown as a small black dot with a cross.",
        "difficulty": "medium"
      },
      {
        "id": "chart_032",
        "module": "chart_symbols",
        "question": "What does a magenta symbol of a shipwreck indicate?",
        "image": "chart_032.svg",
        "options": [
          "Dangerous wreck",
          "Safe water",
          "Marina",
          "Port"
        ],
        "correctAnswer": 0,
        "explanation": "Magenta shipwreck symbols indicate a wreck, sometimes with details of depth or hazard.",
        "difficulty": "medium"
      },
      {
        "id": "chart_033",
        "module": "chart_symbols",
        "question": "What does a sound signal symbol on a chart indicate?",
        "image": "chart_033.svg",
        "options": [
          "Fog signal",
          "Buoy type",
          "Depth contour",
          "Port entrance"
        ],
        "correctAnswer": 0,
        "explanation": "A sound signal symbol shows that a fog signal or audible warning exists at that location.",
        "difficulty": "medium"
      },
      {
        "id": "chart_034",
        "module": "chart_symbols",
        "question": "How are tidal diamonds represented on a chart?",
        "image": "chart_034.svg",
        "options": [
          "Diamond shape with letter",
          "Circle with dot",
          "Triangle",
          "Black X"
        ],
        "correctAnswer": 0,
        "explanation": "Tidal diamonds are shown as diamond symbols with letters corresponding to tidal stream tables.",
        "difficulty": "medium"
      },
      {
        "id": "chart_035",
        "module": "chart_symbols",
        "question": "How is a cable area depicted on a chart?",
        "image": "chart_035.svg",
        "options": [
          "Dashed line with CABLE annotation",
          "Solid line",
          "Circle",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Submarine cables are marked with a dashed line labeled 'CABLE'.",
        "difficulty": "medium"
      },
      {
        "id": "chart_036",
        "module": "chart_symbols",
        "question": "How are depths shown on a chart?",
        "image": "chart_036.svg",
        "options": [
          "Numbers in metres or feet",
          "Colour only",
          "Dots",
          "Lines"
        ],
        "correctAnswer": 0,
        "explanation": "Depths are shown with numbers in metres or feet, sometimes with contour lines.",
        "difficulty": "easy"
      },
      {
        "id": "chart_037",
        "module": "chart_symbols",
        "question": "What does a small black triangle symbol indicate?",
        "image": "chart_037.svg",
        "options": [
          "Navigational mark on land",
          "Buoy",
          "Rock",
          "Port"
        ],
        "correctAnswer": 0,
        "explanation": "Small black triangles usually represent navigational aids or beacons on land.",
        "difficulty": "medium"
      },
      {
        "id": "chart_038",
        "module": "chart_symbols",
        "question": "How is a beacon indicated on a chart?",
        "image": "chart_038.svg",
        "options": [
          "Triangle or square with annotation",
          "Circle",
          "Solid rectangle",
          "Black X"
        ],
        "correctAnswer": 0,
        "explanation": "Beacons are shown as triangles or squares with annotations describing characteristics.",
        "difficulty": "medium"
      },
      {
        "id": "chart_039",
        "module": "chart_symbols",
        "question": "How are buoys with lights represented?",
        "image": "chart_039.svg",
        "options": [
          "Circle with topmark and light annotation",
          "Triangle",
          "Black dot",
          "Square"
        ],
        "correctAnswer": 0,
        "explanation": "Lighted buoys are represented with a circle and symbols indicating topmarks and light characteristics.",
        "difficulty": "medium"
      },
      {
        "id": "chart_040",
        "module": "chart_symbols",
        "question": "What colour is used for safe water areas?",
        "image": "chart_040.svg",
        "options": [
          "White",
          "Blue",
          "Green",
          "Yellow"
        ],
        "correctAnswer": 0,
        "explanation": "Areas of deep or safe water are usually left white on charts.",
        "difficulty": "easy"
      },
      {
        "id": "chart_041",
        "module": "chart_symbols",
        "question": "How is a drying height indicated?",
        "image": "chart_041.svg",
        "options": [
          "Number next to rock or contour",
          "Triangle",
          "Black dot",
          "Line"
        ],
        "correctAnswer": 0,
        "explanation": "Drying heights are shown with a number next to rocks or shoals, indicating height above chart datum.",
        "difficulty": "medium"
      },
      {
        "id": "chart_042",
        "module": "chart_symbols",
        "question": "What symbol represents a tidal stream direction?",
        "image": "chart_042.svg",
        "options": [
          "Arrow with speed",
          "Circle",
          "Triangle",
          "Black dot"
        ],
        "correctAnswer": 0,
        "explanation": "Tidal stream directions are shown as arrows with numbers indicating speed in knots.",
        "difficulty": "medium"
      },
      {
        "id": "chart_043",
        "module": "chart_symbols",
        "question": "How is a rock that dries at low water indicated?",
        "image": "chart_043.svg",
        "options": [
          "Asterisk",
          "Triangle",
          "Black dot",
          "Circle"
        ],
        "correctAnswer": 0,
        "explanation": "Rocks drying at low water are represented by an asterisk.",
        "difficulty": "medium"
      },
      {
        "id": "chart_044",
        "module": "chart_symbols",
        "question": "What symbol shows a spoil ground or dredged area?",
        "image": "chart_044.svg",
        "options": [
          "Yellow with X or hatching",
          "Black dot",
          "Triangle",
          "Circle"
        ],
        "correctAnswer": 0,
        "explanation": "Spoil grounds or dredged areas are usually yellow with hatching or an X.",
        "difficulty": "medium"
      },
      {
        "id": "chart_045",
        "module": "chart_symbols",
        "question": "How is a prominent landmark indicated?",
        "image": "chart_045.svg",
        "options": [
          "Triangle with height annotation",
          "Circle",
          "Black dot",
          "Square"
        ],
        "correctAnswer": 0,
        "explanation": "Prominent landmarks are shown as triangles with a height annotation for navigation reference.",
        "difficulty": "medium"
      },
      {
        "id": "chart_046",
        "module": "chart_symbols",
        "question": "How are drying banks or flats shown?",
        "image": "chart_046.svg",
        "options": [
          "Cross-hatched or shaded areas",
          "Black dot",
          "Triangle",
          "Circle"
        ],
        "correctAnswer": 0,
        "explanation": "Drying banks are shown by shading or hatching to indicate areas exposed at low tide.",
        "difficulty": "medium"
      },
      {
        "id": "chart_047",
        "module": "chart_symbols",
        "question": "What does a small circle with a letter inside indicate?",
        "image": "chart_047.svg",
        "options": [
          "Tidal diamond",
          "Buoy",
          "Rock",
          "Port"
        ],
        "correctAnswer": 0,
        "explanation": "Tidal diamonds are circles with letters corresponding to tidal stream tables.",
        "difficulty": "medium"
      },
      {
        "id": "chart_048",
        "module": "chart_symbols",
        "question": "How is a power cable on a chart represented?",
        "image": "chart_048.svg",
        "options": [
          "Dashed line with annotation",
          "Solid line",
          "Triangle",
          "Black dot"
        ],
        "correctAnswer": 0,
        "explanation": "Submarine power cables are shown with dashed lines and labeled 'CABLE' or 'POWER'.",
        "difficulty": "medium"
      },
      {
        "id": "chart_049",
        "module": "chart_symbols",
        "question": "What symbol indicates a pilot boarding area?",
        "image": "chart_049.svg",
        "options": [
          "P inside a circle",
          "Anchor symbol",
          "Black dot",
          "Triangle"
        ],
        "correctAnswer": 0,
        "explanation": "Pilot boarding areas are indicated with a 'P' inside a circle or specific symbol.",
        "difficulty": "medium"
      },
      {
        "id": "chart_050",
        "module": "chart_symbols",
        "question": "How is a radar reflector shown on a chart?",
        "image": "chart_050.svg",
        "options": [
          "Triangle or circle with annotation",
          "Black dot",
          "Square",
          "Cross"
        ],
        "correctAnswer": 0,
        "explanation": "Radar reflectors are shown as triangles or circles with an annotation to indicate presence on a buoy or structure.",
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
      },
      {
        "id": "buoyage_001",
        "module": "buoyage",
        "question": "What does a north cardinal mark indicate?",
        "image": "buoyage_001.svg",
        "options": [
          "Safe water to the north",
          "Safe water to the south",
          "Danger to the north",
          "Shallow water to the north"
        ],
        "correctAnswer": 0,
        "explanation": "A north cardinal mark indicates that safe water lies to the north of the buoy.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_002",
        "module": "buoyage",
        "question": "What colour is a south cardinal buoy?",
        "image": "buoyage_002.svg",
        "options": [
          "Black with yellow band",
          "Yellow with black band",
          "Yellow above black",
          "Black above yellow"
        ],
        "correctAnswer": 2,
        "explanation": "A south cardinal buoy is yellow above black, with two black cones pointing downward.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_003",
        "module": "buoyage",
        "question": "What topmark is found on an east cardinal buoy?",
        "image": "buoyage_003.svg",
        "options": [
          "Two cones pointing upward",
          "Two cones pointing downward",
          "Two cones base to base",
          "Two cones point to point"
        ],
        "correctAnswer": 2,
        "explanation": "An east cardinal buoy has two black cones placed base-to-base, resembling an hourglass shape.",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_004",
        "module": "buoyage",
        "question": "What is the colour scheme of a west cardinal buoy?",
        "image": "buoyage_004.svg",
        "options": [
          "Yellow-Black-Yellow",
          "Black-Yellow-Black",
          "Black with yellow band",
          "Yellow with black band"
        ],
        "correctAnswer": 0,
        "explanation": "A west cardinal buoy is painted yellow-black-yellow, with topmarks pointing inward (point-to-point).",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_005",
        "module": "buoyage",
        "question": "What light characteristic does a north cardinal buoy display?",
        "image": "buoyage_005.svg",
        "options": [
          "Continuous flashing",
          "Quick or very quick flashing",
          "Three flashes",
          "Six flashes plus one long"
        ],
        "correctAnswer": 1,
        "explanation": "A north cardinal buoy shows a continuous quick (Q) or very quick (VQ) flashing white light.",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_006",
        "module": "buoyage",
        "question": "What is the light characteristic of a south cardinal buoy?",
        "image": "buoyage_006.svg",
        "options": [
          "Q(6)+LFl",
          "Q(9)",
          "Q or VQ continuous",
          "Iso 10s"
        ],
        "correctAnswer": 0,
        "explanation": "A south cardinal buoy shows six quick flashes followed by one long flash (Q(6)+LFl).",
        "difficulty": "hard"
      },
      {
        "id": "buoyage_007",
        "module": "buoyage",
        "question": "How many flashes does an east cardinal buoy display?",
        "image": "buoyage_007.svg",
        "options": [
          "3",
          "6",
          "9",
          "Continuous"
        ],
        "correctAnswer": 0,
        "explanation": "An east cardinal buoy shows a group of 3 quick or very quick flashes.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_008",
        "module": "buoyage",
        "question": "What light sequence identifies a west cardinal buoy?",
        "image": "buoyage_008.svg",
        "options": [
          "6 flashes + 1 long",
          "9 flashes",
          "3 flashes",
          "Continuous flashing"
        ],
        "correctAnswer": 1,
        "explanation": "A west cardinal buoy shows a group of 9 quick or very quick flashes.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_009",
        "module": "buoyage",
        "question": "What colour is an isolated danger mark?",
        "image": "buoyage_009.svg",
        "options": [
          "Red and black horizontal bands",
          "Black and yellow vertical stripes",
          "Black and white checks",
          "Green and red stripes"
        ],
        "correctAnswer": 0,
        "explanation": "Isolated danger marks are painted with horizontal red and black bands.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_010",
        "module": "buoyage",
        "question": "What is the topmark of an isolated danger mark?",
        "image": "buoyage_010.svg",
        "options": [
          "Two black spheres",
          "Two cones point-to-point",
          "Single black cone",
          "Single red ball"
        ],
        "correctAnswer": 0,
        "explanation": "An isolated danger mark has two black spheres as its topmark.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_011",
        "module": "buoyage",
        "question": "What is the light characteristic of an isolated danger mark?",
        "image": "buoyage_011.svg",
        "options": [
          "White Fl(2)",
          "Red Iso 4s",
          "Yellow Fl(5)",
          "Green Fl(3)"
        ],
        "correctAnswer": 0,
        "explanation": "Isolated danger marks show a white light flashing twice (Fl(2)).",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_012",
        "module": "buoyage",
        "question": "What does a safe water mark indicate?",
        "image": "buoyage_012.svg",
        "options": [
          "Preferred channel",
          "Centre of a channel or landfall",
          "Hazard area",
          "Tidal stream"
        ],
        "correctAnswer": 1,
        "explanation": "Safe water marks indicate there is navigable water all around them, often used as mid-channel or landfall buoys.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_013",
        "module": "buoyage",
        "question": "What is the colour scheme of a safe water mark?",
        "image": "buoyage_013.svg",
        "options": [
          "Red and white vertical stripes",
          "Black and yellow bands",
          "Green and red horizontal stripes",
          "Black and white checks"
        ],
        "correctAnswer": 0,
        "explanation": "Safe water marks are painted with vertical red and white stripes.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_014",
        "module": "buoyage",
        "question": "What topmark does a safe water mark have?",
        "image": "buoyage_014.svg",
        "options": [
          "Red sphere",
          "Two cones",
          "Black sphere",
          "Yellow cross"
        ],
        "correctAnswer": 0,
        "explanation": "Safe water marks have a single red sphere as their topmark.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_015",
        "module": "buoyage",
        "question": "What light characteristic does a safe water mark display?",
        "image": "buoyage_015.svg",
        "options": [
          "White Iso 10s",
          "White Morse 'A'",
          "White LFl 10s",
          "Any of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Safe water marks may show an isophase, long flash, or Morse 'A' white light.",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_016",
        "module": "buoyage",
        "question": "What do special marks indicate?",
        "image": "buoyage_016.svg",
        "options": [
          "General danger",
          "Safe water",
          "Special areas or features",
          "Preferred channel"
        ],
        "correctAnswer": 2,
        "explanation": "Special marks indicate specific areas or features such as cables, pipelines, or recreation zones.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_017",
        "module": "buoyage",
        "question": "What colour are special marks?",
        "image": "buoyage_017.svg",
        "options": [
          "Black",
          "Yellow",
          "Red",
          "Green"
        ],
        "correctAnswer": 1,
        "explanation": "Special marks are painted yellow.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_018",
        "module": "buoyage",
        "question": "What is the topmark of a special mark?",
        "image": "buoyage_018.svg",
        "options": [
          "Yellow cross",
          "Yellow sphere",
          "Black cone",
          "Red diamond"
        ],
        "correctAnswer": 0,
        "explanation": "Special marks use a yellow X-shaped cross as their topmark.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_019",
        "module": "buoyage",
        "question": "What light characteristics do special marks display?",
        "image": "buoyage_019.svg",
        "options": [
          "Yellow, any rhythm not used for cardinal, isolated danger, or safe water",
          "White Iso",
          "Red Fl(2)",
          "Green Fl(3)"
        ],
        "correctAnswer": 0,
        "explanation": "Special marks show yellow lights with rhythms that do not conflict with other buoy types.",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_020",
        "module": "buoyage",
        "question": "In IALA Region A, what colour is a port-hand lateral mark?",
        "image": "buoyage_020.svg",
        "options": [
          "Red",
          "Green",
          "Black",
          "Yellow"
        ],
        "correctAnswer": 0,
        "explanation": "In Region A, port-hand lateral marks are red.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_021",
        "module": "buoyage",
        "question": "What shape is the topmark of a port-hand buoy in Region A?",
        "image": "buoyage_021.svg",
        "options": [
          "Can (cylindrical)",
          "Cone (point up)",
          "Sphere",
          "Cross"
        ],
        "correctAnswer": 0,
        "explanation": "Port-hand buoys use a cylindrical 'can' shape as their topmark.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_022",
        "module": "buoyage",
        "question": "In IALA Region A, what colour is a starboard-hand lateral mark?",
        "image": "buoyage_022.svg",
        "options": [
          "Red",
          "Green",
          "Yellow",
          "Black"
        ],
        "correctAnswer": 1,
        "explanation": "In Region A, starboard-hand lateral marks are green.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_023",
        "module": "buoyage",
        "question": "What topmark shape is used for a starboard-hand buoy?",
        "image": "buoyage_023.svg",
        "options": [
          "Cone (point up)",
          "Can",
          "Sphere",
          "Cross"
        ],
        "correctAnswer": 0,
        "explanation": "Starboard-hand buoys are marked with a conical (point-up) topmark.",
        "difficulty": "easy"
      },
      {
        "id": "buoyage_024",
        "module": "buoyage",
        "question": "What does a preferred channel buoy indicate?",
        "image": "buoyage_024.svg",
        "options": [
          "Safe water on either side",
          "Preferred channel when a fairway splits",
          "No entry",
          "Special area"
        ],
        "correctAnswer": 1,
        "explanation": "Preferred channel buoys indicate the main channel when a waterway divides.",
        "difficulty": "medium"
      },
      {
        "id": "buoyage_025",
        "module": "buoyage",
        "question": "How is a preferred channel to port buoy marked?",
        "image": "buoyage_025.svg",
        "options": [
          "Red with a green band",
          "Green with a red band",
          "Yellow with a black band",
          "Black with a yellow band"
        ],
        "correctAnswer": 0,
        "explanation": "A preferred channel to port buoy is red with a single green horizontal band.",
        "difficulty": "medium"
      },
    {
        "id": "buoyage_026",
        "module": "buoyage",
        "question": "How is a preferred channel to starboard buoy marked?",
        "image": "buoyage_026.svg",
        "options": [
        "Green with a red band",
        "Red with a green band",
        "Yellow with a black band",
        "Black with a yellow band"
        ],
        "correctAnswer": 0,
        "explanation": "A preferred channel to starboard buoy is green with a single red horizontal band.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_027",
        "module": "buoyage",
        "question": "What shape is used for a port-hand buoy?",
        "image": "buoyage_027.svg",
        "options": [
        "Can",
        "Cone",
        "Sphere",
        "Cross"
        ],
        "correctAnswer": 0,
        "explanation": "Port-hand buoys are cylindrical, known as 'can' shape.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_028",
        "module": "buoyage",
        "question": "What shape is used for a starboard-hand buoy?",
        "image": "buoyage_028.svg",
        "options": [
        "Cone",
        "Can",
        "Sphere",
        "Diamond"
        ],
        "correctAnswer": 0,
        "explanation": "Starboard-hand buoys are conical in shape.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_029",
        "module": "buoyage",
        "question": "What does a lateral buoy indicate?",
        "image": "buoyage_029.svg",
        "options": [
        "The safest side to pass a hazard",
        "The limits of a channel",
        "Special features",
        "Open sea safe water"
        ],
        "correctAnswer": 1,
        "explanation": "Lateral buoys indicate the sides of a navigable channel.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_030",
        "module": "buoyage",
        "question": "In IALA Region B, what colour is a port-hand buoy?",
        "image": "buoyage_030.svg",
        "options": [
        "Green",
        "Red",
        "Black",
        "Yellow"
        ],
        "correctAnswer": 0,
        "explanation": "In Region B (Americas, Japan, etc.), port-hand buoys are green.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_031",
        "module": "buoyage",
        "question": "In IALA Region B, what colour is a starboard-hand buoy?",
        "image": "buoyage_031.svg",
        "options": [
        "Red",
        "Green",
        "Black",
        "Yellow"
        ],
        "correctAnswer": 0,
        "explanation": "In Region B, starboard-hand buoys are red.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_032",
        "module": "buoyage",
        "question": "What does the mnemonic 'Red Right Returning' refer to?",
        "image": "buoyage_032.svg",
        "options": [
        "Region A buoyage system",
        "Region B buoyage system",
        "Cardinal marks",
        "Special marks"
        ],
        "correctAnswer": 1,
        "explanation": "‘Red Right Returning’ applies to Region B: red buoys should be kept to starboard when returning from sea.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_033",
        "module": "buoyage",
        "question": "What shape can starboard-hand buoys take if unlit?",
        "image": "buoyage_033.svg",
        "options": [
        "Cone",
        "Can",
        "Sphere",
        "Cross"
        ],
        "correctAnswer": 0,
        "explanation": "Even unlit, starboard-hand buoys maintain their conical shape for identification.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_034",
        "module": "buoyage",
        "question": "What shape can port-hand buoys take if unlit?",
        "image": "buoyage_034.svg",
        "options": [
        "Cone",
        "Can",
        "Sphere",
        "Diamond"
        ],
        "correctAnswer": 1,
        "explanation": "Port-hand buoys remain can-shaped even if unlit.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_035",
        "module": "buoyage",
        "question": "What is the purpose of a safe water mark at landfall?",
        "image": "buoyage_035.svg",
        "options": [
        "Mark a hazard",
        "Indicate a traffic separation scheme",
        "Provide a point of reference on entering from sea",
        "Indicate fishing area"
        ],
        "correctAnswer": 2,
        "explanation": "Safe water marks at landfall help vessels identify the entrance to a channel when approaching from sea.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_036",
        "module": "buoyage",
        "question": "What does a yellow buoy with a black 'X' topmark mean?",
        "image": "buoyage_036.svg",
        "options": [
        "Special mark",
        "Safe water mark",
        "Isolated danger mark",
        "Cardinal mark"
        ],
        "correctAnswer": 0,
        "explanation": "Yellow buoys with a black X topmark are special marks.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_037",
        "module": "buoyage",
        "question": "What do lateral buoys mark in a dredged channel?",
        "image": "buoyage_037.svg",
        "options": [
        "Safe anchorage",
        "Edges of the channel",
        "Preferred turning area",
        "Fishing zone"
        ],
        "correctAnswer": 1,
        "explanation": "Lateral buoys are placed on the sides of dredged or narrow channels.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_038",
        "module": "buoyage",
        "question": "What type of mark uses a white light Morse 'A' signal?",
        "image": "buoyage_038.svg",
        "options": [
        "Safe water mark",
        "South cardinal",
        "Special mark",
        "Isolated danger"
        ],
        "correctAnswer": 0,
        "explanation": "Safe water marks may show Morse 'A' (dot-dash) white lights.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_039",
        "module": "buoyage",
        "question": "What does a buoy with horizontal red and black bands indicate?",
        "image": "buoyage_039.svg",
        "options": [
        "Safe water",
        "Isolated danger",
        "Special mark",
        "Cardinal buoy"
        ],
        "correctAnswer": 1,
        "explanation": "Horizontal red and black bands identify isolated danger marks.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_040",
        "module": "buoyage",
        "question": "What colour light does a cardinal mark show?",
        "image": "buoyage_040.svg",
        "options": [
        "Red",
        "Green",
        "Yellow",
        "White"
        ],
        "correctAnswer": 3,
        "explanation": "All cardinal marks display white lights, with different rhythms to indicate direction.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_041",
        "module": "buoyage",
        "question": "What is the meaning of a buoy with black and yellow vertical stripes?",
        "image": "buoyage_041.svg",
        "options": [
        "Safe water mark",
        "Special mark",
        "Cardinal buoy",
        "Emergency wreck mark"
        ],
        "correctAnswer": 3,
        "explanation": "Emergency wreck marks are painted with vertical blue and yellow stripes (recent introduction).",
        "difficulty": "hard"
    },
    {
        "id": "buoyage_042",
        "module": "buoyage",
        "question": "What light does an emergency wreck marking buoy show?",
        "image": "buoyage_042.svg",
        "options": [
        "Blue and yellow alternating flashes",
        "White Morse 'A'",
        "Red Fl(2)",
        "Yellow Fl(5)"
        ],
        "correctAnswer": 0,
        "explanation": "Emergency wreck marking buoys show alternating blue and yellow quick flashing lights.",
        "difficulty": "hard"
    },
    {
        "id": "buoyage_043",
        "module": "buoyage",
        "question": "What is the purpose of an emergency wreck marking buoy?",
        "image": "buoyage_043.svg",
        "options": [
        "Indicate a permanent hazard",
        "Mark the site of a newly sunk wreck until permanent marks are established",
        "Mark dredged channels",
        "Mark fishing grounds"
        ],
        "correctAnswer": 1,
        "explanation": "These buoys provide immediate marking of a new wreck until permanent aids are deployed.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_044",
        "module": "buoyage",
        "question": "What is the topmark of an emergency wreck buoy?",
        "image": "buoyage_044.svg",
        "options": [
        "Yellow cross",
        "Blue-yellow stripes",
        "Vertical blue-yellow pole",
        "It has no topmark"
        ],
        "correctAnswer": 3,
        "explanation": "Emergency wreck buoys have no topmark, only distinctive striping and light pattern.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_045",
        "module": "buoyage",
        "question": "Which buoy shows alternating blue and yellow stripes?",
        "image": "buoyage_045.svg",
        "options": [
        "Special mark",
        "Safe water mark",
        "Emergency wreck buoy",
        "Cardinal buoy"
        ],
        "correctAnswer": 2,
        "explanation": "Blue and yellow vertical stripes are used exclusively on emergency wreck buoys.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_046",
        "module": "buoyage",
        "question": "Which buoyage system is used in Europe?",
        "image": "buoyage_046.svg",
        "options": [
        "IALA Region A",
        "IALA Region B",
        "Both A and B",
        "Neither"
        ],
        "correctAnswer": 0,
        "explanation": "Europe follows the IALA Region A buoyage system.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_047",
        "module": "buoyage",
        "question": "Which buoyage system is used in North America?",
        "image": "buoyage_047.svg",
        "options": [
        "IALA Region A",
        "IALA Region B",
        "Both",
        "Neither"
        ],
        "correctAnswer": 1,
        "explanation": "North America follows the IALA Region B buoyage system.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_048",
        "module": "buoyage",
        "question": "What is the key difference between IALA Region A and B buoyage?",
        "image": "buoyage_048.svg",
        "options": [
        "The colour of cardinal marks",
        "The colour of isolated danger marks",
        "The colour of lateral marks",
        "The shape of safe water marks"
        ],
        "correctAnswer": 2,
        "explanation": "The difference between Regions A and B lies in the colour system for lateral buoys: red and green are reversed.",
        "difficulty": "medium"
    },
    {
        "id": "buoyage_049",
        "module": "buoyage",
        "question": "When approaching a harbour in Region A, which side should a red buoy be kept?",
        "image": "buoyage_049.svg",
        "options": [
        "To port",
        "To starboard",
        "Ahead",
        "It does not matter"
        ],
        "correctAnswer": 0,
        "explanation": "In Region A, red buoys are port-hand marks and should be kept to port when entering from seaward.",
        "difficulty": "easy"
    },
    {
        "id": "buoyage_050",
        "module": "buoyage",
        "question": "When approaching a harbour in Region B, which side should a red buoy be kept?",
        "image": "buoyage_050.svg",
        "options": [
        "To port",
        "To starboard",
        "Ahead",
        "Either side"
        ],
        "correctAnswer": 1,
        "explanation": "In Region B, red buoys are starboard-hand marks and should be kept to starboard when entering from seaward.",
        "difficulty": "easy"
    },
    {
      "id": "buoyage_001",
      "module": "buoyage",
      "question": "What colour is a port-hand lateral mark?",
      "image": "buoyage_001.svg",
      "options": [
        "Red",
        "Green",
        "Yellow",
        "Black and yellow"
      ],
      "correctAnswer": 0,
      "explanation": "Port-hand lateral marks are red and indicate the left side of the channel when entering from seaward.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_002",
      "module": "buoyage",
      "question": "What shape is a starboard-hand lateral buoy?",
      "image": "buoyage_002.svg",
      "options": [
        "Cone",
        "Cylinder",
        "Sphere",
        "Diamond"
      ],
      "correctAnswer": 0,
      "explanation": "Starboard-hand lateral buoys are conical in shape, marking the right-hand side of a channel when entering from seaward.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_003",
      "module": "buoyage",
      "question": "What topmark does a port-hand buoy display?",
      "image": "buoyage_003.svg",
      "options": [
        "Single cylinder",
        "Single cone pointing up",
        "Two cones pointing together",
        "Sphere"
      ],
      "correctAnswer": 0,
      "explanation": "Port-hand buoys display a single cylindrical topmark.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_004",
      "module": "buoyage",
      "question": "What topmark does a starboard-hand buoy display?",
      "image": "buoyage_004.svg",
      "options": [
        "Single cone pointing up",
        "Single cylinder",
        "Sphere",
        "Crossed cones"
      ],
      "correctAnswer": 0,
      "explanation": "Starboard-hand buoys display a single cone pointing upwards.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_005",
      "module": "buoyage",
      "question": "Which colour is a safe water mark?",
      "image": "buoyage_005.svg",
      "options": [
        "Red and white vertical stripes",
        "Red",
        "Green",
        "Yellow"
      ],
      "correctAnswer": 0,
      "explanation": "Safe water marks are red and white vertically striped, indicating navigable water all around.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_006",
      "module": "buoyage",
      "question": "Which topmark is used on an isolated danger mark?",
      "image": "buoyage_006.svg",
      "options": [
        "Two black spheres",
        "Single cone",
        "Cylinder",
        "Single sphere"
      ],
      "correctAnswer": 0,
      "explanation": "Isolated danger marks have two black spheres as topmarks.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_007",
      "module": "buoyage",
      "question": "What is the purpose of a special mark?",
      "image": "buoyage_007.svg",
      "options": [
        "Indicate special area or caution",
        "Mark port side",
        "Mark starboard side",
        "Indicate isolated danger"
      ],
      "correctAnswer": 0,
      "explanation": "Special marks are yellow and indicate areas such as pipelines, spoil grounds, or caution zones.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_008",
      "module": "buoyage",
      "question": "What does a black and yellow striped buoy with two black cones pointing downward indicate?",
      "image": "buoyage_008.svg",
      "options": [
        "North cardinal mark",
        "South cardinal mark",
        "East cardinal mark",
        "West cardinal mark"
      ],
      "correctAnswer": 1,
      "explanation": "A black and yellow striped buoy with two black cones pointing downward is a south cardinal mark, indicating safe water to the south.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_009",
      "module": "buoyage",
      "question": "What does a black and yellow buoy with two cones pointing up indicate?",
      "image": "buoyage_009.svg",
      "options": [
        "North cardinal mark",
        "South cardinal mark",
        "East cardinal mark",
        "West cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "Two cones pointing upwards indicate a north cardinal mark; safe water is to the north.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_010",
      "module": "buoyage",
      "question": "What does a black and yellow buoy with cones pointing away from each other indicate?",
      "image": "buoyage_010.svg",
      "options": [
        "East cardinal mark",
        "North cardinal mark",
        "South cardinal mark",
        "West cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "Cones pointing away from each other indicate an east cardinal mark; safe water lies to the east.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_011",
      "module": "buoyage",
      "question": "What does a black and yellow buoy with cones pointing towards each other indicate?",
      "image": "buoyage_011.svg",
      "options": [
        "West cardinal mark",
        "East cardinal mark",
        "North cardinal mark",
        "South cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "Cones pointing toward each other indicate a west cardinal mark; safe water is to the west.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_012",
      "module": "buoyage",
      "question": "What colour is used for a port lateral mark in IALA Region A?",
      "image": "buoyage_012.svg",
      "options": [
        "Red",
        "Green",
        "Yellow",
        "Black"
      ],
      "correctAnswer": 0,
      "explanation": "In IALA Region A, port-hand buoys are red; Region B is the opposite.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_013",
      "module": "buoyage",
      "question": "What colour is a starboard lateral mark in IALA Region B?",
      "image": "buoyage_013.svg",
      "options": [
        "Red",
        "Green",
        "Yellow",
        "Black"
      ],
      "correctAnswer": 1,
      "explanation": "In IALA Region B, starboard-hand buoys are green.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_014",
      "module": "buoyage",
      "question": "Which buoy marks a danger with safe water all around?",
      "image": "buoyage_014.svg",
      "options": [
        "Isolated danger mark",
        "Safe water mark",
        "Port-hand mark",
        "Starboard-hand mark"
      ],
      "correctAnswer": 1,
      "explanation": "Safe water marks indicate navigable water all around the buoy.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_015",
      "module": "buoyage",
      "question": "Which mark is yellow with no lateral significance?",
      "image": "buoyage_015.svg",
      "options": [
        "Special mark",
        "Port-hand mark",
        "Starboard-hand mark",
        "Isolated danger mark"
      ],
      "correctAnswer": 0,
      "explanation": "Special marks are yellow and indicate caution areas, not lateral navigation.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_016",
      "module": "buoyage",
      "question": "What shape is an isolated danger mark?",
      "image": "buoyage_016.svg",
      "options": [
        "Black sphere",
        "Cylinder",
        "Cone",
        "Yellow diamond"
      ],
      "correctAnswer": 0,
      "explanation": "Isolated danger marks are black with one or more red horizontal bands and a spherical topmark.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_017",
      "module": "buoyage",
      "question": "Which buoy indicates safe water lies to the north?",
      "image": "buoyage_017.svg",
      "options": [
        "North cardinal mark",
        "East cardinal mark",
        "West cardinal mark",
        "South cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "A north cardinal mark, with two cones pointing up, indicates safe water to the north.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_018",
      "module": "buoyage",
      "question": "Which buoy indicates safe water lies to the south?",
      "image": "buoyage_018.svg",
      "options": [
        "South cardinal mark",
        "East cardinal mark",
        "West cardinal mark",
        "North cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "A south cardinal mark, with two cones pointing downward, indicates safe water to the south.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_019",
      "module": "buoyage",
      "question": "Which buoy indicates safe water lies to the east?",
      "image": "buoyage_019.svg",
      "options": [
        "East cardinal mark",
        "North cardinal mark",
        "West cardinal mark",
        "South cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "East cardinal marks have cones pointing away from each other; safe water lies to the east.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_020",
      "module": "buoyage",
      "question": "Which buoy indicates safe water lies to the west?",
      "image": "buoyage_020.svg",
      "options": [
        "West cardinal mark",
        "North cardinal mark",
        "East cardinal mark",
        "South cardinal mark"
      ],
      "correctAnswer": 0,
      "explanation": "West cardinal marks have cones pointing toward each other; safe water lies to the west.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_021",
      "module": "buoyage",
      "question": "What colour are isolated danger marks?",
      "image": "buoyage_021.svg",
      "options": [
        "Black with red bands",
        "Red",
        "Green",
        "Yellow"
      ],
      "correctAnswer": 0,
      "explanation": "Isolated danger marks are black with one or more red horizontal bands.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_022",
      "module": "buoyage",
      "question": "Which buoy type has no topmark but is painted yellow?",
      "image": "buoyage_022.svg",
      "options": [
        "Special mark",
        "Port-hand mark",
        "Starboard-hand mark",
        "Isolated danger mark"
      ],
      "correctAnswer": 0,
      "explanation": "Special marks are yellow with no topmark, used for special areas or caution.",
      "difficulty": "medium"
    },
    {
      "id": "buoyage_023",
      "module": "buoyage",
      "question": "What colour is a starboard lateral buoy in IALA Region A?",
      "image": "buoyage_023.svg",
      "options": [
        "Green",
        "Red",
        "Yellow",
        "Black"
      ],
      "correctAnswer": 1,
      "explanation": "In IALA Region A, starboard-hand buoys are green, while port-hand buoys are red.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_024",
      "module": "buoyage",
      "question": "What colour is a port lateral mark in IALA Region B?",
      "image": "buoyage_024.svg",
      "options": [
        "Green",
        "Red",
        "Yellow",
        "Black"
      ],
      "correctAnswer": 1,
      "explanation": "In IALA Region B, the colours are reversed; port-hand buoys are green.",
      "difficulty": "easy"
    },
    {
      "id": "buoyage_025",
      "module": "buoyage",
      "question": "What is the main purpose of cardinal marks?",
      "image": "buoyage_025.svg",
      "options": [
        "Indicate where safe water lies",
        "Mark port side",
        "Mark starboard side",
        "Indicate marinas"
      ],
      "correctAnswer": 0,
      "explanation": "Cardinal marks indicate where the safe water lies in relation to the mark.",
      "difficulty": "easy"
    },
        {
          "id": "buoyage_026",
          "module": "buoyage",
          "question": "What topmark does a north cardinal mark display?",
          "image": "buoyage_026.svg",
          "options": [
            "Two black cones pointing up",
            "Two black cones pointing down",
            "Two cones pointing away",
            "Two cones pointing towards each other"
          ],
          "correctAnswer": 0,
          "explanation": "A north cardinal mark has two black cones pointing upwards, indicating safe water to the north.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_027",
          "module": "buoyage",
          "question": "What topmark does a south cardinal mark display?",
          "image": "buoyage_027.svg",
          "options": [
            "Two black cones pointing down",
            "Two black cones pointing up",
            "Two cones pointing away",
            "Two cones pointing towards each other"
          ],
          "correctAnswer": 0,
          "explanation": "A south cardinal mark has two black cones pointing downwards, indicating safe water to the south.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_028",
          "module": "buoyage",
          "question": "What topmark does an east cardinal mark display?",
          "image": "buoyage_028.svg",
          "options": [
            "Two cones pointing away from each other",
            "Two cones pointing up",
            "Two cones pointing down",
            "Two cones pointing towards each other"
          ],
          "correctAnswer": 0,
          "explanation": "East cardinal marks have cones pointing away from each other; safe water lies to the east.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_029",
          "module": "buoyage",
          "question": "What topmark does a west cardinal mark display?",
          "image": "buoyage_029.svg",
          "options": [
            "Two cones pointing towards each other",
            "Two cones pointing up",
            "Two cones pointing down",
            "Two cones pointing away"
          ],
          "correctAnswer": 0,
          "explanation": "West cardinal marks have cones pointing towards each other; safe water lies to the west.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_030",
          "module": "buoyage",
          "question": "How is a lateral buoy light characteristic usually shown on a chart?",
          "image": "buoyage_030.svg",
          "options": [
            "Flashing with colour",
            "Solid light",
            "No light",
            "Flickering white"
          ],
          "correctAnswer": 0,
          "explanation": "Lateral buoys may have a light that flashes in the buoy colour, e.g., red or green.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_031",
          "module": "buoyage",
          "question": "Which shape is used for a port-hand buoy?",
          "image": "buoyage_031.svg",
          "options": [
            "Cylinder or pillar",
            "Cone",
            "Sphere",
            "Diamond"
          ],
          "correctAnswer": 0,
          "explanation": "Port-hand buoys are cylindrical or pillar-shaped.",
          "difficulty": "easy"
        },
        {
          "id": "buoyage_032",
          "module": "buoyage",
          "question": "Which shape is used for a starboard-hand buoy?",
          "image": "buoyage_032.svg",
          "options": [
            "Cone",
            "Cylinder",
            "Sphere",
            "Diamond"
          ],
          "correctAnswer": 0,
          "explanation": "Starboard-hand buoys are conical.",
          "difficulty": "easy"
        },
        {
          "id": "buoyage_033",
          "module": "buoyage",
          "question": "Which mark indicates an isolated danger with safe water around it?",
          "image": "buoyage_033.svg",
          "options": [
            "Isolated danger mark",
            "Safe water mark",
            "Port-hand mark",
            "Starboard-hand mark"
          ],
          "correctAnswer": 0,
          "explanation": "Isolated danger marks indicate a hazard but safe water exists all around the buoy.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_034",
          "module": "buoyage",
          "question": "Which mark is yellow and used for special purposes?",
          "image": "buoyage_034.svg",
          "options": [
            "Special mark",
            "Port-hand mark",
            "Starboard-hand mark",
            "Safe water mark"
          ],
          "correctAnswer": 0,
          "explanation": "Special marks are yellow and indicate areas of special interest or caution.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_035",
          "module": "buoyage",
          "question": "Which topmark does an isolated danger mark display?",
          "image": "buoyage_035.svg",
          "options": [
            "Two black spheres",
            "Single cone",
            "Cylinder",
            "No topmark"
          ],
          "correctAnswer": 0,
          "explanation": "Isolated danger marks have two black spherical topmarks.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_036",
          "module": "buoyage",
          "question": "What colour are cardinal marks primarily?",
          "image": "buoyage_036.svg",
          "options": [
            "Black and yellow",
            "Red",
            "Green",
            "Yellow"
          ],
          "correctAnswer": 0,
          "explanation": "Cardinal marks are black and yellow to distinguish them from lateral marks.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_037",
          "module": "buoyage",
          "question": "How are safe water marks often topped?",
          "image": "buoyage_037.svg",
          "options": [
            "Sphere",
            "Cone",
            "Cylinder",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Safe water marks often have a single red sphere as a topmark.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_038",
          "module": "buoyage",
          "question": "Which colour is used for starboard lateral marks in IALA Region A?",
          "image": "buoyage_038.svg",
          "options": [
            "Green",
            "Red",
            "Yellow",
            "Black"
          ],
          "correctAnswer": 0,
          "explanation": "Starboard-hand marks in Region A are green; port-hand marks are red.",
          "difficulty": "easy"
        },
        {
          "id": "buoyage_039",
          "module": "buoyage",
          "question": "Which colour is used for port lateral marks in IALA Region B?",
          "image": "buoyage_039.svg",
          "options": [
            "Green",
            "Red",
            "Yellow",
            "Black"
          ],
          "correctAnswer": 0,
          "explanation": "In IALA Region B, port-hand marks are green, opposite to Region A.",
          "difficulty": "easy"
        },
        {
          "id": "buoyage_040",
          "module": "buoyage",
          "question": "Which buoy indicates danger with safe water all around?",
          "image": "buoyage_040.svg",
          "options": [
            "Safe water mark",
            "Port-hand mark",
            "Starboard-hand mark",
            "Special mark"
          ],
          "correctAnswer": 0,
          "explanation": "Safe water marks indicate water navigable on all sides.",
          "difficulty": "easy"
        },
        {
          "id": "buoyage_041",
          "module": "buoyage",
          "question": "What is the purpose of a cardinal mark?",
          "image": "buoyage_041.svg",
          "options": [
            "Show where safe water lies",
            "Mark port side",
            "Mark starboard side",
            "Indicate a marina"
          ],
          "correctAnswer": 0,
          "explanation": "Cardinal marks indicate the direction of safe water in relation to the mark.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_042",
          "module": "buoyage",
          "question": "Which buoy type uses a black and yellow horizontal pattern?",
          "image": "buoyage_042.svg",
          "options": [
            "Cardinal mark",
            "Port-hand mark",
            "Starboard-hand mark",
            "Special mark"
          ],
          "correctAnswer": 0,
          "explanation": "Cardinal marks use black and yellow colour patterns to indicate the direction of safe water.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_043",
          "module": "buoyage",
          "question": "What is the topmark of a north cardinal mark?",
          "image": "buoyage_043.svg",
          "options": [
            "Two cones pointing up",
            "Two cones pointing down",
            "Two cones pointing away",
            "Two cones pointing towards each other"
          ],
          "correctAnswer": 0,
          "explanation": "Two cones pointing up signify a north cardinal mark.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_044",
          "module": "buoyage",
          "question": "What is the topmark of a south cardinal mark?",
          "image": "buoyage_044.svg",
          "options": [
            "Two cones pointing down",
            "Two cones pointing up",
            "Two cones pointing away",
            "Two cones pointing towards each other"
          ],
          "correctAnswer": 0,
          "explanation": "Two cones pointing down signify a south cardinal mark.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_045",
          "module": "buoyage",
          "question": "What is the topmark of an east cardinal mark?",
          "image": "buoyage_045.svg",
          "options": [
            "Two cones pointing away from each other",
            "Two cones pointing up",
            "Two cones pointing down",
            "Two cones pointing towards each other"
          ],
          "correctAnswer": 0,
          "explanation": "Cones pointing away from each other indicate an east cardinal mark.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_046",
          "module": "buoyage",
          "question": "What is the topmark of a west cardinal mark?",
          "image": "buoyage_046.svg",
          "options": [
            "Two cones pointing towards each other",
            "Two cones pointing up",
            "Two cones pointing down",
            "Two cones pointing away"
          ],
          "correctAnswer": 0,
          "explanation": "Cones pointing toward each other indicate a west cardinal mark.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_047",
          "module": "buoyage",
          "question": "Which cardinal mark indicates safe water to the north?",
          "image": "buoyage_047.svg",
          "options": [
            "North cardinal mark",
            "South cardinal mark",
            "East cardinal mark",
            "West cardinal mark"
          ],
          "correctAnswer": 0,
          "explanation": "A north cardinal mark indicates safe water lies to the north.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_048",
          "module": "buoyage",
          "question": "Which cardinal mark indicates safe water to the south?",
          "image": "buoyage_048.svg",
          "options": [
            "South cardinal mark",
            "North cardinal mark",
            "East cardinal mark",
            "West cardinal mark"
          ],
          "correctAnswer": 0,
          "explanation": "A south cardinal mark indicates safe water lies to the south.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_049",
          "module": "buoyage",
          "question": "Which cardinal mark indicates safe water to the east?",
          "image": "buoyage_049.svg",
          "options": [
            "East cardinal mark",
            "West cardinal mark",
            "North cardinal mark",
            "South cardinal mark"
          ],
          "correctAnswer": 0,
          "explanation": "An east cardinal mark indicates safe water lies to the east.",
          "difficulty": "medium"
        },
        {
          "id": "buoyage_050",
          "module": "buoyage",
          "question": "Which cardinal mark indicates safe water to the west?",
          "image": "buoyage_050.svg",
          "options": [
            "West cardinal mark",
            "East cardinal mark",
            "North cardinal mark",
            "South cardinal mark"
          ],
          "correctAnswer": 0,
          "explanation": "A west cardinal mark indicates safe water lies to the west.",
          "difficulty": "medium"
        },
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
      },
      {
        "id": "colregs_001",
        "module": "collision_regulations",
        "question": "When two power-driven vessels are meeting head-on, what should each do?",
        "image": "colregs_001.svg",
        "options": [
        "Both turn to port",
        "Both turn to starboard",
        "The smaller vessel gives way",
        "Maintain course and speed"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 14: When vessels meet head-on, each should alter course to starboard to pass port side to port side.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_002",
        "module": "collision_regulations",
        "question": "In a crossing situation, which vessel is the stand-on vessel?",
        "image": "colregs_002.svg",
        "options": [
        "The vessel on the port side",
        "The vessel on the starboard side",
        "The larger vessel",
        "The faster vessel"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 15: The vessel which has the other on her port side is the stand-on vessel; the one with the other on her starboard side must give way.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_003",
        "module": "collision_regulations",
        "question": "Which vessel must keep out of the way of a vessel constrained by her draught?",
        "image": "colregs_003.svg",
        "options": [
        "Only power-driven vessels",
        "All other vessels except those not under command or restricted in their ability to manoeuvre",
        "Sailing vessels only",
        "Fishing vessels only"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 18: A vessel constrained by her draught has priority over all except vessels not under command and vessels restricted in their ability to manoeuvre.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_004",
        "module": "collision_regulations",
        "question": "Which sound signal indicates a vessel altering course to starboard?",
        "image": "colregs_004.svg",
        "options": [
        "One short blast",
        "Two short blasts",
        "Three short blasts",
        "Five short blasts"
        ],
        "correctAnswer": 0,
        "explanation": "Rule 34: One short blast means 'I am altering my course to starboard.'",
        "difficulty": "easy"
    },
    {
        "id": "colregs_005",
        "module": "collision_regulations",
        "question": "Which sound signal indicates a vessel altering course to port?",
        "image": "colregs_005.svg",
        "options": [
        "One short blast",
        "Two short blasts",
        "Three short blasts",
        "Five short blasts"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 34: Two short blasts mean 'I am altering my course to port.'",
        "difficulty": "easy"
    },
    {
        "id": "colregs_006",
        "module": "collision_regulations",
        "question": "Which sound signal indicates a vessel operating astern propulsion?",
        "image": "colregs_006.svg",
        "options": [
        "One short blast",
        "Two short blasts",
        "Three short blasts",
        "Five short blasts"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 34: Three short blasts mean 'I am operating astern propulsion.'",
        "difficulty": "easy"
    },
    {
        "id": "colregs_007",
        "module": "collision_regulations",
        "question": "What should the stand-on vessel do if the give-way vessel does not take action?",
        "image": "colregs_007.svg",
        "options": [
        "Immediately alter course to port",
        "Maintain course regardless",
        "Take action to avoid collision",
        "Sound five short blasts"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 17: The stand-on vessel must take action to avoid collision if the give-way vessel does not act.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_008",
        "module": "collision_regulations",
        "question": "Which sound signal indicates danger or doubt?",
        "image": "colregs_008.svg",
        "options": [
        "One long blast",
        "Two long blasts",
        "Five or more short blasts",
        "Three short blasts"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 34: Five or more short blasts are used to indicate danger or doubt.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_009",
        "module": "collision_regulations",
        "question": "At night, what lights does a power-driven vessel underway show?",
        "image": "colregs_009.svg",
        "options": [
        "Red and green sidelights and a white sternlight",
        "Red and green sidelights, a white sternlight, and a masthead light",
        "Red sidelights only",
        "Green sidelights only"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 23: Power-driven vessels show red/green sidelights, a white sternlight, and one or two masthead lights depending on length.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_010",
        "module": "collision_regulations",
        "question": "What day shape does a vessel at anchor display?",
        "image": "colregs_010.svg",
        "options": [
        "A ball",
        "A cone",
        "Two balls",
        "A cylinder"
        ],
        "correctAnswer": 0,
        "explanation": "Rule 30: A vessel at anchor must display a black ball in the forepart.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_011",
        "module": "collision_regulations",
        "question": "What lights must a vessel under sail alone show at night?",
        "image": "colregs_011.svg",
        "options": [
        "Red and green sidelights and a sternlight",
        "White masthead light only",
        "Red sidelights only",
        "Green sidelights only"
        ],
        "correctAnswer": 0,
        "explanation": "Rule 25: Sailing vessels under way must show red/green sidelights and a white sternlight.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_012",
        "module": "collision_regulations",
        "question": "What day shape does a vessel constrained by her draught display?",
        "image": "colregs_012.svg",
        "options": [
        "Ball-diamond-ball",
        "Cylinder",
        "Two cones apex together",
        "Three black balls in a vertical line"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 28: A vessel constrained by her draught must display a black cylinder as a day shape.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_013",
        "module": "collision_regulations",
        "question": "What is the minimum length of a vessel required to show a second masthead light?",
        "image": "colregs_013.svg",
        "options": [
        "20m",
        "50m",
        "100m",
        "75m"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 23: Power-driven vessels 50m or more in length must show a second masthead light aft and higher than the forward one.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_014",
        "module": "collision_regulations",
        "question": "What lights does a vessel restricted in her ability to manoeuvre display?",
        "image": "colregs_014.svg",
        "options": [
        "Red over green",
        "Red over white",
        "Red-white-red vertically",
        "Three white lights"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 27: Vessels restricted in ability to manoeuvre display red-white-red vertically.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_015",
        "module": "collision_regulations",
        "question": "What day shape is used for a vessel restricted in her ability to manoeuvre?",
        "image": "colregs_015.svg",
        "options": [
        "Three black balls in a vertical line",
        "Ball-diamond-ball",
        "Single black ball",
        "Two cones apex together"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 27: Restricted ability vessels show ball-diamond-ball day shapes.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_016",
        "module": "collision_regulations",
        "question": "What day shape is used for a vessel not under command?",
        "image": "colregs_016.svg",
        "options": [
        "Ball-diamond-ball",
        "Two black balls in a vertical line",
        "Black cylinder",
        "Black cone"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 27: A vessel not under command shows two black balls in a vertical line.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_017",
        "module": "collision_regulations",
        "question": "What lights does a vessel not under command display at night?",
        "image": "colregs_017.svg",
        "options": [
        "Red over red",
        "Red over green",
        "White over white",
        "Green over white"
        ],
        "correctAnswer": 0,
        "explanation": "Rule 27: Vessels not under command show two red lights in a vertical line.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_018",
        "module": "collision_regulations",
        "question": "When must navigation lights be displayed?",
        "image": "colregs_018.svg",
        "options": [
        "Only when under way",
        "Only when at anchor",
        "From sunset to sunrise and in restricted visibility",
        "Only when under sail"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 20: Navigation lights must be shown from sunset to sunrise and in restricted visibility.",
        "difficulty": "easy"
    },
    {
        "id": "colregs_019",
        "module": "collision_regulations",
        "question": "What sound signal must a power-driven vessel make in restricted visibility?",
        "image": "colregs_019.svg",
        "options": [
        "One prolonged blast every 2 minutes",
        "Two prolonged blasts every 2 minutes",
        "One short blast every minute",
        "Five short blasts every 2 minutes"
        ],
        "correctAnswer": 0,
        "explanation": "Rule 35: A power-driven vessel underway must sound one prolonged blast at intervals not more than 2 minutes in restricted visibility.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_020",
        "module": "collision_regulations",
        "question": "What sound signal must a sailing vessel make in restricted visibility?",
        "image": "colregs_020.svg",
        "options": [
        "One prolonged blast",
        "One prolonged and two short blasts every 2 minutes",
        "Two prolonged blasts every 2 minutes",
        "Five short blasts"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 35: A sailing vessel must sound one prolonged and two short blasts at intervals not more than 2 minutes.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_021",
        "module": "collision_regulations",
        "question": "What lights does a fishing vessel engaged in trawling display?",
        "image": "colregs_021.svg",
        "options": [
        "Red over white",
        "Green over white",
        "White over red",
        "White over green"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 26: Fishing vessels engaged in trawling show green over white vertically.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_022",
        "module": "collision_regulations",
        "question": "What day shape does a fishing vessel display when fishing with gear extending more than 150m horizontally?",
        "image": "colregs_022.svg",
        "options": [
        "A cone apex upwards",
        "Two black balls",
        "A cone apex downwards",
        "Two cones apex together"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 26: A cone apex downwards indicates fishing gear extending more than 150m horizontally.",
        "difficulty": "hard"
    },
    {
        "id": "colregs_023",
        "module": "collision_regulations",
        "question": "What lights does a vessel engaged in fishing other than trawling display?",
        "image": "colregs_023.svg",
        "options": [
        "Green over white",
        "Red over white",
        "White over red",
        "Red over green"
        ],
        "correctAnswer": 1,
        "explanation": "Rule 26: Vessels engaged in fishing (other than trawling) display red over white vertically.",
        "difficulty": "medium"
    },
    {
        "id": "colregs_024",
        "module": "collision_regulations",
        "question": "What lights must a vessel engaged in pilotage display?",
        "image": "colregs_024.svg",
        "options": [
        "White over white",
        "Red over white",
        "White over red",
        "Green over white"
        ],
        "correctAnswer": 2,
        "explanation": "Pilot vessels show white over red vertically at night (‘white over red, pilot ahead’).",
        "difficulty": "medium"
    },
    {
        "id": "colregs_025",
        "module": "collision_regulations",
        "question": "What day shape does a vessel aground display?",
        "image": "colregs_025.svg",
        "options": [
        "One black ball",
        "Two black balls",
        "Three black balls in a vertical line",
        "Cylinder"
        ],
        "correctAnswer": 2,
        "explanation": "Rule 30: A vessel aground shows three black balls in a vertical line during the day.",
        "difficulty": "medium"
    },
        {
          "id": "colregs_026",
          "module": "collision_regulations",
          "question": "What lights must a vessel aground display at night?",
          "image": "colregs_026.svg",
          "options": [
            "Red over red",
            "Red over white",
            "Three red lights in a vertical line",
            "White over red"
          ],
          "correctAnswer": 2,
          "explanation": "Rule 30: A vessel aground must display three red lights vertically in a vertical line at night.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_027",
          "module": "collision_regulations",
          "question": "What lights does a vessel constrained by her draught show at night?",
          "image": "colregs_027.svg",
          "options": [
            "Two red lights at the masthead",
            "Three white masthead lights in a vertical line",
            "Red over white over red sidelights",
            "Green over white"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 28: A vessel constrained by her draught shows three white masthead lights in a vertical line.",
          "difficulty": "hard"
        },
        {
          "id": "colregs_028",
          "module": "collision_regulations",
          "question": "Which vessel has the right of way when overtaking?",
          "image": "colregs_028.svg",
          "options": [
            "The overtaking vessel",
            "The vessel being overtaken",
            "The larger vessel",
            "The vessel on the port side"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 13: The overtaking vessel must keep clear of the vessel being overtaken.",
          "difficulty": "easy"
        },
        {
          "id": "colregs_029",
          "module": "collision_regulations",
          "question": "What lights does a sailing vessel being overtaken by another sailing vessel show?",
          "image": "colregs_029.svg",
          "options": [
            "Red and green sidelights",
            "White sternlight only",
            "Red over green",
            "No special lights beyond normal sailing lights"
          ],
          "correctAnswer": 3,
          "explanation": "The overtaken sailing vessel displays normal navigation lights; the overtaking vessel must keep clear.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_030",
          "module": "collision_regulations",
          "question": "What lights must a pilot vessel show when underway?",
          "image": "colregs_030.svg",
          "options": [
            "Red over white vertically",
            "White over red vertically",
            "Two white lights vertically",
            "Red over red"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 28: Pilot vessels underway show white over red vertically.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_031",
          "module": "collision_regulations",
          "question": "What sound signal indicates a vessel at anchor less than 50m?",
          "image": "colregs_031.svg",
          "options": [
            "One prolonged followed by one short",
            "One short blast",
            "One prolonged blast",
            "Five short blasts"
          ],
          "correctAnswer": 2,
          "explanation": "Rule 30: Vessels at anchor less than 50m show one prolonged blast every minute.",
          "difficulty": "easy"
        },
        {
          "id": "colregs_032",
          "module": "collision_regulations",
          "question": "What sound signal indicates a vessel at anchor over 100m?",
          "image": "colregs_032.svg",
          "options": [
            "One prolonged blast",
            "One prolonged blast followed by two short",
            "Two prolonged blasts",
            "Five short blasts"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 30: Vessels at anchor 100m or more must sound one prolonged blast followed by two short blasts.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_033",
          "module": "collision_regulations",
          "question": "Which vessels must give way in a crossing situation?",
          "image": "colregs_033.svg",
          "options": [
            "The vessel with the other on her starboard side",
            "The vessel with the other on her port side",
            "The larger vessel",
            "The smaller vessel"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 15: In a crossing situation, the vessel with the other on her starboard side must give way.",
          "difficulty": "easy"
        },
        {
          "id": "colregs_034",
          "module": "collision_regulations",
          "question": "What action should a give-way vessel take in a crossing situation?",
          "image": "colregs_034.svg",
          "options": [
            "Maintain course and speed",
            "Alter course to pass astern",
            "Sound five short blasts",
            "Increase speed"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 16: The give-way vessel must take early and substantial action to keep clear, usually altering course to pass astern.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_035",
          "module": "collision_regulations",
          "question": "When two sailing vessels are on the same tack, who gives way?",
          "image": "colregs_035.svg",
          "options": [
            "The windward vessel",
            "The leeward vessel",
            "The larger vessel",
            "The faster vessel"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 12: When on the same tack, the windward vessel must keep clear of the leeward vessel.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_036",
          "module": "collision_regulations",
          "question": "When two sailing vessels are on opposite tacks, who gives way?",
          "image": "colregs_036.svg",
          "options": [
            "The vessel with wind on port side",
            "The vessel with wind on starboard side",
            "The larger vessel",
            "The smaller vessel"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 12: When on opposite tacks, the vessel with wind on port side must keep clear of the vessel with wind on starboard side.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_037",
          "module": "collision_regulations",
          "question": "Which vessel must give way when a sailing vessel meets a power-driven vessel?",
          "image": "colregs_037.svg",
          "options": [
            "Sailing vessel",
            "Power-driven vessel",
            "Both maintain course",
            "Neither"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 18: Sailing vessels must give way to power-driven vessels.",
          "difficulty": "easy"
        },
        {
          "id": "colregs_038",
          "module": "collision_regulations",
          "question": "Which vessel must give way to a vessel engaged in fishing?",
          "image": "colregs_038.svg",
          "options": [
            "All vessels except those not under command",
            "Only power-driven vessels",
            "Only sailing vessels",
            "No one"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 18: All vessels must give way to a vessel engaged in fishing, except those not under command or restricted in ability to manoeuvre.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_039",
          "module": "collision_regulations",
          "question": "Which vessel has priority when two power-driven vessels are crossing?",
          "image": "colregs_039.svg",
          "options": [
            "The vessel on the port side",
            "The vessel on the starboard side",
            "The faster vessel",
            "The larger vessel"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 15: The vessel which has the other on her port side must give way; the vessel with the other on her starboard side is stand-on.",
          "difficulty": "easy"
        },
        {
          "id": "colregs_040",
          "module": "collision_regulations",
          "question": "What lights are displayed by a vessel towing at night?",
          "image": "colregs_040.svg",
          "options": [
            "Two masthead lights in a vertical line",
            "Sidelights and sternlight only",
            "Red over white lights",
            "White over red lights"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 24: A towing vessel shows two masthead lights in a vertical line, and a white sternlight.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_041",
          "module": "collision_regulations",
          "question": "What light does a vessel being towed display at night?",
          "image": "colregs_041.svg",
          "options": [
            "White masthead light",
            "Sidelights and sternlight",
            "Red light",
            "Green light"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 24: The vessel being towed shows sidelights and a sternlight.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_042",
          "module": "collision_regulations",
          "question": "Which vessels must give way in narrow channels?",
          "image": "colregs_042.svg",
          "options": [
            "Power-driven vessels less than 20m",
            "Vessels leaving the channel",
            "All vessels",
            "Vessels restricted in ability to manoeuvre"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 9: Vessels leaving a narrow channel must keep out of the way of those staying in the channel.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_043",
          "module": "collision_regulations",
          "question": "What side must a vessel keep when navigating a narrow channel?",
          "image": "colregs_043.svg",
          "options": [
            "Starboard side of the channel",
            "Port side of the channel",
            "Centre of the channel",
            "Either side"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 9: Vessels must keep as near to the starboard side of the channel as is safe and practicable.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_044",
          "module": "collision_regulations",
          "question": "Which vessels may navigate the channel in restricted visibility?",
          "image": "colregs_044.svg",
          "options": [
            "All vessels",
            "Only power-driven vessels",
            "Only vessels not under command",
            "Only vessels that can safely navigate"
          ],
          "correctAnswer": 3,
          "explanation": "Rule 9: Vessels in narrow channels must only navigate if they can do so safely.",
          "difficulty": "hard"
        },
        {
          "id": "colregs_045",
          "module": "collision_regulations",
          "question": "What sound signal should a vessel in fog make if underway but not making way?",
          "image": "colregs_045.svg",
          "options": [
            "One prolonged blast every 2 minutes",
            "Two prolonged blasts every 2 minutes",
            "Three short blasts",
            "Five short blasts"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 35: A power-driven vessel underway but not making way must sound two prolonged blasts at intervals of not more than 2 minutes.",
          "difficulty": "hard"
        },
        {
          "id": "colregs_046",
          "module": "collision_regulations",
          "question": "What is the sound signal for a sailing vessel underway and making way in fog?",
          "image": "colregs_046.svg",
          "options": [
            "One prolonged blast every 2 minutes",
            "One prolonged followed by two short",
            "Two prolonged blasts",
            "Five short blasts"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 35: A sailing vessel underway and making way sounds one prolonged followed by two short blasts every 2 minutes.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_047",
          "module": "collision_regulations",
          "question": "What is the sound signal for a vessel restricted in ability to manoeuvre in fog?",
          "image": "colregs_047.svg",
          "options": [
            "One prolonged blast",
            "One prolonged and two short",
            "Two prolonged blasts",
            "Five short blasts"
          ],
          "correctAnswer": 1,
          "explanation": "Rule 35: A vessel restricted in ability to manoeuvre sounds one prolonged followed by two short blasts.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_048",
          "module": "collision_regulations",
          "question": "Which vessels must keep out of the way of vessels constrained by their draught?",
          "image": "colregs_048.svg",
          "options": [
            "All vessels except those not under command or restricted",
            "Only sailing vessels",
            "Only power-driven vessels",
            "No one"
          ],
          "correctAnswer": 0,
          "explanation": "Rule 18: All vessels must keep clear of a vessel constrained by her draught, except those not under command or restricted.",
          "difficulty": "medium"
        },
        {
          "id": "colregs_049",
          "module": "collision_regulations",
          "question": "When two vessels are in a head-on situation, what sound signal is used?",
          "image": "colregs_049.svg",
          "options": [
            "One short blast each",
            "Two short blasts each",
            "One prolonged blast each",
            "Five short blasts each"
          ],
          "correctAnswer": 2,
          "explanation": "Rule 34: In a head-on situation, each vessel sounds one prolonged blast.",
          "difficulty": "easy"
        },
        {
          "id": "colregs_050",
          "module": "collision_regulations",
          "question": "What is the primary purpose of the COLREGS?",
          "image": "colregs_050.svg",
          "options": [
            "To prevent collisions at sea",
            "To define port regulations",
            "To mark navigation buoys",
            "To manage commercial shipping schedules"
          ],
          "correctAnswer": 0,
          "explanation": "The International Regulations for Preventing Collisions at Sea (COLREGS) are designed to prevent collisions at sea.",
          "difficulty": "easy"
        },
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
      },
      {
        "id": "tides_001",
        "module": "tides_weather",
        "question": "What causes tides on Earth?",
        "image": "tides_001.svg",
        "options": [
          "Gravitational pull of the Moon and Sun",
          "Wind blowing across the sea",
          "Earth's rotation only",
          "Water temperature changes"
        ],
        "correctAnswer": 0,
        "explanation": "Tides are primarily caused by the gravitational pull of the Moon and Sun on Earth's oceans.",
        "difficulty": "easy"
      },
      {
        "id": "tides_002",
        "module": "tides_weather",
        "question": "What is a spring tide?",
        "image": "tides_002.svg",
        "options": [
          "A tide with maximum range",
          "A tide with minimum range",
          "A tide caused by wind only",
          "A daily tide at noon"
        ],
        "correctAnswer": 0,
        "explanation": "Spring tides occur when the Sun, Moon, and Earth are aligned, producing the highest tidal range.",
        "difficulty": "medium"
      },
      {
        "id": "tides_003",
        "module": "tides_weather",
        "question": "What is a neap tide?",
        "image": "tides_003.svg",
        "options": [
          "A tide with minimum range",
          "A tide with maximum range",
          "A tide caused by storms",
          "A tidal bore"
        ],
        "correctAnswer": 0,
        "explanation": "Neap tides occur when the Sun and Moon are at right angles relative to Earth, producing the lowest tidal range.",
        "difficulty": "medium"
      },
      {
        "id": "tides_004",
        "module": "tides_weather",
        "question": "What is the term for the highest point a tide reaches?",
        "image": "tides_004.svg",
        "options": [
          "High water",
          "Low water",
          "Mean sea level",
          "Tidal bore"
        ],
        "correctAnswer": 0,
        "explanation": "High water is the term for the highest point reached by a tide.",
        "difficulty": "easy"
      },
      {
        "id": "tides_005",
        "module": "tides_weather",
        "question": "What is the term for the lowest point a tide reaches?",
        "image": "tides_005.svg",
        "options": [
          "Low water",
          "High water",
          "Spring tide",
          "Tidal range"
        ],
        "correctAnswer": 0,
        "explanation": "Low water is the lowest level reached by a tide.",
        "difficulty": "easy"
      },
      {
        "id": "tides_006",
        "module": "tides_weather",
        "question": "What is the tidal range?",
        "image": "tides_006.svg",
        "options": [
          "Difference in height between high and low water",
          "Time between high and low tide",
          "Distance a boat moves with tide",
          "Speed of tidal current"
        ],
        "correctAnswer": 0,
        "explanation": "Tidal range is the vertical difference between high and low water levels.",
        "difficulty": "medium"
      },
      {
        "id": "tides_007",
        "module": "tides_weather",
        "question": "What is a tidal current?",
        "image": "tides_007.svg",
        "options": [
          "Horizontal movement of water caused by tides",
          "Change in water temperature",
          "A tidal bore only",
          "Wind-driven waves"
        ],
        "correctAnswer": 0,
        "explanation": "Tidal currents are horizontal flows of water caused by the rise and fall of tides.",
        "difficulty": "medium"
      },
      {
        "id": "tides_008",
        "module": "tides_weather",
        "question": "What is a tidal bore?",
        "image": "tides_008.svg",
        "options": [
          "A wave caused by incoming tide in a river",
          "A spring tide",
          "A neap tide",
          "A wave caused by wind only"
        ],
        "correctAnswer": 0,
        "explanation": "A tidal bore is a sudden wave that moves up a river as the tide rises.",
        "difficulty": "medium"
      },
      {
        "id": "tides_009",
        "module": "tides_weather",
        "question": "Which factor influences tidal height besides the Moon and Sun?",
        "image": "tides_009.svg",
        "options": [
          "Local coastline and seabed",
          "Air temperature",
          "Wind direction only",
          "Rainfall"
        ],
        "correctAnswer": 0,
        "explanation": "Local geography, including the coastline and seabed, affects tidal heights and currents.",
        "difficulty": "medium"
      },
      {
        "id": "tides_010",
        "module": "tides_weather",
        "question": "What type of tide occurs twice each lunar day?",
        "image": "tides_010.svg",
        "options": [
          "Semidiurnal tide",
          "Diurnal tide",
          "Neap tide",
          "Spring tide"
        ],
        "correctAnswer": 0,
        "explanation": "Semidiurnal tides occur twice each lunar day, producing two high and two low waters.",
        "difficulty": "medium"
      },
      {
        "id": "tides_011",
        "module": "tides_weather",
        "question": "What type of tide occurs once each lunar day?",
        "image": "tides_011.svg",
        "options": [
          "Diurnal tide",
          "Semidiurnal tide",
          "Neap tide",
          "Spring tide"
        ],
        "correctAnswer": 0,
        "explanation": "Diurnal tides have only one high and one low water per lunar day.",
        "difficulty": "medium"
      },
      {
        "id": "tides_012",
        "module": "tides_weather",
        "question": "Which tool helps predict tides and tidal currents?",
        "image": "tides_012.svg",
        "options": [
          "Tide tables",
          "Barometer",
          "Compass",
          "Radar"
        ],
        "correctAnswer": 0,
        "explanation": "Tide tables provide predicted times and heights of tides and tidal currents.",
        "difficulty": "easy"
      },
      {
        "id": "tides_013",
        "module": "tides_weather",
        "question": "What weather factor is indicated by a falling barometer?",
        "image": "tides_013.svg",
        "options": [
          "Approaching low pressure and possible storm",
          "High pressure and clear weather",
          "No change in weather",
          "Rising tides"
        ],
        "correctAnswer": 0,
        "explanation": "A falling barometer shows decreasing atmospheric pressure, usually indicating deteriorating weather or storm approaching.",
        "difficulty": "medium"
      },
      {
        "id": "tides_014",
        "module": "tides_weather",
        "question": "What weather factor is indicated by a rising barometer?",
        "image": "tides_014.svg",
        "options": [
          "High pressure and improving weather",
          "Approaching storm",
          "Strong tides",
          "Heavy rain"
        ],
        "correctAnswer": 0,
        "explanation": "A rising barometer shows increasing atmospheric pressure, usually indicating improving weather.",
        "difficulty": "medium"
      },
      {
        "id": "tides_015",
        "module": "tides_weather",
        "question": "What is Beaufort Force 6 wind speed?",
        "image": "tides_015.svg",
        "options": [
          "Strong breeze, 22–27 knots",
          "Light breeze, 4–6 knots",
          "Gale, 34–40 knots",
          "Calm, 0–1 knot"
        ],
        "correctAnswer": 0,
        "explanation": "Beaufort Force 6 is a strong breeze with speeds of 22–27 knots.",
        "difficulty": "medium"
      },
      {
        "id": "tides_016",
        "module": "tides_weather",
        "question": "What is a barometer used to measure?",
        "image": "tides_016.svg",
        "options": [
          "Atmospheric pressure",
          "Wind speed",
          "Temperature",
          "Tide height"
        ],
        "correctAnswer": 0,
        "explanation": "A barometer measures atmospheric pressure to help forecast weather changes.",
        "difficulty": "easy"
      },
      {
        "id": "tides_017",
        "module": "tides_weather",
        "question": "What is a cloud forming at high altitude called?",
        "image": "tides_017.svg",
        "options": [
          "Cirrus",
          "Cumulus",
          "Stratus",
          "Nimbus"
        ],
        "correctAnswer": 0,
        "explanation": "Cirrus clouds are high-altitude clouds composed of ice crystals, often indicating fair weather or approaching fronts.",
        "difficulty": "medium"
      },
      {
        "id": "tides_018",
        "module": "tides_weather",
        "question": "Which cloud type indicates stormy weather?",
        "image": "tides_018.svg",
        "options": [
          "Cumulonimbus",
          "Cirrus",
          "Stratus",
          "Altostratus"
        ],
        "correctAnswer": 0,
        "explanation": "Cumulonimbus clouds are tall, dense clouds associated with thunderstorms and severe weather.",
        "difficulty": "medium"
      },
      {
        "id": "tides_019",
        "module": "tides_weather",
        "question": "Which wind direction abbreviation indicates a wind from the south-west?",
        "image": "tides_019.svg",
        "options": [
          "SW",
          "SE",
          "NW",
          "NE"
        ],
        "correctAnswer": 0,
        "explanation": "SW indicates a wind blowing from the south-west.",
        "difficulty": "easy"
      },
      {
        "id": "tides_020",
        "module": "tides_weather",
        "question": "Which wind direction abbreviation indicates a wind from the north-east?",
        "image": "tides_020.svg",
        "options": [
          "NE",
          "NW",
          "SE",
          "SW"
        ],
        "correctAnswer": 0,
        "explanation": "NE indicates a wind blowing from the north-east.",
        "difficulty": "easy"
      },
      {
        "id": "tides_021",
        "module": "tides_weather",
        "question": "What is a barometric low-pressure system usually associated with?",
        "image": "tides_021.svg",
        "options": [
          "Unsettled weather, rain, and storms",
          "Calm weather",
          "High tide",
          "Sea fog only"
        ],
        "correctAnswer": 0,
        "explanation": "Low-pressure systems are associated with unstable, stormy weather.",
        "difficulty": "medium"
      },
      {
        "id": "tides_022",
        "module": "tides_weather",
        "question": "What is a barometric high-pressure system usually associated with?",
        "image": "tides_022.svg",
        "options": [
          "Stable, fine weather",
          "Rain",
          "Storms",
          "Fog"
        ],
        "correctAnswer": 0,
        "explanation": "High-pressure systems generally bring stable, fair weather.",
        "difficulty": "medium"
      },
      {
        "id": "tides_023",
        "module": "tides_weather",
        "question": "What is the term for wind blowing in a constant direction over a local area?",
        "image": "tides_023.svg",
        "options": [
          "Prevailing wind",
          "Gale",
          "Squall",
          "Breeze"
        ],
        "correctAnswer": 0,
        "explanation": "Prevailing winds blow predominantly from a single direction over a region.",
        "difficulty": "easy"
      },
      {
        "id": "tides_024",
        "module": "tides_weather",
        "question": "Which wind indicates an approaching storm?",
        "image": "tides_024.svg",
        "options": [
          "Strong, gusty winds",
          "Calm air",
          "Prevailing winds",
          "Light breeze"
        ],
        "correctAnswer": 0,
        "explanation": "Sudden strong or gusty winds often signal a storm approaching.",
        "difficulty": "medium"
      },
      {
        "id": "tides_025",
        "module": "tides_weather",
        "question": "Which effect does the Moon have on tides?",
        "image": "tides_025.svg",
        "options": [
          "Causes bulges in ocean water leading to high and low tides",
          "Warms ocean water",
          "Changes water salinity",
          "Controls wind direction"
        ],
        "correctAnswer": 0,
        "explanation": "The Moon's gravitational pull causes ocean bulges, producing high and low tides.",
        "difficulty": "easy"
      },
      {
        "id": "tides_026",
        "module": "tides_weather",
        "question": "What is the term for the time between successive high waters?",
        "image": "tides_026.svg",
        "options": [
          "Tidal period",
          "Tidal range",
          "Diurnal tide",
          "Spring tide"
        ],
        "correctAnswer": 0,
        "explanation": "The tidal period is the time between successive high waters (or low waters).",
        "difficulty": "medium"
      },
      {
        "id": "tides_027",
        "module": "tides_weather",
        "question": "What is a cotidal line on a tidal chart?",
        "image": "tides_027.svg",
        "options": [
          "Line showing areas with the same tidal phase",
          "Line showing maximum tidal range",
          "Line indicating tide height",
          "Line showing river currents"
        ],
        "correctAnswer": 0,
        "explanation": "Cotidal lines connect points experiencing high (or low) water at the same time.",
        "difficulty": "medium"
      },
      {
        "id": "tides_028",
        "module": "tides_weather",
        "question": "What is a tidal datum?",
        "image": "tides_028.svg",
        "options": [
          "Reference point for measuring tides",
          "Maximum tidal height",
          "Tidal current speed",
          "Wind direction indicator"
        ],
        "correctAnswer": 0,
        "explanation": "A tidal datum is a reference level used for measuring tidal heights.",
        "difficulty": "medium"
      },
      {
        "id": "tides_029",
        "module": "tides_weather",
        "question": "Which effect can wind have on tidal height?",
        "image": "tides_029.svg",
        "options": [
          "Raise or lower water levels",
          "Change tidal phase",
          "Reverse tidal currents",
          "Change moon gravity"
        ],
        "correctAnswer": 0,
        "explanation": "Strong onshore or offshore winds can increase or decrease water levels, affecting the apparent tide.",
        "difficulty": "medium"
      },
      {
        "id": "tides_030",
        "module": "tides_weather",
        "question": "Which effect can atmospheric pressure have on tides?",
        "image": "tides_030.svg",
        "options": [
          "High pressure depresses water; low pressure raises it",
          "Has no effect",
          "Changes tide timing",
          "Changes tidal period"
        ],
        "correctAnswer": 0,
        "explanation": "High pressure pushes water down (lowering tides), and low pressure allows it to rise (raising tides).",
        "difficulty": "medium"
      },
      {
        "id": "tides_031",
        "module": "tides_weather",
        "question": "What does a barograph record?",
        "image": "tides_031.svg",
        "options": [
          "Continuous atmospheric pressure",
          "Wind speed",
          "Tidal height",
          "Temperature"
        ],
        "correctAnswer": 0,
        "explanation": "A barograph records continuous changes in atmospheric pressure over time.",
        "difficulty": "medium"
      },
      {
        "id": "tides_032",
        "module": "tides_weather",
        "question": "Which term describes wind rotating clockwise in the northern hemisphere around high pressure?",
        "image": "tides_032.svg",
        "options": [
          "Anticyclonic",
          "Cyclonic",
          "Prevailing",
          "Gale"
        ],
        "correctAnswer": 0,
        "explanation": "In the northern hemisphere, winds circulate clockwise around a high-pressure system, called anticyclonic.",
        "difficulty": "medium"
      },
      {
        "id": "tides_033",
        "module": "tides_weather",
        "question": "Which term describes wind rotating counterclockwise in the northern hemisphere around low pressure?",
        "image": "tides_033.svg",
        "options": [
          "Cyclonic",
          "Anticyclonic",
          "Prevailing",
          "Gale"
        ],
        "correctAnswer": 0,
        "explanation": "In the northern hemisphere, winds circulate counterclockwise around low-pressure systems, called cyclonic.",
        "difficulty": "medium"
      },
      {
        "id": "tides_034",
        "module": "tides_weather",
        "question": "What is a microbarograph used for?",
        "image": "tides_034.svg",
        "options": [
          "Detect small changes in atmospheric pressure",
          "Measure wind speed",
          "Record tide heights",
          "Measure wave period"
        ],
        "correctAnswer": 0,
        "explanation": "A microbarograph detects very small changes in atmospheric pressure, useful for forecasting.",
        "difficulty": "medium"
      },
      {
        "id": "tides_035",
        "module": "tides_weather",
        "question": "What is a weather front?",
        "image": "tides_035.svg",
        "options": [
          "Boundary between air masses of different temperature or humidity",
          "A tidal current",
          "A cloud type",
          "A high-pressure system"
        ],
        "correctAnswer": 0,
        "explanation": "A front is the boundary between two air masses with different characteristics.",
        "difficulty": "medium"
      },
      {
        "id": "tides_036",
        "module": "tides_weather",
        "question": "Which type of front brings thunderstorms and heavy rain?",
        "image": "tides_036.svg",
        "options": [
          "Cold front",
          "Warm front",
          "Occluded front",
          "Stationary front"
        ],
        "correctAnswer": 0,
        "explanation": "Cold fronts force warm air up rapidly, causing thunderstorms and heavy rain.",
        "difficulty": "medium"
      },
      {
        "id": "tides_037",
        "module": "tides_weather",
        "question": "Which type of front brings prolonged, steady rain?",
        "image": "tides_037.svg",
        "options": [
          "Warm front",
          "Cold front",
          "Occluded front",
          "Stationary front"
        ],
        "correctAnswer": 0,
        "explanation": "Warm fronts cause gentle, prolonged rain as warm air rises gradually over cold air.",
        "difficulty": "medium"
      },
      {
        "id": "tides_038",
        "module": "tides_weather",
        "question": "What is the Beaufort scale used for?",
        "image": "tides_038.svg",
        "options": [
          "Estimating wind force",
          "Measuring tide height",
          "Predicting fog",
          "Measuring atmospheric pressure"
        ],
        "correctAnswer": 0,
        "explanation": "The Beaufort scale estimates wind force based on observed effects on the sea and land.",
        "difficulty": "easy"
      },
      {
        "id": "tides_039",
        "module": "tides_weather",
        "question": "Which wind is often strongest near the surface due to friction?",
        "image": "tides_039.svg",
        "options": [
          "Surface wind",
          "Upper-air wind",
          "Jet stream",
          "Prevailing wind"
        ],
        "correctAnswer": 0,
        "explanation": "Friction at the Earth's surface slows winds but can cause turbulence and stronger gusts locally.",
        "difficulty": "medium"
      },
      {
        "id": "tides_040",
        "module": "tides_weather",
        "question": "What effect does a low-pressure system have on sea level?",
        "image": "tides_040.svg",
        "options": [
          "Raises local sea level",
          "Lowers sea level",
          "No effect",
          "Reverses tidal current"
        ],
        "correctAnswer": 0,
        "explanation": "Low pressure allows the sea surface to rise, sometimes significantly in storms.",
        "difficulty": "medium"
      },
      {
        "id": "tides_041",
        "module": "tides_weather",
        "question": "What is a storm surge?",
        "image": "tides_041.svg",
        "options": [
          "Abnormal rise in sea level during storms",
          "Regular tidal high water",
          "Strong tidal current",
          "Wave caused by earthquakes"
        ],
        "correctAnswer": 0,
        "explanation": "A storm surge is a sudden, abnormal rise in sea level due to low pressure and strong winds during a storm.",
        "difficulty": "medium"
      },
      {
        "id": "tides_042",
        "module": "tides_weather",
        "question": "What is the effect of wind against a tidal current?",
        "image": "tides_042.svg",
        "options": [
          "Can increase wave height and sea roughness",
          "Reduces tide height",
          "Reverses wind direction",
          "Calms the sea"
        ],
        "correctAnswer": 0,
        "explanation": "When wind opposes a tidal current, waves become steeper and seas rougher.",
        "difficulty": "medium"
      },
      {
        "id": "tides_043",
        "module": "tides_weather",
        "question": "What is the term for the line of no tidal current in a tidal river?",
        "image": "tides_043.svg",
        "options": [
          "Slack water",
          "High water",
          "Low water",
          "Tidal bore"
        ],
        "correctAnswer": 0,
        "explanation": "Slack water is the brief period when tidal currents stop changing direction.",
        "difficulty": "medium"
      },
      {
        "id": "tides_044",
        "module": "tides_weather",
        "question": "Which factor affects wave height the most?",
        "image": "tides_044.svg",
        "options": [
          "Wind speed, duration, and fetch",
          "Tidal height",
          "Moon phase",
          "Water temperature"
        ],
        "correctAnswer": 0,
        "explanation": "Wave height is mainly influenced by wind speed, duration, and the distance over which it blows (fetch).",
        "difficulty": "medium"
      },
      {
        "id": "tides_045",
        "module": "tides_weather",
        "question": "What is a white capping on waves an indication of?",
        "image": "tides_045.svg",
        "options": [
          "Wind over 15 knots, rough seas",
          "High tide",
          "Low pressure",
          "Strong current only"
        ],
        "correctAnswer": 0,
        "explanation": "White caps indicate the wind is strong enough to break wave crests, typically over 15 knots.",
        "difficulty": "medium"
      },
      {
        "id": "tides_046",
        "module": "tides_weather",
        "question": "What is a fetch in terms of waves?",
        "image": "tides_046.svg",
        "options": [
          "Distance over water that wind blows",
          "Time between waves",
          "Wave height",
          "Direction of tide"
        ],
        "correctAnswer": 0,
        "explanation": "Fetch is the distance over which wind blows without obstruction, affecting wave height.",
        "difficulty": "medium"
      },
      {
        "id": "tides_047",
        "module": "tides_weather",
        "question": "Which effect does temperature have on wind?",
        "image": "tides_047.svg",
        "options": [
          "Creates pressure differences leading to wind",
          "Reverses tidal current",
          "Changes moon phase",
          "Calms waves"
        ],
        "correctAnswer": 0,
        "explanation": "Temperature differences create pressure gradients that drive wind.",
        "difficulty": "medium"
      },
      {
        "id": "tides_048",
        "module": "tides_weather",
        "question": "What does a falling tide indicate?",
        "image": "tides_048.svg",
        "options": [
          "Water level decreasing",
          "Water level rising",
          "Wind increasing",
          "Storm approaching"
        ],
        "correctAnswer": 0,
        "explanation": "A falling tide means the water level is dropping toward low water.",
        "difficulty": "easy"
      },
      {
        "id": "tides_049",
        "module": "tides_weather",
        "question": "What is the effect of a wind blowing in the same direction as a tidal current?",
        "image": "tides_049.svg",
        "options": [
          "Can increase current speed and smooth seas",
          "Decreases tidal range",
          "Creates a tidal bore",
          "Calms barometric pressure"
        ],
        "correctAnswer": 0,
        "explanation": "Wind blowing with the tidal current can speed up the flow and produce smoother seas.",
        "difficulty": "medium"
      },
      {
        "id": "tides_050",
        "module": "tides_weather",
        "question": "Which tool helps sailors estimate tidal stream strength and direction?",
        "image": "tides_050.svg",
        "options": [
          "Tide and tidal stream tables",
          "Barometer",
          "Anemometer",
          "Thermometer"
        ],
        "correctAnswer": 0,
        "explanation": "Tide and tidal stream tables provide predicted strength and direction of tidal currents.",
        "difficulty": "medium"
      },
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
      },
      {
        "id": "safety_001",
        "module": "safety",
        "question": "What is the primary purpose of a lifejacket?",
        "image": "safety_001.svg",
        "options": [
          "Keep you afloat in water",
          "Signal for help",
          "Protect from cold",
          "Assist navigation"
        ],
        "correctAnswer": 0,
        "explanation": "Lifejackets are designed to keep a person afloat and their head above water in an emergency.",
        "difficulty": "easy"
      },
      {
        "id": "safety_002",
        "module": "safety",
        "question": "What colour is most commonly used for lifejackets?",
        "image": "safety_002.svg",
        "options": [
          "Bright orange or red",
          "Blue",
          "Green",
          "White"
        ],
        "correctAnswer": 0,
        "explanation": "Bright orange or red lifejackets are used for maximum visibility in water.",
        "difficulty": "easy"
      },
      {
        "id": "safety_003",
        "module": "safety",
        "question": "What is the purpose of a lifebuoy?",
        "image": "safety_003.svg",
        "options": [
          "Rescue a person overboard",
          "Signal a vessel",
          "Measure water depth",
          "Protect equipment"
        ],
        "correctAnswer": 0,
        "explanation": "Lifebuoys are throwable devices used to assist a person in the water to stay afloat until rescued.",
        "difficulty": "easy"
      },
      {
        "id": "safety_004",
        "module": "safety",
        "question": "Which item is essential in an emergency to signal distress at sea?",
        "image": "safety_004.svg",
        "options": [
          "Flares",
          "Binoculars",
          "Anchor",
          "Compass"
        ],
        "correctAnswer": 0,
        "explanation": "Flares are used to signal distress and attract attention during emergencies.",
        "difficulty": "easy"
      },
      {
        "id": "safety_005",
        "module": "safety",
        "question": "What should you do first if someone falls overboard?",
        "image": "safety_005.svg",
        "options": [
          "Keep them in sight and alert crew",
          "Jump in immediately",
          "Turn off engine",
          "Call coastguard first"
        ],
        "correctAnswer": 0,
        "explanation": "The first priority is to keep the person in sight and alert crew while planning recovery.",
        "difficulty": "medium"
      },
      {
        "id": "safety_006",
        "module": "safety",
        "question": "What is the function of a VHF radio onboard?",
        "image": "safety_006.svg",
        "options": [
          "Communicate with other vessels and coastguard",
          "Measure wind speed",
          "Detect depth",
          "Provide navigation lights"
        ],
        "correctAnswer": 0,
        "explanation": "A VHF radio is used for communication with other vessels and emergency services.",
        "difficulty": "medium"
      },
      {
        "id": "safety_007",
        "module": "safety",
        "question": "Which signal indicates a distress call using a VHF radio?",
        "image": "safety_007.svg",
        "options": [
          "Mayday",
          "Pan-Pan",
          "Securité",
          "Over"
        ],
        "correctAnswer": 0,
        "explanation": "‘Mayday’ is the international distress call for life-threatening emergencies.",
        "difficulty": "medium"
      },
      {
        "id": "safety_008",
        "module": "safety",
        "question": "What does ‘Pan-Pan’ indicate on a VHF call?",
        "image": "safety_008.svg",
        "options": [
          "Urgent situation, but not life-threatening",
          "Immediate danger to life",
          "Navigation warning",
          "Routine message"
        ],
        "correctAnswer": 0,
        "explanation": "‘Pan-Pan’ signals an urgent situation requiring help, but not immediately life-threatening.",
        "difficulty": "medium"
      },
      {
        "id": "safety_009",
        "module": "safety",
        "question": "What is the purpose of an EPIRB?",
        "image": "safety_009.svg",
        "options": [
          "Automatically alerts search and rescue",
          "Measures wind speed",
          "Provides lighting at night",
          "Protects against fire"
        ],
        "correctAnswer": 0,
        "explanation": "An EPIRB (Emergency Position Indicating Radio Beacon) transmits distress signals to rescue authorities.",
        "difficulty": "medium"
      },
      {
        "id": "safety_010",
        "module": "safety",
        "question": "Which fire extinguisher is suitable for electrical fires?",
        "image": "safety_010.svg",
        "options": [
          "CO2 extinguisher",
          "Water extinguisher",
          "Foam extinguisher",
          "Wet chemical extinguisher"
        ],
        "correctAnswer": 0,
        "explanation": "CO2 extinguishers are safe for electrical fires as they do not conduct electricity.",
        "difficulty": "medium"
      },
      {
        "id": "safety_011",
        "module": "safety",
        "question": "What is the recommended action if a fire breaks out below deck?",
        "image": "safety_011.svg",
        "options": [
          "Close hatches, use extinguisher, call for help",
          "Open all windows immediately",
          "Turn on engine",
          "Jump overboard"
        ],
        "correctAnswer": 0,
        "explanation": "Closing hatches prevents oxygen feeding the fire; use extinguisher and call for help.",
        "difficulty": "medium"
      },
      {
        "id": "safety_012",
        "module": "safety",
        "question": "Why should a bilge pump be kept in working order?",
        "image": "safety_012.svg",
        "options": [
          "Remove excess water from the boat",
          "Pump fuel",
          "Measure tide",
          "Inflate lifejackets"
        ],
        "correctAnswer": 0,
        "explanation": "Bilge pumps remove water from the boat to prevent flooding and maintain buoyancy.",
        "difficulty": "easy"
      },
      {
        "id": "safety_013",
        "module": "safety",
        "question": "What is the purpose of a jackstay?",
        "image": "safety_013.svg",
        "options": [
          "Provide a safety line when moving on deck",
          "Measure depth",
          "Mark the mast",
          "Anchor the boat"
        ],
        "correctAnswer": 0,
        "explanation": "A jackstay is a line secured along the deck to clip onto for safety when moving on a pitching deck.",
        "difficulty": "medium"
      },
      {
        "id": "safety_014",
        "module": "safety",
        "question": "What is the safe way to recover a man overboard in heavy seas?",
        "image": "safety_014.svg",
        "options": [
          "Use a life sling or lifebuoy and approach from downwind",
          "Turn off engine and wait",
          "Jump in immediately",
          "Anchor immediately"
        ],
        "correctAnswer": 0,
        "explanation": "Approach from downwind using recovery aids like life slings to safely bring the person aboard.",
        "difficulty": "medium"
      },
      {
        "id": "safety_015",
        "module": "safety",
        "question": "Which item should always be accessible in an emergency?",
        "image": "safety_015.svg",
        "options": [
          "Flares and lifejackets",
          "Binoculars",
          "Logbook",
          "Sails"
        ],
        "correctAnswer": 0,
        "explanation": "Lifejackets and flares must be ready for immediate use in an emergency.",
        "difficulty": "easy"
      },
      {
        "id": "safety_016",
        "module": "safety",
        "question": "What is a crucial pre-departure safety check?",
        "image": "safety_016.svg",
        "options": [
          "Check lifejackets, flares, and VHF",
          "Check radio volume",
          "Check galley supplies",
          "Check cabin lighting"
        ],
        "correctAnswer": 0,
        "explanation": "Checking all safety equipment ensures the crew can respond to emergencies.",
        "difficulty": "easy"
      },
      {
        "id": "safety_017",
        "module": "safety",
        "question": "How often should lifejackets be inspected?",
        "image": "safety_017.svg",
        "options": [
          "Before each voyage",
          "Once a year",
          "Only after use",
          "Every 5 years"
        ],
        "correctAnswer": 0,
        "explanation": "Lifejackets should be inspected for wear and functionality before every trip.",
        "difficulty": "easy"
      },
      {
        "id": "safety_018",
        "module": "safety",
        "question": "Which safety device automatically inflates when immersed in water?",
        "image": "safety_018.svg",
        "options": [
          "Automatic inflatable lifejacket",
          "Manual lifebuoy",
          "VHF radio",
          "Bilge pump"
        ],
        "correctAnswer": 0,
        "explanation": "Automatic inflatable lifejackets have a mechanism that triggers inflation on water immersion.",
        "difficulty": "medium"
      },
      {
        "id": "safety_019",
        "module": "safety",
        "question": "What should be done with flares after use?",
        "image": "safety_019.svg",
        "options": [
          "Replace or recharge them",
          "Store damp",
          "Throw overboard",
          "Use only once a year"
        ],
        "correctAnswer": 0,
        "explanation": "Flares must be replaced or recharged to ensure functionality for future emergencies.",
        "difficulty": "medium"
      },
      {
        "id": "safety_020",
        "module": "safety",
        "question": "What is the main hazard of carbon monoxide onboard?",
        "image": "safety_020.svg",
        "options": [
          "Poisoning from exhaust fumes",
          "Fire risk",
          "Flooding",
          "Loss of navigation"
        ],
        "correctAnswer": 0,
        "explanation": "Carbon monoxide from engines or cooking appliances can be deadly if inhaled.",
        "difficulty": "medium"
      },
      {
        "id": "safety_021",
        "module": "safety",
        "question": "Which device is used to signal location at night or in low visibility?",
        "image": "safety_021.svg",
        "options": [
          "Handheld flare or torch",
          "Binoculars",
          "Compass",
          "Lifejacket"
        ],
        "correctAnswer": 0,
        "explanation": "Flares and torches help rescuers locate a vessel or person at night.",
        "difficulty": "easy"
      },
      {
        "id": "safety_022",
        "module": "safety",
        "question": "What is the primary hazard of a vessel taking on water?",
        "image": "safety_022.svg",
        "options": [
          "Capsizing or sinking",
          "Fire",
          "Carbon monoxide",
          "Equipment loss"
        ],
        "correctAnswer": 0,
        "explanation": "Water ingress can compromise buoyancy and stability, leading to capsizing or sinking.",
        "difficulty": "medium"
      },
      {
        "id": "safety_023",
        "module": "safety",
        "question": "How can a crew prevent falling overboard?",
        "image": "safety_023.svg",
        "options": [
          "Use jackstays and lifelines",
          "Wear bright clothes",
          "Anchor frequently",
          "Keep sails down"
        ],
        "correctAnswer": 0,
        "explanation": "Jackstays and lifelines allow crew to clip on and move safely on deck.",
        "difficulty": "medium"
      },
      {
        "id": "safety_024",
        "module": "safety",
        "question": "What is the purpose of a ditch bag?",
        "image": "safety_024.svg",
        "options": [
          "Contain essential survival items if abandoning ship",
          "Store sails",
          "Protect the engine",
          "Carry fishing gear"
        ],
        "correctAnswer": 0,
        "explanation": "Ditch bags hold lifejackets, flares, VHF, and other survival items for emergency abandonment.",
        "difficulty": "medium"
      },
      {
        "id": "safety_025",
        "module": "safety",
        "question": "Which is the most important action in a man overboard situation?",
        "image": "safety_025.svg",
        "options": [
          "Keep the person in sight",
          "Turn off the engine",
          "Sound the horn",
          "Send a flare immediately"
        ],
        "correctAnswer": 0,
        "explanation": "Maintaining visual contact with the person overboard is critical for a successful recovery.",
        "difficulty": "easy"
      },
          {
            "id": "safety_026",
            "module": "safety",
            "question": "Which action is safest when abandoning a vessel in rough seas?",
            "image": "safety_026.svg",
            "options": [
              "Use a life raft and wear a lifejacket",
              "Jump overboard immediately",
              "Anchor the vessel",
              "Turn off all electrical systems"
            ],
            "correctAnswer": 0,
            "explanation": "Using a life raft and lifejacket provides flotation and protection until rescue.",
            "difficulty": "medium"
          },
          {
            "id": "safety_027",
            "module": "safety",
            "question": "What is the correct method to secure a lifejacket when worn?",
            "image": "safety_027.svg",
            "options": [
              "Fasten all straps snugly",
              "Only wear overcoat",
              "Tie to lifeline",
              "Hold in hand"
            ],
            "correctAnswer": 0,
            "explanation": "Lifejackets must be properly fastened to ensure they stay on in the water.",
            "difficulty": "easy"
          },
          {
            "id": "safety_028",
            "module": "safety",
            "question": "How should a liferaft be deployed in an emergency?",
            "image": "safety_028.svg",
            "options": [
              "Pull the painter line to inflate",
              "Jump directly on top",
              "Cut the painter line",
              "Throw overboard and ignore"
            ],
            "correctAnswer": 0,
            "explanation": "Pulling the painter line activates inflation and secures the raft for boarding safely.",
            "difficulty": "medium"
          },
          {
            "id": "safety_029",
            "module": "safety",
            "question": "Which item is essential in a survival kit?",
            "image": "safety_029.svg",
            "options": [
              "Flares, water, food, first aid",
              "Extra sails",
              "Anchor and chain",
              "Navigation lights"
            ],
            "correctAnswer": 0,
            "explanation": "A survival kit should contain essentials for sustaining life and signaling for rescue.",
            "difficulty": "medium"
          },
          {
            "id": "safety_030",
            "module": "safety",
            "question": "Which signal is used to indicate a life-threatening emergency by day?",
            "image": "safety_030.svg",
            "options": [
              "Waving arms or raising orange flag",
              "Sounding horn once",
              "Flashing a torch",
              "Raising white flag"
            ],
            "correctAnswer": 0,
            "explanation": "Waving arms or an orange flag are visual distress signals during daylight.",
            "difficulty": "easy"
          },
          {
            "id": "safety_031",
            "module": "safety",
            "question": "What is the main hazard of fuel spills onboard?",
            "image": "safety_031.svg",
            "options": [
              "Fire and explosion",
              "Flooding",
              "Capsizing",
              "Engine overheating"
            ],
            "correctAnswer": 0,
            "explanation": "Fuel spills are flammable and can ignite, posing a serious fire or explosion hazard.",
            "difficulty": "medium"
          },
          {
            "id": "safety_032",
            "module": "safety",
            "question": "Which personal safety item is recommended when working on deck in rough weather?",
            "image": "safety_032.svg",
            "options": [
              "Harness and lifeline",
              "Hat and gloves",
              "Waterproof jacket only",
              "Sunglasses"
            ],
            "correctAnswer": 0,
            "explanation": "Wearing a harness clipped to a lifeline prevents falling overboard in rough seas.",
            "difficulty": "medium"
          },
          {
            "id": "safety_033",
            "module": "safety",
            "question": "What is the correct use of a hand-held VHF in an emergency?",
            "image": "safety_033.svg",
            "options": [
              "Transmit ‘Mayday’ or ‘Pan-Pan’",
              "Play music",
              "Measure wind speed",
              "Check battery level only"
            ],
            "correctAnswer": 0,
            "explanation": "Hand-held VHF radios are used to call for assistance with correct distress signals.",
            "difficulty": "medium"
          },
          {
            "id": "safety_034",
            "module": "safety",
            "question": "Which signal indicates urgent weather information?",
            "image": "safety_034.svg",
            "options": [
              "Securité",
              "Mayday",
              "Pan-Pan",
              "Flare"
            ],
            "correctAnswer": 0,
            "explanation": "‘Securité’ is used for navigation or weather warnings that are important but not life-threatening.",
            "difficulty": "medium"
          },
          {
            "id": "safety_035",
            "module": "safety",
            "question": "How should a fire extinguisher be used onboard?",
            "image": "safety_035.svg",
            "options": [
              "Pull pin, aim at base, squeeze, sweep",
              "Spray into air",
              "Cover flames with cloth",
              "Pour water over fire"
            ],
            "correctAnswer": 0,
            "explanation": "Correct use involves pulling the pin, aiming at the fire base, squeezing the handle, and sweeping side to side.",
            "difficulty": "medium"
          },
          {
            "id": "safety_036",
            "module": "safety",
            "question": "Which type of fire is a foam extinguisher suitable for?",
            "image": "safety_036.svg",
            "options": [
              "Flammable liquids",
              "Electrical fires",
              "Wood fires",
              "Metal fires"
            ],
            "correctAnswer": 0,
            "explanation": "Foam extinguishers are effective on flammable liquid fires (Class B).",
            "difficulty": "medium"
          },
          {
            "id": "safety_037",
            "module": "safety",
            "question": "Which action reduces risk of fire in the engine compartment?",
            "image": "safety_037.svg",
            "options": [
              "Regular inspection and fuel leak checks",
              "Keeping doors open",
              "Turning off bilge pumps",
              "Storing sails nearby"
            ],
            "correctAnswer": 0,
            "explanation": "Regular inspection and ensuring there are no fuel or oil leaks reduces fire hazards.",
            "difficulty": "medium"
          },
          {
            "id": "safety_038",
            "module": "safety",
            "question": "What is the primary hazard of electrical faults onboard?",
            "image": "safety_038.svg",
            "options": [
              "Fire and electrocution",
              "Tide change",
              "Capsizing",
              "Wind shift"
            ],
            "correctAnswer": 0,
            "explanation": "Electrical faults can start fires or cause electrocution if safety precautions are not followed.",
            "difficulty": "medium"
          },
          {
            "id": "safety_039",
            "module": "safety",
            "question": "Which method prevents hypothermia in cold water?",
            "image": "safety_039.svg",
            "options": [
              "Wear thermal layers and lifejacket",
              "Swim rapidly",
              "Remove wet clothes",
              "Stand on deck"
            ],
            "correctAnswer": 0,
            "explanation": "Insulating layers and a lifejacket help retain body heat and prevent hypothermia.",
            "difficulty": "medium"
          },
          {
            "id": "safety_040",
            "module": "safety",
            "question": "How often should fire drills be conducted onboard?",
            "image": "safety_040.svg",
            "options": [
              "Regularly before departure or weekly",
              "Once a year",
              "Only in summer",
              "Never"
            ],
            "correctAnswer": 0,
            "explanation": "Regular drills ensure crew knows how to respond quickly in case of fire.",
            "difficulty": "medium"
          },
          {
            "id": "safety_041",
            "module": "safety",
            "question": "What is the correct action if someone is injured onboard?",
            "image": "safety_041.svg",
            "options": [
              "Apply first aid and seek medical help",
              "Ignore and continue sailing",
              "Only call coastguard",
              "Wait until next port"
            ],
            "correctAnswer": 0,
            "explanation": "Immediate first aid and seeking medical assistance is critical for onboard injuries.",
            "difficulty": "medium"
          },
          {
            "id": "safety_042",
            "module": "safety",
            "question": "Which item helps prevent falls when moving on deck in rough seas?",
            "image": "safety_042.svg",
            "options": [
              "Safety harness clipped to jackstay",
              "Lifejacket alone",
              "Throwing line overboard",
              "Wearing boots"
            ],
            "correctAnswer": 0,
            "explanation": "A harness clipped to a jackstay prevents crew from falling overboard in rough conditions.",
            "difficulty": "medium"
          },
          {
            "id": "safety_043",
            "module": "safety",
            "question": "What is a common cause of man overboard accidents?",
            "image": "safety_043.svg",
            "options": [
              "Slips, trips, or loss of balance on deck",
              "Engine failure",
              "Fog",
              "Anchoring incorrectly"
            ],
            "correctAnswer": 0,
            "explanation": "Most overboard accidents occur due to slipping, tripping, or losing balance on deck.",
            "difficulty": "easy"
          },
          {
            "id": "safety_044",
            "module": "safety",
            "question": "Why should a lifebuoy be attached to a line?",
            "image": "safety_044.svg",
            "options": [
              "To pull a person to safety",
              "Prevent it from being stolen",
              "Measure water depth",
              "Anchor the boat"
            ],
            "correctAnswer": 0,
            "explanation": "A lifebuoy attached to a line allows rescuers to retrieve a person overboard safely.",
            "difficulty": "medium"
          },
          {
            "id": "safety_045",
            "module": "safety",
            "question": "What is the main hazard of rough weather onboard?",
            "image": "safety_045.svg",
            "options": [
              "Crew injury or man overboard",
              "Anchor dragging",
              "Navigation lights failing",
              "Bilge pump stopping"
            ],
            "correctAnswer": 0,
            "explanation": "Rough weather increases the risk of crew injury or falling overboard.",
            "difficulty": "medium"
          },
          {
            "id": "safety_046",
            "module": "safety",
            "question": "Which personal protective equipment is recommended when handling sails and ropes?",
            "image": "safety_046.svg",
            "options": [
              "Gloves",
              "Lifejacket",
              "Helmet",
              "Boots only"
            ],
            "correctAnswer": 0,
            "explanation": "Gloves protect hands from rope burns and injuries when handling lines.",
            "difficulty": "medium"
          },
          {
            "id": "safety_047",
            "module": "safety",
            "question": "Which device is used to locate a vessel in distress electronically?",
            "image": "safety_047.svg",
            "options": [
              "EPIRB",
              "Radar reflector",
              "Lifejacket",
              "Bilge pump"
            ],
            "correctAnswer": 0,
            "explanation": "EPIRBs transmit signals to satellites to alert rescue services to a vessel in distress.",
            "difficulty": "medium"
          },
          {
            "id": "safety_048",
            "module": "safety",
            "question": "What is the safest way to move on deck in heavy seas?",
            "image": "safety_048.svg",
            "options": [
              "Clip onto jackstay with harness",
              "Hold onto mast only",
              "Walk normally",
              "Sit down"
            ],
            "correctAnswer": 0,
            "explanation": "Using a harness clipped to a jackstay ensures safety when the deck is wet and moving.",
            "difficulty": "medium"
          },
          {
            "id": "safety_049",
            "module": "safety",
            "question": "What should you do if a crewmember is unconscious in water?",
            "image": "safety_049.svg",
            "options": [
              "Bring them aboard, start first aid immediately",
              "Wait for help",
              "Throw them a line",
              "Call VHF only"
            ],
            "correctAnswer": 0,
            "explanation": "Immediate recovery and first aid is crucial to prevent drowning or further injury.",
            "difficulty": "medium"
          },
          {
            "id": "safety_050",
            "module": "safety",
            "question": "Which action should be taken if a small leak is detected in the hull?",
            "image": "safety_050.svg",
            "options": [
              "Use bilge pump and patch if possible",
              "Ignore and continue",
              "Anchor immediately",
              "Abandon vessel immediately"
            ],
            "correctAnswer": 0,
            "explanation": "Small leaks should be managed with the bilge pump and temporary patch to prevent flooding while seeking assistance.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_001",
            "module": "mayday_procedures",
            "question": "What is the first step when making a Mayday call on VHF radio?",
            "image": "mayday_001.svg",
            "options": [
              "Say 'Mayday' three times, then state your vessel name and position",
              "Switch on engine",
              "Raise anchor",
              "Sound horn continuously"
            ],
            "correctAnswer": 0,
            "explanation": "The correct Mayday procedure begins with 'Mayday' repeated three times, followed by the vessel name and position.",
            "difficulty": "easy"
          },
          {
            "id": "mayday_002",
            "module": "mayday_procedures",
            "question": "Which channel is primarily used for Mayday calls on VHF?",
            "image": "mayday_002.svg",
            "options": [
              "Channel 16",
              "Channel 12",
              "Channel 8",
              "Channel 70"
            ],
            "correctAnswer": 0,
            "explanation": "VHF Channel 16 (156.8 MHz) is the international distress, safety, and calling channel.",
            "difficulty": "easy"
          },
          {
            "id": "mayday_003",
            "module": "mayday_procedures",
            "question": "What does 'Pan-Pan' indicate?",
            "image": "mayday_003.svg",
            "options": [
              "Urgent situation but not immediately life-threatening",
              "Immediate danger to life",
              "Navigational warning",
              "Routine communication"
            ],
            "correctAnswer": 0,
            "explanation": "'Pan-Pan' signals an urgent problem that does not immediately threaten life or the vessel.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_004",
            "module": "mayday_procedures",
            "question": "What does 'Securité' indicate?",
            "image": "mayday_004.svg",
            "options": [
              "Safety message or navigational warning",
              "Life-threatening emergency",
              "Routine radio check",
              "Anchor warning"
            ],
            "correctAnswer": 0,
            "explanation": "'Securité' signals important safety information or navigational warnings, not an immediate emergency.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_005",
            "module": "mayday_procedures",
            "question": "What information must be included in a Mayday call?",
            "image": "mayday_005.svg",
            "options": [
              "Vessel name, position, nature of distress, number of people onboard",
              "Engine type, sail color, anchor size",
              "Time of day only",
              "Wind direction only"
            ],
            "correctAnswer": 0,
            "explanation": "Essential details help rescue authorities respond effectively and locate the vessel.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_006",
            "module": "mayday_procedures",
            "question": "If your position is unknown during a Mayday, what should you do?",
            "image": "mayday_006.svg",
            "options": [
              "Give last known position, course, and speed",
              "Remain silent",
              "Only sound horn",
              "Raise sails"
            ],
            "correctAnswer": 0,
            "explanation": "Providing last known position, course, and speed allows rescuers to estimate your current location.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_007",
            "module": "mayday_procedures",
            "question": "What is an EPIRB used for?",
            "image": "mayday_007.svg",
            "options": [
              "Transmit distress signal to satellites automatically",
              "Measure wind speed",
              "Store emergency flares",
              "Hold ropes"
            ],
            "correctAnswer": 0,
            "explanation": "EPIRBs transmit distress signals to alert rescue authorities of your location.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_008",
            "module": "mayday_procedures",
            "question": "How often should you repeat a Mayday call if no one responds?",
            "image": "mayday_008.svg",
            "options": [
              "Every few minutes until acknowledged",
              "Once and stop",
              "Every hour",
              "Only at sunrise"
            ],
            "correctAnswer": 0,
            "explanation": "Repeating the call ensures nearby vessels or coastguard stations receive it.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_009",
            "module": "mayday_procedures",
            "question": "Which distress signal can be used visually during the day?",
            "image": "mayday_009.svg",
            "options": [
              "Orange flag with black square and circle",
              "White flag",
              "Blue flag",
              "Anchor line waving"
            ],
            "correctAnswer": 0,
            "explanation": "The orange flag with black square and circle is internationally recognized as a visual distress signal.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_010",
            "module": "mayday_procedures",
            "question": "Which distress signal can be used visually at night?",
            "image": "mayday_010.svg",
            "options": [
              "Red flares",
              "White lantern",
              "Blue light",
              "Green torch"
            ],
            "correctAnswer": 0,
            "explanation": "Red flares are used to signal distress visually at night.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_011",
            "module": "mayday_procedures",
            "question": "What is the purpose of a DSC (Digital Selective Calling) distress alert?",
            "image": "mayday_011.svg",
            "options": [
              "Automatically send distress with GPS position",
              "Check weather forecast",
              "Monitor engine status",
              "Sound anchor alarm"
            ],
            "correctAnswer": 0,
            "explanation": "DSC alerts transmit the vessel’s position digitally to rescue authorities quickly.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_012",
            "module": "mayday_procedures",
            "question": "What should you do immediately after sending a Mayday?",
            "image": "mayday_012.svg",
            "options": [
              "Keep radio on listening for instructions",
              "Raise sails",
              "Drop anchor",
              "Turn off all electronics"
            ],
            "correctAnswer": 0,
            "explanation": "Maintaining a listening watch ensures you receive instructions from rescue services.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_013",
            "module": "mayday_procedures",
            "question": "What is a 'Mayday Relay'?",
            "image": "mayday_013.svg",
            "options": [
              "A vessel relays another vessel’s distress call",
              "A type of anchor",
              "A visual flare",
              "A flag signal"
            ],
            "correctAnswer": 0,
            "explanation": "Other vessels or coast stations may relay a distress call to ensure it reaches authorities.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_014",
            "module": "mayday_procedures",
            "question": "Which of these is NOT required in a Mayday call?",
            "image": "mayday_014.svg",
            "options": [
              "Vessel color",
              "Vessel name",
              "Position",
              "Nature of distress"
            ],
            "correctAnswer": 0,
            "explanation": "Vessel color is helpful but not a mandatory part of the Mayday call.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_015",
            "module": "mayday_procedures",
            "question": "When should you send a Mayday instead of Pan-Pan?",
            "image": "mayday_015.svg",
            "options": [
              "When there is imminent danger to life or vessel",
              "When low on fuel",
              "When unsure of position",
              "For routine communication"
            ],
            "correctAnswer": 0,
            "explanation": "Mayday is reserved for life-threatening or vessel-threatening emergencies.",
            "difficulty": "easy"
          },
          {
            "id": "mayday_016",
            "module": "mayday_procedures",
            "question": "What is the maximum distance a VHF Mayday can typically reach?",
            "image": "mayday_016.svg",
            "options": [
              "Line-of-sight up to ~20–30 nautical miles",
              "Unlimited",
              "1 mile",
              "100 miles"
            ],
            "correctAnswer": 0,
            "explanation": "VHF operates line-of-sight, so range depends on antenna height and atmospheric conditions.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_017",
            "module": "mayday_procedures",
            "question": "What is the purpose of a PLB (Personal Locator Beacon)?",
            "image": "mayday_017.svg",
            "options": [
              "Transmit personal distress signal with GPS position",
              "Measure wind",
              "Control autopilot",
              "Power VHF radio"
            ],
            "correctAnswer": 0,
            "explanation": "PLBs are personal emergency transmitters to alert rescue services in case of man overboard or individual distress.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_018",
            "module": "mayday_procedures",
            "question": "When using flares, how should they be fired in a Mayday situation?",
            "image": "mayday_018.svg",
            "options": [
              "One at a time, with 1-minute interval",
              "All at once",
              "Into the water only",
              "Under the boom"
            ],
            "correctAnswer": 0,
            "explanation": "Flares should be fired individually at intervals to maximize visibility and effectiveness.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_019",
            "module": "mayday_procedures",
            "question": "Which type of flare is suitable for daylight use?",
            "image": "mayday_019.svg",
            "options": [
              "Orange smoke flare",
              "Red flare",
              "White flare",
              "Green flare"
            ],
            "correctAnswer": 0,
            "explanation": "Orange smoke is highly visible during daylight and indicates distress.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_020",
            "module": "mayday_procedures",
            "question": "What should you do if your Mayday is acknowledged?",
            "image": "mayday_020.svg",
            "options": [
              "Provide further details and follow instructions",
              "Turn off VHF",
              "Raise sails",
              "Drop anchor"
            ],
            "correctAnswer": 0,
            "explanation": "Once acknowledged, continue communication and follow the rescue authority’s guidance.",
            "difficulty": "easy"
          },
          {
            "id": "mayday_021",
            "module": "mayday_procedures",
            "question": "What is the recommended VHF radio procedure before abandoning ship?",
            "image": "mayday_021.svg",
            "options": [
              "Send Mayday giving position, intentions, and number onboard",
              "Shout on deck",
              "Turn off all lights",
              "Lower sails"
            ],
            "correctAnswer": 0,
            "explanation": "Providing clear information ensures rescuers can plan and respond efficiently.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_022",
            "module": "mayday_procedures",
            "question": "When should a vessel use an EPIRB instead of radio Mayday?",
            "image": "mayday_022.svg",
            "options": [
              "If VHF radio fails or vessel is out of range",
              "During routine communication",
              "Only when anchored",
              "Only at night"
            ],
            "correctAnswer": 0,
            "explanation": "EPIRBs are used when other communication means are unavailable or the vessel is beyond radio range.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_023",
            "module": "mayday_procedures",
            "question": "Which info is important if relaying another vessel’s Mayday?",
            "image": "mayday_023.svg",
            "options": [
              "Original vessel name, position, and distress nature",
              "Your vessel color",
              "Wind speed",
              "Sail type"
            ],
            "correctAnswer": 0,
            "explanation": "Relay should include essential details so the rescue authority receives accurate information.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_024",
            "module": "mayday_procedures",
            "question": "How should a crew signal distress in fog?",
            "image": "mayday_024.svg",
            "options": [
              "Sound foghorn in patterns of 6 or 2 seconds as appropriate",
              "Wave arms",
              "Raise sails",
              "Shout"
            ],
            "correctAnswer": 0,
            "explanation": "Foghorns with proper timing are standard auditory distress signals in reduced visibility.",
            "difficulty": "medium"
          },
          {
            "id": "mayday_025",
            "module": "mayday_procedures",
            "question": "What is the recommended action if your Mayday is ignored on VHF?",
            "image": "mayday_025.svg",
            "options": [
              "Repeat call, use DSC, and visual/audible signals",
              "Switch off radio",
              "Anchor immediately",
              "Hoist sails"
            ],
            "correctAnswer": 0,
            "explanation": "Persistence with multiple methods increases chances of being noticed and rescued.",
            "difficulty": "medium"
          },
    ],
};
