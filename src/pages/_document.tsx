import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { useSession } from "next-auth/react";

export default function Document() {
    return (
        <Html data-theme="winter" className="bg-zinc-100">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

