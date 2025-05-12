import { PrefabId } from '@hiber3d/hdk-core';
import { HNode,Prefab, useRandom } from '@hiber3d/hdk-react';
import { Distribute } from '@hiber3d/hdk-react-components';

export function Islands() {
  return (
    // <Distribute
    //   itemAreaSizeMin={35}
    //   itemAreaSizeMax={45}
    //   gladeRadius={20}
    //   gapFrequency={0}
    //   outerBoundRadius={200}
    //   renderItem={() => {
    //     const random = useRandom();
    //     const id: PrefabId = random.fromArray(['cliff_01_formation', 'cliff_01_wall', 'cliff_01_pillar']);

    //     return <Prefab id={id} y={random.range(-10, 3)} rotY={random.range(0, 360)} scale={random.range(1, 5)} />;
    //   }}
    // />
    <HNode>
      <Prefab x={100} z={80} y={-65} scale={2} id="terrain_island_03"/>
      {/* <Prefab x={-10} y={-5} z={30} rotY={180} scale={8} id="cliff_02_03"/> */}
      <Prefab id="rock_01_t1"/>
    </HNode>
  );
}
