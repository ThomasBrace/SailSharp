# MVP Specification: Sailing Qualification Revision App

## 1. MVP Overview

**Product Name:** SailSharp (MVP)  
**Scope:** Complete RYA Day Skipper Theory Course  
**Platform:** iOS (React Native)  
**Timeline:** 8-12 weeks  
**Target Users:** RYA Day Skipper students preparing for theory exam

### MVP Goals
- Validate visual learning approach for maritime concepts
- Test user engagement with gamified quiz format
- Establish technical foundation for future modules
- Achieve 100+ downloads and 4.0+ App Store rating

## 2. Core Features

### 2.1 Course Content Structure

**8 Core Modules, ~80 Questions Total:**

1. **Nautical Terms** (10 questions)
   - Parts of a boat and rigging
   - Directional terms (port, starboard, bow, stern)
   - Wind and sailing terminology
   - Basic seamanship vocabulary

2. **Chart Symbols & Conventions** (10 questions)
   - Understanding chart symbols
   - Depth contours and safe water
   - Navigation marks and buoys
   - Chart scales and projections

3. **Anchorwork** (10 questions)
   - Types of anchors and their uses
   - Anchoring techniques and procedures
   - Anchor rode and scope calculations
   - Anchoring in different conditions

4. **Lights** (10 questions)
   - Navigation lights and their meanings
   - Light characteristics and patterns
   - Vessel identification by lights
   - Port and starboard light requirements

5. **Buoyage** (10 questions)
   - IALA buoyage systems
   - Cardinal, lateral, and special marks
   - Buoy shapes, colors, and topmarks
   - Safe water and isolated danger marks

6. **IRPCS (International Regulations for Preventing Collisions at Sea)** (10 questions)
   - Right of way rules
   - Sound signals and their meanings
   - Overtaking, crossing, and meeting situations
   - Restricted visibility procedures

7. **Weather** (10 questions)
   - Weather systems and fronts
   - Wind patterns and sea breezes
   - Weather forecasting basics
   - Storm recognition and avoidance

8. **Safety** (10 questions)
   - Safety equipment requirements
   - Distress signals and procedures
   - Man overboard procedures
   - Emergency communications

### 2.2 User Interface

**Dashboard Screen:**
- Overall course progress bar (0-100%)
- 8 module cards with completion status
- Overall accuracy percentage
- "Continue Learning" or "Start Course" CTA button
- Achievement badges (8 total - one per module)

**Quiz Screen:**
- Clean, maritime-themed design (blues, whites, nautical fonts)
- Large, clear diagram/image (static SVG/PNG)
- 4 multiple choice answer options
- Progress indicator (Question X of Y)
- "Next" button (disabled until answer selected)

**Results Screen:**
- Immediate feedback on answer correctness
- Explanation text with visual reference
- "Continue" button to next question
- Module completion celebration

**Module Complete Screen:**
- Accuracy percentage for module
- Time taken
- Achievement badge earned
- "Continue to Next Module" or "Review Module" options

### 2.3 Progress Tracking

**Local Data Storage:**
- Module completion status
- Individual question attempts and results
- Overall accuracy percentages
- Time spent per module
- Last accessed module

**Progress Indicators:**
- Module completion badges (✓ or percentage)
- Overall course progress bar
- Accuracy trend (simple up/down indicators)

## 3. Technical Specifications

### 3.1 Technology Stack

**Frontend:**
- React Native (iOS only for MVP)
- React Navigation for screen management
- Redux Toolkit for state management
- React Native SVG for diagrams

**Data Storage:**
- SQLite (react-native-sqlite-storage)
- AsyncStorage for user preferences

**Analytics:**
- Firebase Analytics (basic events)
- Custom analytics for learning progress

**Graphics:**
- Custom SVG diagrams (80-100 total)
- High-resolution PNG fallbacks
- Consistent maritime visual style

### 3.2 App Architecture

**Screen Structure:**
App
├── DashboardScreen
├── ModuleListScreen
├── QuizScreen
├── ResultsScreen
├── ModuleCompleteScreen
└── SettingsScreen (basic)


**State Management:**
```javascript
// Redux Store Structure
{
  user: {
    currentModule: number,
    completedModules: array,
    overallProgress: number
  },
  quiz: {
    currentQuestion: number,
    selectedAnswer: string,
    isAnswered: boolean,
    showResults: boolean
  },
  progress: {
    moduleScores: object,
    totalAccuracy: number,
    timeSpent: object
  }
}
```

