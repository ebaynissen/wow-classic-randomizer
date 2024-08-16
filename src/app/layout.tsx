import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WoW Classic Character Randomizer",
    description: "A randomizer for World of Warcraft Classic characters.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
        </html>
    );
}
