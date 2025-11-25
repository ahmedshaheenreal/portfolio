import React from "react";

export default function Footer() {
    return (
        <footer className="py-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Ahmed Shaheen. All rights reserved.</p>
        </footer>
    );
}
