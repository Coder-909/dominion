import { HNode, render } from '@hiber3d/hdk-react';
import { Ground, OmnipresentSound, Spawnpoint } from '@hiber3d/hdk-react-components';
import { CircularStructureProps } from '@hiber3d/hdk-react-components';
import { MainWing } from './HouseComponents/MainWing';
import { MainWingInterior } from './HouseComponents/MainWingInterior';
import { SideWing } from './HouseComponents/SideWing';
import { SideWingInterior } from './HouseComponents/SideWingInterior';
import { Surroundings } from './HouseComponents/Surroundings';
import { EnvironmentId } from '@hiber3d/hdk-core';

const roomSettings= {
  numberOfSegments: 30,
  wallThickness: 1,
  itemScaleAdjustment: 1,
  prefabId: 'cube_01',
  topScale: 0.5,
  bottomScale: 0.07,
  offset: 0,
  vertical: false,
};

const lightStrength = 0.1;
const tiltStrength = 0.6;

const House = ({x,y,z}:any) => (
  <HNode>
    {/* <Spawnpoint x={50.5} y={0.3} z={33.1} rotY={10} /> */}
    <MainWing
      lightStrength={lightStrength}
      tiltStrength={tiltStrength}
      radius={12}
      dim={15}
      x={x}
      y={y}
      z={z+20.5}
      roomSettings={roomSettings}>
      <MainWingInterior rotY={45} />
    </MainWing>
    <SideWing
      lightStrength={lightStrength}
      tiltStrength={tiltStrength}
      radius={25}
      dim={8}
      x={x}
      y={y-1}
      z={z}
      roomSettings={roomSettings}>
      <SideWingInterior rotY={35} tiltStrength={tiltStrength} />
    </SideWing>
    <Surroundings gladeRadius={60} outerBoundRadius={300} y={y-2.5} />
    <Ground y={y-2} scaleX={4} scaleZ={4} water={true} waterOffset={-1} material="palette_02_silver" />
    <OmnipresentSound src={{ id: 'a_am_rainforest_01' }} volume={0.1} />
  </HNode>
);

export default House