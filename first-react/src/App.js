import './App.css';
import Calc from './components/Calc';
import UserForm from './components/UserForm';
import { Reservation } from './components/Reservation';

// const Body = () => {
//     return (
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//     )
// }

// function Body() {
//     return (
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//     )
// }

function App() {
	return (
		<div className='App'>
			<Calc />
			{/* <UserForm />
			<Reservation /> */}
		</div>
	);
}

export default App;
