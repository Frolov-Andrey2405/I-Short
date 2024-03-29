import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
    title: "I-Short",
    description: "E-commerce app",
};

export default function RootLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <html lang="en">
        <body>
            <Header />
            {children}
            {/* <footer>This is a footer</footer> */}
        </body>
        </html>
    );
    }