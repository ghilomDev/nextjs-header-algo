
import Link from "next/link";
import ListLink from "./list-nav";
const renderLinks = (links: any) => {
    return links.map((link:any, index:number) => (
        <li key={index} className="px-5 py-3 bg-gradient-to-b from-background-start to-background-end hover:bg-[#00092A] transition-opacity duration-700">
            <ListLink link ={{url:link.fields.url , name:link.fields.name}}/>
        </li>
    ));
};
export default renderLinks;