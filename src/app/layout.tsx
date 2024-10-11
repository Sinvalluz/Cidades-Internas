import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Cidades Internas',
	description: 'Dashboard sobre casos de Leptospirose em Salvador',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br' className={inter.className}>
			<body>{children}</body>
		</html>
	);
}
