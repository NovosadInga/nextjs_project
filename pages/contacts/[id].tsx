import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import Button from "../../components/Button";
import ContactInfo from "../../components/ContactInfo";
import { IContact } from "../../types";
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	const user: IContact = await res.json()
	if (!user) {
		return {
			notFound: true
		}
	}
	return {
		props: {
			user
		},
	}
}
interface IContactProps {
	user: IContact
}
const Contact: FC<IContactProps> = ({ user }) => {
	const router = useRouter()
	return <>
		<Head>
			<title>Contact Page</title>
		</Head>
		<ContactInfo contact={user} />
		<Button clickHandler={router.back} />
	</>
}
export default Contact;