// import {
//   HDKComponent,
//   HNode,
//   Prefab,
//   useRandom,
//   PowerUp,
//   Animation,
//   InfoPanel,
// } from "@hiber3d/hdk-react";
// import { Distribute } from "@hiber3d/hdk-react-components";

// // Enum for prefab IDs to ensure type safety
// const FOLIAGE_PREFABS = [
//   "jungle_tree_large",
//   "en_p_jungle_flower_01",
//   "palm_tree_2",
//   "terrain_island_03",
//   "fx_particlesystem_waterfall_01",
//   "fx_particlesystem_dripping_water_01",
//   "fx_particlesystem_fireflies_01",
// ];

// const NEON_MATERIALS = ["t_neon_cyan", "t_neon_purple", "t_neon_pink"];

// // Utility to select random material
// const getRandomNeonMaterial = (random: any) => random.fromArray(NEON_MATERIALS);

// // Main Foliages Component
// export const Foliages: HDKComponent = (props) => {
//   const random = useRandom(); // Revert to RandomSeed type for type safety

//   // Base distribution settings for foliage
//   const baseGladeRadius = 30;
//   const baseItemAreaSizeMin = 4;
//   const baseItemAreaSizeMax = 8;

//   // Render function for main foliage items
//   const renderFoliageItem = () => {
//     // Use range(0, 1) for random float values
//     const isTree = random.range(0, 1) < 0.4; // 40% chance for tall trees
//     const isFlower = random.range(0, 1) < 0.3; // 30% chance for flowers
//     const isTerrain = random.range(0, 1) < 0.15; // 15% chance for terrain patches
//     const isEffect = random.range(0, 1) < 0.1; // 10% chance for effect prefabs
//     const isPowerUp = random.range(0, 1) < 0.05; // 5% chance for hidden PowerUp

//     // Select prefab based on probability
//     let prefabId;
//     if (isTree) {
//       prefabId = random.fromArray(["jungle_tree_large", "palm_tree_2"]);
//     } else if (isFlower) {
//       prefabId = "en_p_jungle_flower_01";
//     } else if (isTerrain) {
//       prefabId = "terrain_island_03";
//     } else if (isEffect) {
//       prefabId = random.fromArray([
//         "fx_particlesystem_waterfall_01",
//         "fx_particlesystem_dripping_water_01",
//         "fx_particlesystem_fireflies_01",
//       ]);
//     } else {
//       prefabId = random.fromArray(FOLIAGE_PREFABS);
//     }

//     // Base scale and rotation
//     const scale = random.range(
//       1,
//       isTree ? 5 : isFlower ? 2.5 : isTerrain ? 3 : isEffect ? 1.5 : 2
//     );
//     const rotX = random.range(-10, 10);
//     const rotY = random.range(0, 360);
//     const rotZ = random.range(-10, 10);

//     // Animation settings with explicit types
//     const animation: {
//       duration: number;
//       easing: string;
//       loop: string;
//       rotY?: number[];
//       scale?: number[];
//       rotZ?: number[];
//     } = isTree
//       ? {
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE",
//           rotY: [rotY - 5, rotY + 5, rotY - 5], // Swaying trees
//         }
//       : isFlower || isEffect
//       ? {
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE" ,
//           scale: [scale * 0.95, scale * 1.05, scale * 0.95], // Pulsing flowers/effects
//         }
//       : {
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE",
//           rotZ: [rotZ - 5, rotZ + 5, rotZ - 5], // Tilting terrain
//         };

//     // Material for tech-themed glow
//     const material =
//       isTree || isFlower ? getRandomNeonMaterial(random) : undefined;

//     return (
//       <HNode x={0} y={0} z={0} rotX={rotX} rotY={rotY} rotZ={rotZ}>
//         <Animation animation={isTree
//       ? {
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE",
//           rotY: [rotY - 5, rotY + 5, rotY - 5], // Swaying trees
//         }
//       : isFlower || isEffect
//       ? {
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE" ,
//           scale: [scale * 0.95, scale * 1.05, scale * 0.95], // Pulsing flowers/effects
//         }
//       : {
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE",
//           rotZ: [rotZ - 5, rotZ + 5, rotZ - 5], // Tilting terrain
//         }}>
//           {/* Main foliage prefab */}
//           <Prefab id={prefabId} scale={scale} material={material} />

//           {/* Hidden PowerUp for interactivity */}
//           {isPowerUp && (
//             <Prefab
//               id={random.fromArray([
//                 "e_m_sprint_speed_increase",
//                 "e_jump_velocity_01",
//                 "e_fx_rocket_01",
//               ])}
//               y={1}
//               scale={1.2}
//             />
//           )}

