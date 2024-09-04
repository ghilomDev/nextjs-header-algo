
export const dynamicParams = true;
import { contentfulClient } from "../services/get-or-update";
import   renderLinks from "./nav";
import { unstable_cache } from 'next/cache'

const randomNavBarNames: string[] = ["Home", "About", "Services", "Contact"];

export const Header = async () => {
   
    // const data = await contentfulClient.getEntries({
    //     content_type: "listMenu",
    //     "fields.name": "Main Menu",
    // });
    const getNavBar = unstable_cache(
        async () => {
          return await contentfulClient.getEntries({
            content_type: "listMenu",
            "fields.name": "Main Menu",
        });
        },
        ['NavHeader'],
        {tags: ['NavHeader'] }
      )
    const datas:any = await getNavBar();
    const links = datas.items[0].fields.listMenu;
    return (
        <nav className="mt-10">
            <ul className="flex w-100 justify-around">
                {renderLinks(links as any[])}
            </ul>
        </nav>
    );
};


