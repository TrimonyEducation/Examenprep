import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import { Button } from "@/Components/ui/button";

import { Input } from "@/Components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";

export default function UpdatePasswordForm({
    className = "",
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            put(route("password.update"), {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        title: "Opgeslagen!",
                        description: "Je wachtwoord is bijgewerkt.",
                    });
                    reset();
                },
                onError: (errors) => {
                    if (errors.password) {
                        reset("password", "password_confirmation");
                        passwordInput.current?.focus();
                    }

                    if (errors.current_password) {
                        reset("current_password");
                        currentPasswordInput.current?.focus();
                    }
                },
            });
        } catch (error) {
            reset("password", "password_confirmation");
            toast({
                variant: "destructive",
                title: "Oeps!",
                description: "Er is een onverwachte fout opgetreden.",
            });
        }
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Wachtwoord veranderen
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Om je account veilig te houden, gebruik een lang en
                    willekeurig wachtwoord.
                </p>
            </header>
            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Huidig wachtwoord"
                    />

                    <Input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Nieuw wachtwoord" />

                    <Input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Bevestig wachtwoord"
                    />

                    <Input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Opslaan</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-muted-foreground">
                            Opgeslagen!
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
