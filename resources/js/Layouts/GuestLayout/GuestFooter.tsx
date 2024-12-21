import { TextSM } from "@/Components/typography/Typography";
import { BRAND_NAME } from "@/lib/constants";
import React from "react";

export default function GuestFooter() {
    return (
        <footer className="py-4 mt-auto text-center">
            <div className="container mx-auto">
                <TextSM muted={true}>
                    {" "}
                    &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights
                    reserved.
                </TextSM>
            </div>
        </footer>
    );
}
