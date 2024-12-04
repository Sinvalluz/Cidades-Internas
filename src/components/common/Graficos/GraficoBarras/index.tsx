'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useLepto } from '@/contexts/LeptoContext';
import { BairrosECasos } from '@/types/LeptospiroseData';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function GraficoBarras() {
	const { data } = useLepto();
	const [dadosBarras, setDadosBarras] = useState<BairrosECasos[]>([] as BairrosECasos[]);
	const [nomeBairros, setNomeBairros] = useState<string[]>();
	const [bairroSelecionado, setBairroSelecionado] = useState('');
	const [largura, setLargura] = useState<number | string>(30000);
	const [dadosFiltrados, setDadosFiltrados] = useState<BairrosECasos[]>([] as BairrosECasos[]);

	const filtrarGrafico = () => {
		if (!data || bairroSelecionado == '' || !dadosBarras) return;
		const novosDadosFiltrados = data.features
			.map((feature) => {
				return {
					NomeBairro: feature.properties.NomeBairro,
					Lepto_2018: feature.properties.Lepto_2018,
					Lepto_2019: feature.properties.Lepto_2019,
				};
			})
			.sort((a, b) => a.NomeBairro.localeCompare(b.NomeBairro))
			.filter((item) => item.NomeBairro === bairroSelecionado);
		setDadosFiltrados((prevItems) => [
			...prevItems,
			...novosDadosFiltrados.filter(
				(item) => !prevItems.some((prevItem) => prevItem.NomeBairro === item.NomeBairro),
			),
		]);
		setDadosBarras([...dadosFiltrados, ...novosDadosFiltrados]);
		setBairroSelecionado('');
		setLargura('100%');
	};

	const manipulaData = () => {
		if (!data) return;
		const dadosFiltradosNaApi = data.features
			.map((feature) => {
				return {
					NomeBairro: feature.properties.NomeBairro,
					Lepto_2018: feature.properties.Lepto_2018,
					Lepto_2019: feature.properties.Lepto_2019,
				};
			})
			.sort((a, b) => a.NomeBairro.localeCompare(b.NomeBairro));
		setDadosBarras(dadosFiltradosNaApi);
	};

	const buscaNomesBairros = () => {
		if (!data) return;
		const nomesBairros = data.features.map((feature) => {
			const nomeBairro = feature.properties.NomeBairro;
			return nomeBairro;
		});
		setNomeBairros(nomesBairros);
	};

	const limparGrafico = () => {
		manipulaData();
		setLargura(30000);
		setDadosFiltrados([]);
		setBairroSelecionado('');
	};

	const ordenarPorCasos = () => {
		const dadosOrdenados = [...dadosBarras].sort(
			(a, b) => b.Lepto_2018 + b.Lepto_2019 - (a.Lepto_2018 + a.Lepto_2019),
		);
		setDadosBarras(dadosOrdenados);
		setBairroSelecionado('');
	};

	useEffect(() => {
		manipulaData();
		buscaNomesBairros();
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
		<div className='bg-white rounded-2xl sm:p-6 p-2 box-border w-full overflow-x-hidden'>
			<div className='flex gap-3 pt-3 flex-wrap'>
				<Select value={bairroSelecionado} onValueChange={(value) => setBairroSelecionado(value)}>
					<SelectTrigger className='flex-grow basis-40'>
						<SelectValue placeholder='Selecione o bairro para filtragem' />
					</SelectTrigger>
					<SelectContent>
						{nomeBairros &&
							nomeBairros.sort().map((bairro) => (
								<SelectItem key={bairro} value={bairro}>
									{bairro}
								</SelectItem>
							))}
					</SelectContent>
				</Select>
				<Button className='sm:flex-grow-0 flex-grow' onClick={filtrarGrafico}>
					Filtrar
				</Button>
				<Button className='sm:flex-grow-0 flex-grow' onClick={ordenarPorCasos}>
					Ordenar por casos
				</Button>
			</div>
			<div className='h-28 mt-3'>
				<Button className='bg-transparent text-black lg:w-auto w-full' onClick={limparGrafico}>
					Limpar filtros
				</Button>
			</div>
			<div className='w-full'>
				<Card>
					<CardHeader>
						<CardTitle>Gráfico de Barras - Leptospirose</CardTitle>
						<CardDescription>Bairros de Salvador - 2018/2019</CardDescription>
					</CardHeader>
					<CardContent className='lg:p-6 lg:pt-0 p-0'>
						<ScrollArea className='w-full whitespace-nowrap rounded-md'>
							<ChartContainer config={chartConfig} className='h-96' style={{ width: largura }}>
								<BarChart data={dadosBarras ? dadosBarras : undefined} className='min-w-full '>
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
									<Bar
										dataKey='Lepto_2018'
										name='Casos 2018:'
										fill='var(--color-desktop)'
										radius={4}
									/>
									<Bar
										dataKey='Lepto_2019'
										name='Casos 2019:'
										fill='var(--color-mobile)'
										radius={4}
									/>
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
