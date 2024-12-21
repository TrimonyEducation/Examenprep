import { PropsWithChildren } from "react";
import { Toaster } from "@/Components/ui/toaster";

import GuestFooter from "./GuestLayout/GuestFooter";
import GuestNavigation from "./GuestLayout/GuestNavigation";
import GuestMain from "./GuestLayout/GuestMain";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className=" h-full relative flex flex-col ">
            <GuestNavigation />
            <GuestMain>{children}</GuestMain>
            <GuestFooter />
            <Toaster />
        </div>
    );
}
