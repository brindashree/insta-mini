import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./containers/Comments";
import Home from "./containers/Home";
import Profile from "./containers/Profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/comments" element={<Comments />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
