import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Verwijder account
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Wanneer je je account verwijdert, worden al je gegevens
                    (antwoorden, voortgang, etc) permanent verwijderd.
                </p>
            </header>

            <Button onClick={confirmUserDeletion} variant={"destructive"}>
                Verwijder account
            </Button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Weet je zeker dat je je account wilt verwijderen?
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Wanneer je je account verwijdert, worden al je gegevens
                        (antwoorden, voortgang, etc) permanent verwijderd.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Wachtwoord"
                            className="sr-only"
                        />

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            placeholder="Wachtwoord"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button
                            className="ms-3"
                            disabled={processing}
                            variant={"destructive"}
                        >
                            Verwijder account
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
