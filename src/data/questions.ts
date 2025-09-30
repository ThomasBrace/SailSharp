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
        }
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
