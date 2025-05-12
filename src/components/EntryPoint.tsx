import { HDKComponent,HNode,Prefab,InfoPanel } from "@hiber3d/hdk-react";
import {Spawnpoint} from '@hiber3d/hdk-react-components';

const EntryPoint = () => {
    return(
        <HNode>
            <Spawnpoint x={-10} y={30} z={80}/>
            <Prefab  x={-10} y={40} z={80} id="en_p_fence_01" />
        </HNode>
    )
}

export default EntryPoint