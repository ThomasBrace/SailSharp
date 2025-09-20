// src/utils/svgLoader.ts

import React from 'react';
import { SvgXml } from 'react-native-svg';

// SVG content as strings (you can also load these from files)
export const svgContent = {
  boat_parts_001: `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <!-- Boat hull -->
    <path d="M20 120 Q100 100 180 120 L180 140 Q100 130 20 140 Z" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    
    <!-- Mast -->
    <line x1="100" y1="120" x2="100" y2="40" stroke="#654321" stroke-width="3"/>
    
    <!-- Bow (front) -->
    <circle cx="20" cy="130" r="3" fill="#FF6B6B"/>
    <text x="15" y="125" font-size="12" fill="#FF6B6B" font-weight="bold">Bow</text>
    
    <!-- Stern (rear) -->
    <circle cx="180" cy="130" r="3" fill="#4ECDC4"/>
    <text x="175" y="125" font-size="12" fill="#4ECDC4" font-weight="bold">Stern</text>
    
    <!-- Port side -->
    <circle cx="50" cy="130" r="3" fill="#45B7D1"/>
    <text x="45" y="115" font-size="12" fill="#45B7D1" font-weight="bold">Port</text>
    
    <!-- Starboard side -->
    <circle cx="150" cy="130" r="3" fill="#96CEB4"/>
    <text x="145" y="115" font-size="12" fill="#96CEB4" font-weight="bold">Starboard</text>
    
    <!-- Water line -->
    <line x1="0" y1="120" x2="200" y2="120" stroke="#4A90E2" stroke-width="2" stroke-dasharray="5,5"/>
  </svg>`,
  
  rigging_001: `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <!-- Boat hull -->
    <path d="M20 120 Q100 100 180 120 L180 140 Q100 130 20 140 Z" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    
    <!-- Mast -->
    <line x1="100" y1="120" x2="100" y2="40" stroke="#654321" stroke-width="3"/>
    
    <!-- Boom -->
    <line x1="100" y1="60" x2="160" y2="60" stroke="#654321" stroke-width="2"/>
    
    <!-- Mainsail -->
    <path d="M100 40 L100 60 L160 60 Z" fill="#E8F4FD" stroke="#4A90E2" stroke-width="1"/>
    
    <!-- Labels -->
    <text x="95" y="35" font-size="12" fill="#654321" font-weight="bold">Mast</text>
    <text x="130" y="55" font-size="12" fill="#654321" font-weight="bold">Boom</text>
    
    <!-- Water line -->
    <line x1="0" y1="120" x2="200" y2="120" stroke="#4A90E2" stroke-width="2" stroke-dasharray="5,5"/>
  </svg>`,
  
  wind_direction_001: `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <!-- Boat hull -->
    <path d="M20 120 Q100 100 180 120 L180 140 Q100 130 20 140 Z" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    
    <!-- Mast -->
    <line x1="100" y1="120" x2="100" y2="40" stroke="#654321" stroke-width="3"/>
    
    <!-- Wind direction arrows -->
    <path d="M50 30 L70 30 M60 20 L60 40 M55 25 L60 20 L65 25" stroke="#FF6B6B" stroke-width="2" fill="none"/>
    <path d="M150 30 L130 30 M140 20 L140 40 M135 25 L140 20 L145 25" stroke="#FF6B6B" stroke-width="2" fill="none"/>
    
    <!-- Labels -->
    <text x="45" y="50" font-size="12" fill="#FF6B6B" font-weight="bold">Windward</text>
    <text x="135" y="50" font-size="12" fill="#4ECDC4" font-weight="bold">Leeward</text>
    
    <!-- Windward side highlight -->
    <rect x="20" y="100" width="80" height="20" fill="#FFE5E5" opacity="0.3"/>
    
    <!-- Leeward side highlight -->
    <rect x="100" y="100" width="80" height="20" fill="#E5F9F6" opacity="0.3"/>
    
    <!-- Water line -->
    <line x1="0" y1="120" x2="200" y2="120" stroke="#4A90E2" stroke-width="2" stroke-dasharray="5,5"/>
  </svg>`,
};

// Helper function to render SVG component
export const renderSvg = (imageName: string, width: number = 200, height: number = 150) => {
  const svgContent = svgContent[imageName as keyof typeof svgContent];
  if (!svgContent) {
    return null;
  }
  
  return (
    <SvgXml 
      xml={svgContent} 
      width={width} 
      height={height}
    />
  );
};

// Helper function to get SVG content as string
export const getSvgContent = (imageName: string): string => {
  return svgContent[imageName as keyof typeof svgContent] || '';
};