//           {/* Optional InfoPanel for lore */}
//           {isTree && random.range(0, 1) < 0.1 && (
//             <InfoPanel
//               header="Cybernetic Jungle"
//               body="AI-enhanced flora in a tech ecosystem."
//               url="https://developer.hiber3d.com/docs"
//               y={scale * 0.6}
//               scale={0.8}
//               isOpenInNewTabEnabled={true}
//             >
//               <Prefab id="sign_holographic_01" rotY={180} />
//             </InfoPanel>
//           )}
//         </Animation>
//       </HNode>
//     );
//   };

//   // Render function for ground cover (smaller plants and terrain)
//   const renderGroundCover = () => {
//     const scale = random.range(0.5, 1.5);
//     const prefabId = random.fromArray([
//       "en_p_jungle_flower_01",
//       "terrain_island_03",
//     ]);
//     const rotX = random.range(-5, 5);
//     const rotY = random.range(0, 360);
//     const rotZ = random.range(-5, 5);

//     const animation: {
//       duration: number;
//       easing: string;
//       loop: string;
//       scale: number[];
//     } = {
//       duration: random.range(2, 3),
//       easing: "EASE_IN_OUT_QUAD",
//       loop: "REVERSE" as string,
//       scale: [scale * 0.95, scale * 1.05, scale * 0.95],
//     };

//     return (
//       <HNode x={0} y={0} z={0} rotX={rotX} rotY={rotY} rotZ={rotZ}>
//         <Animation animation={{duration:random.range(2,3),easing:"EASE_IN_OUT_QUAD",loop:"REVERSE",scale:[scale * 0.95, scale * 1.05, scale * 0.95]}}>
//           <Prefab id={prefabId} scale={scale} />
//         </Animation>
//       </HNode>
//     );
//   };

//   // Render function for effect prefabs (waterfalls, fireflies, dripping water)
//   const renderEffectLayer = () => {
//     const prefabId = random.fromArray([
//       "fx_particlesystem_waterfall_01",
//       "fx_particlesystem_dripping_water_01",
//       "fx_particlesystem_fireflies_01",
//     ]);
//     const scale = random.range(1, 2);
//     const rotX = random.range(-5, 5);
//     const rotY = random.range(0, 360);
//     const rotZ = random.range(-5, 5);

//     const animation: {
//       duration: number;
//       easing: string;
//       loop: string;
//       y: number[];
//     } = {
//       duration: random.range(2, 4),
//       easing: "EASE_IN_OUT_QUAD",
//       loop: "REVERSE" as string,
//       y: [0, 0.5, 0],
//     };

//     return (
//       <HNode
//         x={0}
//         y={random.range(0, 1)}
//         z={0}
//         rotX={rotX}
//         rotY={rotY}
//         rotZ={rotZ}
//       >
//         <Animation animation={{
//           duration: random.range(2, 4),
//           easing: "EASE_IN_OUT_QUAD",
//           loop: "REVERSE",
//           y: [0, 0.5, 0],
//         }}>
//           <Prefab id={prefabId} scale={scale} />
//         </Animation>
//       </HNode>
//     );
//   };

//   return (
//     <HNode {...props}>
//       {/* Main Foliage Layer */}
//       <Distribute
//         gladeRadius={baseGladeRadius}
//         itemAreaSizeMin={baseItemAreaSizeMin}
//         itemAreaSizeMax={baseItemAreaSizeMax}
//         renderItem={renderFoliageItem}
//       />

//       {/* Ground Cover Layer */}
//       <Distribute
//         gladeRadius={baseGladeRadius * 1.2}
//         itemAreaSizeMin={2}
//         itemAreaSizeMax={5}
//         renderItem={renderGroundCover}
//       />

//       {/* Effect Layer */}
//       <Distribute
//         gladeRadius={baseGladeRadius * 1.5}
//         itemAreaSizeMin={4}
//         itemAreaSizeMax={7}
//         renderItem={renderEffectLayer}
//       />
//     </HNode>
//   );
// };

import { HDKComponent, Prefab, useRandom } from "@hiber3d/hdk-react";
import { Distribute, RandomTilt } from "@hiber3d/hdk-react-components";

export const Foliages: HDKComponent = (props) => {
  return (
    <Distribute
      {...props}
      gladeRadius={80}
      renderItem={() => {
        const random = useRandom();

        return (
          <RandomTilt scale={random.range(1, 5)}>
            <Prefab
              id={random.fromArray([
                "jungle_tree_large",
                "en_p_jungle_flower_01",
                "palm_tree_2",
                "fx_particlesystem_waterfall_01",
                "fx_particlesystem_dripping_water_01",
                "fx_particlesystem_fireflies_01",
                
              ])}
            />
          </RandomTilt>
        );
      }}
    />
  );
};