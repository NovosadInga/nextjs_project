import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
interface ILayoutProps {
	children: JSX.Element
}
const Layout: FC<ILayoutProps> = ({ children }) => {
	return <div className="out">
		<Header />
		<main className="bg-gray-light py-6">{children}</main>
		<Footer />
	</div>
}
export default Layout;