'use client';

import { useEffect, useState } from 'react';
import CardCasos from './CardCasos';
import Duvidas from './Duvidas';
import somaCasos from '@/utils/somaCasos';
import { useLepto } from '@/contexts/LeptoContext';

export default function PainelGeral() {
	const { data } = useLepto();
	const [casos2018, setCasos2018] = useState<number>(0);
	const [casos2019, setCasos2019] = useState<number>(0);

	useEffect(() => {
		const total = somaCasos(data);
		if (total) {
			setCasos2018(total.casos2018);
			setCasos2019(total.casos2019);
		}
	}, [data]);
	return (
		<section className='flex gap-4 w-full m-h-72 flex-wrap overflow-hidden'>
			<CardCasos numeroDeCasos={casos2018} titulo='Casos confirmados em 2018' />
			<CardCasos numeroDeCasos={casos2019} titulo='Casos confirmados em 2019' />
			<Duvidas />
		</section>
	);
}
