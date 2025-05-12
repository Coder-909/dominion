import { HDKComponent, HNode, Prefab, render, useRandom } from '@hiber3d/hdk-react';
import {
  AsteroidSpinning,
  Avatar,
  Distribute,
  Ground,
  Orbiting,
  RandomTilt,
  Room,
  VideoPanel,
} from '@hiber3d/hdk-react-components';

const Building: HDKComponent = props => {
    return (
      <Room
        {...props}
        floorThickness={1}
        dim={7}
        roof={false}
        wallThickness={0.5}
        height={10}
        windowWidth={3}
        wallTypes={['WINDOW', 'WINDOW', 'DOOR', 'WINDOW']}>
        <Prefab id="sofa_01_t2" rotY={180} scale={2}>
          <Avatar animation="an_default_emote_sitting_idle_02" y={0.16} z={0.12} rotY={20} />
        </Prefab>
        <Prefab id="floor_lamp_01" rotY={210} x={4} y={0.1} scale={2} />
        <VideoPanel src={'https://cdn.hibervr.com/video/Hiber3D.mp4'} y={7} z={-8.5} scale={5} rotY={180}></VideoPanel>
      </Room>
    );
  };