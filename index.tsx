import { HDKComponent, HNode, Prefab, render, InfoPanel } from '@hiber3d/hdk-react';
import { Ground, Spawnpoint } from '@hiber3d/hdk-react-components';
import World from './src/World'
/**
 * Render an almost empty world
 */

const App = () => {
  return(
    <World />
  )
}

render(<App/>, { environment: 'sunrise_01' });
