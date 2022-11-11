
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const navigation = [
	{ id: "1", title: "Home", path: "/" },
	{ id: "2", title: "Contacts", path: "/contacts" },
	{ id: "3", title: "Posts", path: "/posts" },
]
const Navbar = () => {
	const { pathname } = useRouter()
	return <nav className='flex justify-between h-full'>
		<Image src='/logo.svg' width='50' height='60' alt="logo" />
		<div className='flex h-full'>
			{navigation.map(({ id, title, path }) => (
				<Link
					key={id}
					className={`
				px-4 hover:text-white hover:bg-gray flex items-center text-xl
				${pathname === path ? 'active' : null}
				`}
					href={path}>
					<span className="relative z-10">{title}</span>
				</Link>
			))}
		</div>
	</nav>
}
export default Navbar;