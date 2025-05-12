import { HDKComponent,HNode,Prefab,InfoPanel } from "@hiber3d/hdk-react";
import {Spawnpoint} from '@hiber3d/hdk-react-components';

const EntryPoint = () => {
    return(
        <HNode>
            <Spawnpoint x={40} y={10}/>
        </HNode>
    )
}

export default EntryPoint