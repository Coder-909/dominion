import { HDKComponent, Prefab, useRandom } from "@hiber3d/hdk-react";
import { Distribute, RandomTilt } from "@hiber3d/hdk-react-components";

export const Foliages: HDKComponent = (props) => {
  return (
    <Distribute
      {...props}
      gladeRadius={80}
      numberOfItems={200} 
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