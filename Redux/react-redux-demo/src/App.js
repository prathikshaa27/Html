import {Provider} from 'react-redux'
import store from './redux/store';
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';


function App(){
  return(
    <Provider store={store}>
      <ItemContainer/>
        <ItemContainer/>
    <CakeContainer/>
    <HooksCakeContainer/>
    <IceCreamContainer/>
    <NewCakeContainer/>
    </Provider>  //= how to provider know about the redux store to do that we can specify it as a prop

  )
}
export default App;