import './App.css';
import Backimg from './Components/Profile/Backimg';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import ProfileButton from './Components/Profile/ProfileButton';

function App() {
  return (
    <div className='App'>
      <Backimg/>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      <ProfileButton/>
    </div>
  )
}

export default App;


