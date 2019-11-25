import { Route } from 'routes';
import SolarSystemView from './components/SolarSystemView';

const PAGE_ID = 'SOLAR-SYSTEM';

export default (): Route => ({
  pageId: PAGE_ID,
  path: '/solar-system',
  component: SolarSystemView,
});
