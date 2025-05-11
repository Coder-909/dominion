import { HDKComponent, Prefab, useRandom } from "@hiber3d/hdk-react";
import { Distribute, RandomTilt } from "@hiber3d/hdk-react-components";

export const Foliages: HDKComponent = props => {
  return (
    <Distribute
      {...props}
      gladeRadius={20}
      renderItem={() => {
        const random = useRandom();
 
        return (
          <RandomTilt scale={random.range(1, 5)}>
            <Prefab id={random.fromArray(['bush_01', 'bush_02', 'birch_01_t1'])} />
          </RandomTilt>
        );
      }}
    />
  );
};
