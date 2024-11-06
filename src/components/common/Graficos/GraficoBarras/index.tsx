'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useLepto } from '@/contexts/LeptoContext';
import { BairrosECasos } from '@/types/LeptospiroseData';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export default function GraficoBarras() {
	const { data } = useLepto();
	const [dadosBarras, setDadosBarras] = useState<BairrosECasos[] | null>(null);

	useEffect(() => {
		function manipulaData() {
			if (!data) return;
			const dadosFiltrados = data.features
				.map((feature) => {
					return {
						NomeBairro: feature.properties.NomeBairro,
						Lepto_2018: feature.properties.Lepto_2018,
						Lepto_2019: feature.properties.Lepto_2019,
					};
				})
				.sort((a, b) => a.NomeBairro.localeCompare(b.NomeBairro));
			setDadosBarras(dadosFiltrados);
		}

		manipulaData();
	}, [data]);
	const chartConfig = {
		desktop: {
			label: 'Casos em 2018',
			color: '#2563eb',
		},
		mobile: {
			label: 'Casos em 2019',
			color: '#60a5fa',
		},
	} satisfies ChartConfig;
	return (
		<div className='bg-white flex-grow basis-96 rounded-2xl p-3'>
			<div className='flex items-start gap-4 pt-3 w-full max-w-[700px] h-28 mx-auto'>
				<Input type='text' placeholder='Digite o nome do bairro' className='placeholder:text-black' />
				<Button>Filtrar</Button>
			</div>
			<div className='w-full'>
				<Card className='max-w-[700px] mx-auto'>
					<CardHeader>
						<CardTitle>Gráfico de Barras - Leptospirose</CardTitle>
						<CardDescription>Bairros de Salvador - 2018/2019</CardDescription>
					</CardHeader>
					<CardContent>
						<ScrollArea className='w-full whitespace-nowrap rounded-md'>
							<ChartContainer config={chartConfig} className='min-w-[30000px] h-96'>
								<BarChart data={dadosBarras ? dadosBarras : undefined}>
									<CartesianGrid vertical={false} />
									<XAxis
										dataKey='NomeBairro'
										tickLine={false}
										tickMargin={10}
										axisLine={false}
										interval={0}
									/>
									<YAxis domain={[0, 16]} />
									<ChartTooltip content={<ChartTooltipContent />} />
									<Tooltip />
									<Bar dataKey='Lepto_2018' fill='var(--color-desktop)' radius={4} />
									<Bar dataKey='Lepto_2019' fill='var(--color-mobile)' radius={4} />
								</BarChart>
							</ChartContainer>
							<ScrollBar orientation='horizontal' />
						</ScrollArea>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
