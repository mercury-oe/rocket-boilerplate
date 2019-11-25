import { Route } from 'routes';
import SolarSystemView from './components/SolarSystemView';
import SunRoute from './routes/sun';
import MoonRoute from './routes/moon';

const PAGE_ID = 'SOLAR-SYSTEM';

export default (): Route => ({
  pageId: PAGE_ID,
  path: '/solar-system',
  component: SolarSystemView,
  routes: [SunRoute(), MoonRoute()],
});
