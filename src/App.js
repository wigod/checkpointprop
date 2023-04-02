import './App.css';
import ProfileComponent from './profile/ProfileComponent';

function App() {  
  let fullName = 'KOFFI Patrice';
  let bio = 'Etudiant JavaScript Fullstack à GoMyCode';
  let profession = 'Developpeur';   
  return (
    <div className="App">
        <ProfileComponent fullName={fullName } bio={bio} profession={profession} ><img src='PhotoPatrice.jpg' alt=''></img></ProfileComponent>
                
    </div>
  );
}

export default App;
