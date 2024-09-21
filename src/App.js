import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import MovieDialogue from './components/MovieDialogue';
function App() {
  return (
    <div>
    <Provider store={appStore}>
    <Body/>
    <MovieDialogue/>
    </Provider>
    </div>
  );
}

export default App;
