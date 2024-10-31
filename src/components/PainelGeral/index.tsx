'use client';

import { useEffect, useState } from 'react';
import CardCasos from './CardCasos';
import Duvidas from './Duvidas';
import { useLepto } from '@/contexts/LeptospiroseDados';
import { FeatureLepto } from '@/types/leptospirose';

export default function PainelGeral() {
	const { data } = useLepto();

	const [casos2018, setCasos2018] = useState<number>(0);
	const [casos2019, setCasos2019] = useState<number>(0);

	useEffect(() => {
		function getCasos2018() {
			if (!data) return;
			const totalCasos2018 = data.features.reduce((sum: number, feature: FeatureLepto) => {
				return sum + feature.properties.Lepto_2018;
			}, 0);
			const totalCasos2019 = data.features.reduce((sum: number, feature: FeatureLepto) => {
				return sum + feature.properties.Lepto_2019;
			}, 0);
			setCasos2018(totalCasos2018);
			setCasos2019(totalCasos2019);
		}

		getCasos2018();
	}, [data]);
	return (
		<section className='flex gap-4 w-full m-h-72 flex-wrap overflow-hidden'>
			<CardCasos numeroDeCasos={casos2018} titulo='Casos confirmados em 2018' />
			<CardCasos numeroDeCasos={casos2019} titulo='Casos confirmados em 2019' />
			<Duvidas />
		</section>
	);
}
