import { FC } from "react";
import Navbar from "./Navbar";

const Header: FC = () => {
	return <header className="bg-gray-dark text-сyan flex">
		<div className="container">
			<Navbar ></Navbar>
		</div>
	</header>
}
export default Header;