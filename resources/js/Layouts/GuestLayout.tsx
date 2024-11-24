import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { BRAND_NAME } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Guest({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const NavLinks = () => (
        <>
            <Link
                href="/pricing"
                className="rounded-md  py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
                Prijzen
            </Link>
            <Link
                href="/faq"
                className="rounded-md  py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
                FAQ
            </Link>
            <Button variant="outline" asChild>
                <Link href="/login">Inloggen</Link>
            </Button>
            <Button asChild>
                <Link href="/register">Aanmelden</Link>
            </Button>
        </>
    );
    return (
        <>
            <nav className="bg-white shadow-sm">
                <div className="mx-auto px-4  ">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="flex flex-shrink-0 items-center"
                            >
                                <span className="text-xl font-bold text-gray-800">
                                    {BRAND_NAME}
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-4">
                            <NavLinks />
                        </div>
                        <div className="flex md:hidden">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="px-2 text-gray-500 hover:text-gray-600"
                                        onClick={toggleMenu}
                                    >
                                        <span className="sr-only">
                                            Open menu
                                        </span>
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
                                        <NavLinks />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="w-full h-full">{children}</main>
        </>
    );
}
