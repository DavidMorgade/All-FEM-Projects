// Global Styles
import './App.css';
// Components
import Header from './components/header/Header';
import MapView from './components/map/MapView';
// Context Hooks
import { DataWrapper } from './context/useDataContext';
import { LoadWrapper } from './context/useLoadContext';
import { IpWrapper } from './context/useIpContext';

const App = () => {
  return (
    <IpWrapper>
      <DataWrapper>
        <LoadWrapper>
          <Header />
          <MapView />
        </LoadWrapper>
      </DataWrapper>
    </IpWrapper>
  );
};

export default App;
