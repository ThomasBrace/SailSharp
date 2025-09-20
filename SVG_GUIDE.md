# SVG Images Storage Guide

## 📁 Folder Structure

```
src/
├── assets/
│   └── images/
│       └── svg/                    # SVG files stored here
│           ├── boat_parts_001.svg
│           ├── rigging_001.svg
│           ├── wind_direction_001.svg
│           └── ... (more SVG files)
├── utils/
│   └── svgLoader.ts               # SVG utility functions
└── data/
    └── questions.ts               # Question data with image references
```

## 🎯 How to Use SVG Images

### 1. **Store SVG Files**
Place your SVG files in `src/assets/images/svg/` directory.

### 2. **Add SVG Content to Loader**
Update `src/utils/svgLoader.ts` to include your SVG content:

```typescript
export const svgContent = {
  your_image_name: `<svg>...</svg>`,
  // Add more SVGs here
};
```

### 3. **Reference in Questions**
In `src/data/questions.ts`, reference the image:

```typescript
{
  id: 'question_001',
  module: 'nautical_terms',
  question: 'What is the front of a boat called?',
  image: 'boat_parts_001.svg',  // Reference to SVG file
  options: ['Bow', 'Stern', 'Port', 'Starboard'],
  correctAnswer: 0,
  explanation: 'The bow is the front of the boat.',
  difficulty: 'easy'
}
```

### 4. **Display in Quiz**
The QuizScreen automatically displays SVG images when available:

```typescript
{currentQuestionData.image && (
  <View style={styles.imageContainer}>
    {renderSvg(currentQuestionData.image.replace('.svg', ''), 200, 150)}
  </View>
)}
```

## 🛠️ Alternative Approaches

### Option 1: Inline SVG (Current)
- ✅ **Pros**: Fast loading, no file management
- ❌ **Cons**: Larger bundle size, harder to maintain

### Option 2: External SVG Files
- ✅ **Pros**: Smaller bundle, easier maintenance
- ❌ **Cons**: Requires additional setup, slower loading

### Option 3: Convert to React Components
- ✅ **Pros**: Type-safe, reusable components
- ❌ **Cons**: More complex setup, larger bundle

## 📝 Best Practices

1. **Naming Convention**: Use descriptive names like `boat_parts_001.svg`
2. **Size**: Keep SVGs under 200x150px for mobile optimization
3. **Colors**: Use consistent color scheme across all SVGs
4. **Accessibility**: Include proper labels and descriptions
5. **Performance**: Optimize SVG code to reduce file size

## 🔧 Adding New SVG Images

1. Create SVG file in `src/assets/images/svg/`
2. Add SVG content to `svgContent` object in `svgLoader.ts`
3. Reference in question data with `image: 'filename.svg'`
4. Test in quiz to ensure proper display

## 🎨 SVG Design Guidelines

- Use consistent stroke widths (2px for main elements)
- Use semantic colors (blue for water, brown for wood, etc.)
- Include labels for educational purposes
- Keep designs simple and clear for mobile viewing
- Use viewBox for responsive scaling
