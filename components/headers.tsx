// export const dynamic = 'force-dynamic'
import { contentfulClient } from "../services/get-or-update";
import   renderLinks from "./nav";

const randomNavBarNames: string[] = ["Home", "About", "Services", "Contact"];

export const Header = async () => {
    const data = await contentfulClient.getEntries({
        content_type: "listMenu",
        "fields.name": "Main Menu",
    });
    const links = data.items[0].fields.listMenu;
    return (
        <nav className="mt-10">
            <ul className="flex w-100 justify-around">
                {renderLinks(links as any[])}
            </ul>
        </nav>
    );
};



