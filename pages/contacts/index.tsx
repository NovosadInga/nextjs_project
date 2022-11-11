import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../components/Heading";
import { IContact } from "../../types";

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users: IContact[] = await res.json()
	if (!users) {
		return {
			notFound: true
		}
	}
	return {
		props: {
			users
		},
	}
}
interface IContactsProps {
	users: IContact[]
}
const Contacts: FC<IContactsProps> = ({ users }) => {
	return <>
		<Head>
			<title>Contacts Page</title>
		</Head>
		<Heading text='Contacts List'></Heading>
		<ul className="w-1/4 mx-auto mt-3">
			{
				users && users.map(({ id, name, email }) => (
					<li key={id}>
						<Link href={`/contacts/${id}`}>
							<strong>{name}</strong>
							({email})
						</Link>

					</li>
				))
			}
		</ul>
	</>
}
export default Contacts;