import { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { BRAND_NAME } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { Link } from "@inertiajs/react";
import NavigationLinks from "./NavigationLinks";

export default function GuestNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-sm">
            <div className="mx-auto px-4  ">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex flex-shrink-0 items-center"
                            prefetch
                        >
                            <span className="text-xl font-bold text-gray-800">
                                {BRAND_NAME}
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <NavigationLinks />
                    </div>
                    <div className="flex md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="px-2 text-gray-500 hover:text-muted-foreground"
                                    onClick={toggleMenu}
                                >
                                    <span className="sr-only">Open menu</span>
                                    {isOpen ? (
                                        <X
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Menu
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6 flex flex-col space-y-4">
                                    <NavigationLinks />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
