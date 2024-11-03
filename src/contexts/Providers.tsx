'use client';

import ReactQueryProvider from '@/contexts/QueryClientContext';
import { LeptoProvider } from './LeptoContext';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReactQueryProvider>
			<LeptoProvider>{children}</LeptoProvider>
		</ReactQueryProvider>
	);
}
