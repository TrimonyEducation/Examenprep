import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { BRAND_NAME } from "@/lib/constants";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <GuestLayout>
            <Head title={`${BRAND_NAME} | Inloggen`} />
            {auth.user ? <p>Yes log in</p> : <p>No log in</p>}
            <p>Good morning usa</p>
        </GuestLayout>
    );
}
