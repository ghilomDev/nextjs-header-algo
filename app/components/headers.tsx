
import renderLinks from "@/comp/nav";
import { contentfulClient } from "../services/get-or-update";
import { revalidateTag } from "next/cache";


const randomNavBarNames: string[] = ["Home", "About", "Services", "Contact"];

export const Header = async () => {
    const fetchMenu = async () => { 
        fetch('', { next: { tags: ['main-menu'] } })
        const data = await contentfulClient.getEntries({
            content_type: "listMenu",
            "fields.name": "Main Menu",
        });
        return data;
    }
    
    const data = await fetchMenu();
    const links = data.items[0].fields.listMenu;
    return (
        <nav className="mt-10">
            <ul className="flex w-100 justify-around">
                {renderLinks(links as any[])}
            </ul>
        </nav>
    );
};



