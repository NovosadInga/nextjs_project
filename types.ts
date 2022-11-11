export interface IAddress {
	street: string;
	city: string;
	zipcode: string;
}
export interface IContact {
	id: string,
	name: string;
	email: string;
	address: IAddress
}
export interface IPost {
	title: string;
	body: string;
	id: string;
}
export interface ISocial {
	id: number,
	icon: string;
	path: string;
}