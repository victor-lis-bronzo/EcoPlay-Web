import NextAuthSessionProvider from "@/providers/nextAuthSessionProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavigationMenu from "@/components/global/menu";
import TanstackQueryClientWrapper from "@/providers/tanstackQueryClientProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Eco-Play: Incentivo à Sustentabilidade",
	description:
		"Um incentivo à sustentabilidade e reciclagem através da gamificação",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NextAuthSessionProvider>
					<TanstackQueryClientWrapper>
						<NavigationMenu />
						{children}
					</TanstackQueryClientWrapper>
				</NextAuthSessionProvider>
			</body>
		</html>
	);
}
