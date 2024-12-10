import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { DisplayXS, TextMD, TextSM } from "@/Components/typography/Typography";
import { Button } from "@/Components/ui/button";
import { BRAND_NAME } from "@/lib/constants";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, LogOut, Menu, User } from "lucide-react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Toaster } from "@/Components/ui/toaster";

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen  transition-all duration-300">
            <nav className=" text-white border-gray-100 bg-[#111111]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-12 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link
                                    href="/dashboard"
                                    className="text-2xl text-white font-semibold"
                                >
                                    <DisplayXS>{BRAND_NAME}</DisplayXS>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3 ">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex text-white rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent  px-3 py-2 text-sm font-medium leading-4  transition duration-150 ease-in-out hover:text-muted-foreground focus:outline-none"
                                            >
                                                <Menu />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <div className="border-b text-black py-2 px-3 border-input">
                                            <TextSM weight="medium">
                                                {user.email}
                                            </TextSM>
                                        </div>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                            className="flex items-center space-x-2"
                                        >
                                            <User />
                                            <TextMD weight="medium">
                                                {" "}
                                                Account{" "}
                                            </TextMD>
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="flex items-center space-x-2"
                                        >
                                            <LogOut />{" "}
                                            <TextMD weight="medium">
                                                {" "}
                                                Uitloggen{" "}
                                            </TextMD>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <Button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="bg-black"
                            >
                                <ChevronDown />
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-sm font-medium text-white">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1 text-white">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profiel
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Uitloggen
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
            <Toaster />
        </div>
    );
}
