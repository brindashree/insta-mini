import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUser } from "./api";
import Comments from "./pages/Comments";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
	const [user, setUser] = useState({});

	const fetchUser = async () => {
		const data = await getUser();
		if (data) {
			setUser(data);
		}
	};
	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile user={user} />} />
				<Route path="/comments/:postId" element={<Comments />} />
				<Route path="/create" element={<CreatePost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
