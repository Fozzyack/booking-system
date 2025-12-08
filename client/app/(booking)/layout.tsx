import Header from "@/components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col px-4 md:px-16 lg:px-28 xl:px-64 py-10">{children}</div>
        </div>
    );
}
