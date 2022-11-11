import { FC } from "react";
import { IContact } from "../types";
import Heading from "./Heading";

interface IContactInfo {
	contact: IContact
}

const ContactInfo: FC<IContactInfo> = ({ contact }) => {
	const { name, email, address } = contact
	const { street, city, zipcode } = address
	return <div className="mt-3 text-center">
		<Heading text={name} />
		<div>
			<strong>Email: </strong>
			{email}
		</div>
		<div>
			<strong>Addres: </strong>
			{`${street}, ${city}, ${zipcode}`}
		</div>
	</div>
}
export default ContactInfo;