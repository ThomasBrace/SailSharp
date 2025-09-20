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
      image: 'boat_sides_001.svg',
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
      image: 'rigging_002.svg',
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
      image: 'wind_direction_001.svg',
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
      image: 'sailing_maneuvers_001.svg',
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
      image: 'rigging_003.svg',
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
      image: 'depth_001.svg',
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
      image: 'wind_direction_002.svg',
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
      image: 'rigging_004.svg',
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
  // Placeholder for other modules
  chart_symbols: [],
  anchorwork: [],
  lights: [],
  buoyage: [],
  irpcs: [],
  weather: [],
  safety: [],
};
