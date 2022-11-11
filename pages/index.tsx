import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import img from "../public/img.jpg"
import { ISocial } from "../types";
export const getStaticProps: GetStaticProps = async (context) => {
  try {


    const res = await fetch(`${process.env.API_HOST}/socials/`)
    const socials: ISocial[] = await res.json()
    if (!socials) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        socials
      },
    }
  } catch {
    return {
      props: {
        socials: null
      },
    }
  }
}
interface IHomeProps {
  socials: ISocial[]
}
const Home: FC<IHomeProps> = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </Head>
      <Heading text='Home page'></Heading>
      <div className="text-center py-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <Image
        className="mx-auto "
        src={img}
        width={656}
        height={343}
        alt=""
        placeholder="blur"
      />
      <Socials socials={socials} />
    </>
  )
}
export default Home;