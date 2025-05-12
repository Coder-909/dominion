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


const OrbitingAsteroids: HDKComponent = props => {
    return (
      <HNode {...props}>
        <Orbiting duration={64}>
          <Distribute
            gladeRadius={100}
            outerBoundRadius={200}
            itemAreaSizeMin={15}
            itemAreaSizeMax={25}
            renderItem={() => {
              const random = useRandom();
              return (
                <AsteroidSpinning y={random.range(40,50)} scale={random.range(1, 5)}>
                  <Prefab id={random.fromArray(['rock_01_t1'])} />
                </AsteroidSpinning>
              );
            }}
          />
        </Orbiting>
      </HNode>
    );
};

export default OrbitingAsteroids;