### 3.3 Performance Requirements

- App launch time: < 3 seconds
- Quiz screen load time: < 2 seconds
- Smooth transitions between screens
- Responsive touch interactions
- Memory usage: < 100MB

## 4. Content Creation Requirements

### 4.1 Visual Assets

**Diagram Types Needed:**
- Nautical terminology illustrations (10-12 diagrams)
- Chart symbols and conventions (12-15 diagrams)
- Anchoring scenarios and equipment (10-12 diagrams)
- Navigation lights and patterns (12-15 diagrams)
- Buoyage systems and marks (15-18 diagrams)
- Collision avoidance scenarios (10-12 diagrams)
- Weather systems and patterns (8-10 diagrams)
- Safety equipment and procedures (8-10 diagrams)

**Visual Style Guide:**
- Color palette: Maritime blues (#1e3a8a, #3b82f6), whites, grays
- Typography: Clean, readable sans-serif
- Icon style: Simple, outlined maritime symbols
- Consistent visual hierarchy

### 4.2 Question Format

**Standard Question Structure:**
```javascript
{
  id: "nautical_001",
  module: "nautical_terms",
  question: "What is the correct term for the front of a boat?",
  image: "boat_parts_001.svg",
  options: [
    "Bow",
    "Stern",
    "Port",
    "Starboard"
  ],
  correctAnswer: 0,
  explanation: "The bow is the front of the boat, while the stern is the rear.",
  difficulty: "easy"
}
```

## 5. User Experience Flow

### 5.1 First-Time User Journey

1. **App Launch** → Welcome screen with brief intro
2. **Dashboard** → Shows empty course with 8 modules
3. **Start Learning** → Begins Module 1 (Nautical Terms)
4. **Quiz Experience** → 10 questions with immediate feedback
5. **Module Complete** → Shows results and achievement
6. **Continue** → Returns to dashboard with progress

### 5.2 Returning User Journey

1. **App Launch** → Dashboard with progress
2. **Continue Learning** → Resumes from last incomplete module
3. **Review Mode** → Can retake any completed module
4. **Progress Tracking** → See overall accuracy and completion

## 6. Success Metrics

### 6.1 Launch Metrics (3 months)

**User Acquisition:**
- 100+ App Store downloads
- 4.0+ average rating
- 20+ written reviews

**Engagement:**
- 70%+ module completion rate
- 60%+ overall accuracy average
- 3+ sessions per user (average)

**Learning Effectiveness:**
- 80%+ users complete at least 4 modules
- Positive feedback on visual learning approach
- User requests for additional qualifications

### 6.2 Technical Metrics

- App crash rate: < 1%
- Average session duration: 10-15 minutes
- Screen load times: < 2 seconds
- User retention: 40%+ at 7 days

## 7. Development Phases

### Phase 1: Foundation (Weeks 1-3)
- React Native project setup
- Basic navigation structure
- SQLite database schema
- Core Redux state management

### Phase 2: Content Integration (Weeks 4-6)
- Question data structure
- SVG diagram integration
- Quiz screen implementation
- Progress tracking system

### Phase 3: Polish & Testing (Weeks 7-9)
- UI/UX refinement
- Performance optimization
- User testing and feedback
- Bug fixes and improvements

### Phase 4: Launch Preparation (Weeks 10-12)
- App Store submission
- Marketing materials
- User documentation
- Analytics implementation

## 8. Post-MVP Roadmap

### Phase 2 Features (Next 3 months)
- Enhanced animations and interactivity
- Advanced analytics and insights
- Social features (sharing, leaderboards)
- Content management system

### Phase 3 Features (6 months)
- Additional RYA qualifications (Coastal Skipper, Yachtmaster)
- Cloud sync capability
- Offline functionality
- Android version

## 9. Risk Mitigation

### Content Risks
- **Risk:** Incorrect maritime information
- **Mitigation:** Expert review by RYA instructor before launch

### Technical Risks
- **Risk:** Performance issues with graphics
- **Mitigation:** Optimize SVG files, implement lazy loading

### User Adoption Risks
- **Risk:** Low engagement with course content
- **Mitigation:** Focus on quality over quantity, gather user feedback early

---

**Document Version:** 1.1  
**Last Updated:** 20/09/25 
**Changes:** Updated course content to 8 core RYA Day Skipper modules