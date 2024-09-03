import Link from "next/link";
export const renderLinks = (links: any[]) => {

    return links.map((link, index) => (
        <li key={index} className="px-5 py-3 bg-gradient-to-b from-background-start to-background-end hover:bg-[#00092A] transition-opacity duration-700">
            <Link href={`${link.fields.url}`}>{link.fields.name}</Link>
        </li>
    ));
};