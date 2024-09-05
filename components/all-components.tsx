
import Link from "next/link";
import ListLink from "./list-nav";
import { Suspense } from "react";
import { Header } from "./headers";
const AllChildren = ({ children }: { children: any }) => {
    return <div >
        <Suspense fallback={<>loadding...</>} >
            <Header />
        </Suspense>
        {children}
    </div>

};
export default AllChildren;