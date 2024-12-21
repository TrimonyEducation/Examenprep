import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function NavigationLinks() {
    return (
        <>
            <Link
                href="/pricing"
                className="rounded-md  py-2 text-sm font-medium text-muted-foreground hover:text-gray-900"
                prefetch={true}
            >
                Prijzen
            </Link>
            <Link
                href="/faq"
                className="rounded-md py-2 text-sm font-medium text-muted-foreground hover:text-gray-900"
                prefetch
            >
                FAQ
            </Link>
            <Link href="/login" prefetch>
                <Button variant="outline">Inloggen</Button>
            </Link>
            <Link href="/register" prefetch>
                <Button>Aanmelden</Button>
            </Link>
        </>
    );
}
