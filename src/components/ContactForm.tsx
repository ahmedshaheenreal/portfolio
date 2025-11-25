"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions";

const initialState = {
    success: false,
    message: "",
    errors: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useActionState(sendEmail, initialState);

    return (
        <form action={formAction} className="space-y-4">
            {state.message && (
                <div className={`p-4 rounded-xl text-sm ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {state.errors?.name && <p className="text-red-400 text-xs mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {state.errors?.email && <p className="text-red-400 text-xs mt-1">{state.errors.email[0]}</p>}
                </div>
            </div>

            <div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
                {state.errors?.subject && <p className="text-red-400 text-xs mt-1">{state.errors.subject[0]}</p>}
            </div>

            <div>
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                {state.errors?.message && <p className="text-red-400 text-xs mt-1">{state.errors.message[0]}</p>}
            </div>

            <SubmitButton />
        </form>
    );
}
