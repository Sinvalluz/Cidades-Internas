'use client';

import { getLeptoData } from '@/services';
import { LeptoContextProps } from '@/types/LeptospiroseData';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

const LeptoContext = createContext<LeptoContextProps>({} as LeptoContextProps);

export function LeptoProvider({ children }: { children: React.ReactNode }) {
	const { data, isLoading } = useQuery({ queryKey: ['lepto'], queryFn: getLeptoData });

	return <LeptoContext.Provider value={{ data, isLoading }}>{children}</LeptoContext.Provider>;
}

export const useLepto = () => useContext(LeptoContext);
