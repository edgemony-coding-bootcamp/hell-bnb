import Activity_card from './Components/Activity_card/Activity_card';
import 'semantic-ui-css/semantic.min.css'

import img from './Components/Activity_card/img.jpeg';

function App() {
  return (
    <div className="App">
      <Activity_card
        img = {img}
        rate = {4.93}
        number = {204}
        country = {'Argentina'}
        description = {'Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum'}
        price = {7}/>
    </div>
  );
}

export default App;
