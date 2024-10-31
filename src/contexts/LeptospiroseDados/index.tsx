'use client';

import { LeptoContextProps } from '@/types/leptospirose';
import { getLepto } from '@/utils/getLepto';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

const LeptoContext = createContext<LeptoContextProps>({} as LeptoContextProps);

function LeptoProvider({ children }: { children: React.ReactNode }) {
	const { data, isLoading } = useQuery({ queryKey: ['lepto'], queryFn: getLepto });

	return <LeptoContext.Provider value={{ data, isLoading }}>{children}</LeptoContext.Provider>;
}

const useLepto = () => useContext(LeptoContext);
export { LeptoProvider, useLepto };
