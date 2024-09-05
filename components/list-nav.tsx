'use client';
import Link from "next/link";
const ListLink = ({link}:{link: {url: string; name: string}}) => {
    return  <Link href={`${link.url}`}>{link.name}</Link>
}
export default ListLink;