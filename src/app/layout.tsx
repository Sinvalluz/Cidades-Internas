import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/provider/QueryClient';
import { LeptoProvider } from '@/contexts/LeptospiroseDados';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
		<html lang='pt-br' className={poppins.className}>
			<ReactQueryProvider>
				<LeptoProvider>
					<body>{children}</body>
				</LeptoProvider>
			</ReactQueryProvider>
		</html>
	);
}
