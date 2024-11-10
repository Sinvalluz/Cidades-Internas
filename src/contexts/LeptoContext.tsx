'use client';

import { getLeptoData } from '@/services';
import { FeatureCollection, LeptoContextProps } from '@/types/LeptospiroseData';
// import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState } from 'react';

const LeptoContext = createContext<LeptoContextProps>({} as LeptoContextProps);

export function LeptoProvider({ children }: { children: React.ReactNode }) {
	const [data, setData] = useState<FeatureCollection>();
	const [isLoading, setIsloading] = useState<boolean>(false);
	// const { data, isLoading } = useQuery({ queryKey: ['lepto'], queryFn: getLeptoData }); // Esse código buscava dados da api com o react-query

	useEffect(() => {
		async function buscarDados() {
			const dadosApi = await getLeptoData();
			setData(dadosApi);
		}

		buscarDados();
	}, []);

	return <LeptoContext.Provider value={{ data, isLoading }}>{children}</LeptoContext.Provider>;
}

export const useLepto = () => useContext(LeptoContext);
