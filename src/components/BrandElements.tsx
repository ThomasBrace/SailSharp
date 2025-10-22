// src/components/BrandElements.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

// SVG Content Maps
const svgContentMap: { [key: string]: string } = {
  ship: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1480.6 1391.9">
  <g id="Boat_Fill" data-name="Boat Fill">
    <g>
      <polygon points="294.3 502.5 745.3 600.9 1198.5 498.9 745.3 650.3 294.3 502.5" style="fill: #bcbec0;"/>
      <polygon points="294.3 502.5 470.6 813.7 1035.1 812.8 1198.5 498.9 745.3 650.3 294.3 502.5" style="fill: #fff;"/>
      <polygon points="742.9 318 579.6 596.1 745.3 650.3 905.6 596.8 742.9 318" style="fill: #fff;"/>
    </g>
  </g>
  <g id="Boat_Decoration" data-name="Boat Decoration">
    <g>
      <polygon points="741.5 318 747.3 650.5 904 596.9 741.5 318" style="fill: #f1f2f2;"/>
      <polyline points="746.4 656.3 1035.1 812.8 1198.5 498.9 745.3 650.3" style="fill: #f1f2f2;"/>
      <polyline points="470.8 809.3 746.4 656.3 1036.6 810" style="fill: #e6e7e8;"/>
    </g>
  </g>
  <g id="Boat_Fold_Lines" data-name="Boat Fold Lines">
    <g>
      <line x1="744.1" y1="350.2" x2="746.4" y2="631.5" style="fill: none; stroke: #bcbec0; stroke-miterlimit: 10; stroke-width: 2px;"/>
      <line x1="487.2" y1="799.6" x2="734.7" y2="662.8" style="fill: none; stroke: #bcbec0; stroke-miterlimit: 10; stroke-width: 2px;"/>
      <line x1="1013.9" y1="797.8" x2="758.8" y2="662.8" style="fill: none; stroke: #bcbec0; stroke-miterlimit: 10; stroke-width: 2px;"/>
    </g>
  </g>
  <g id="Outlines">
    <g>
      <polygon points="294.3 502.5 470.6 813.7 1035.1 812.8 1198.5 498.9 745.3 650.3 294.3 502.5" style="fill: none; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 8px;"/>
      <polygon points="743 317.9 580 596.4 745.7 650.7 905.7 596.6 743 317.9" style="fill: none; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 8px;"/>
      <polygon points="890.4 568.2 905.7 596.6 1198.5 498.9 890.4 568.2" style="fill: none; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 8px;"/>
      <polygon points="596.4 568.4 580 596.4 294.3 502.5 596.4 568.4" style="fill: none; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 8px;"/>
    </g>
  </g>
</svg>`,
  waves: `<svg xmlns="http://www.w3.org/2000/svg" width="5195" height="1366.8" viewBox="0 0 5195 1366.8">
  <g id="Sea_Bottom_copy" data-name="Sea Bottom copy">
    <path d="M5192.5,167.1s-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,1145.3,0,1145.3h5059.2" style="fill: #8ebce5; opacity: .3; stroke: #8ebce5; stroke-linecap: round; stroke-linejoin: round; stroke-width: 5px;"/>
    <path d="M5192.5,351.3h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,961.1,0,961.1h5059.2V351.3Z" style="fill: #8ebce5; opacity: .3; stroke: #8ebce5; stroke-linecap: round; stroke-linejoin: round; stroke-width: 5px;"/>
    <path d="M133.3,546.6l10.9,764.6,5048.3,1.1v-765.7s0,0,0,0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0" style="fill: #8ebce5; opacity: .3; stroke: #8ebce5; stroke-linecap: round; stroke-linejoin: round; stroke-width: 5px;"/>
  </g>
  <g id="Sea_Top_copy" data-name="Sea Top copy">
    <path d="M5192.5,709.1s-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,0,0,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0c-62.2-75.4-148.6-75.4-210.8,0h0c-62.2,75.4-148.6,75.4-210.8,0h0s0,603.2,0,603.2h5059.2" style="fill: #6a8dac; opacity: .3; stroke: #8ebce5; stroke-linecap: round; stroke-linejoin: round; stroke-width: 5px;"/>
    <path d="M133.3,889.8s148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,0,0,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,0,0,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,0,0,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,422.6,0,422.6H133.3" style="fill: #6a8dac; opacity: .3; stroke: #8ebce5; stroke-linecap: round; stroke-linejoin: round; stroke-width: 5px;"/>
    <path d="M5192.5,1312.4H133.3v-241.9h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,0,0,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,0,0,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0s0,0,0,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,148.6-75.4,210.8,0h0c62.2,75.4,148.6,75.4,210.8,0h0c62.2-75.4,210.8,0,210.8,0" style="fill: #6a8dac; opacity: .3; stroke: #8ebce5; stroke-linecap: round; stroke-linejoin: round; stroke-width: 5px;"/>
  </g>
</svg>`,
};

interface ShipLogoProps {
  size?: number;
  style?: any;
}

export const ShipLogo: React.FC<ShipLogoProps> = ({ size = 50, style }) => {
  return (
    <View style={[styles.logoContainer, style]}>
      <SvgXml xml={svgContentMap.ship} width={size} height={size} />
    </View>
  );
};

interface WaveBackgroundProps {
  width?: number;
  height?: number;
  style?: any;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({ 
  width = 300, 
  height = 100, 
  style 
}) => {
  return (
    <View style={[styles.waveContainer, style]}>
      <SvgXml xml={svgContentMap.waves} width={width} height={height} />
    </View>
  );
};

interface AnimatedShipProps {
  size?: number;
  style?: any;
}

export const AnimatedShip: React.FC<AnimatedShipProps> = ({ size = 120, style }) => {
  return (
    <View style={[styles.animatedShipContainer, style]}>
      <SvgXml xml={svgContentMap.ship} width={size} height={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  animatedShipContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

