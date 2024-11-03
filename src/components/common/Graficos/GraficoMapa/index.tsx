'use client';

import { GeoJsonObject, Feature, Geometry } from 'geojson';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Layer, StyleFunction } from 'leaflet';
import { useLepto } from '@/contexts/LeptoContext';
import { FeatureLepto } from '@/types/LeptospiroseData';

export default function GraficoMapa() {
	const { data } = useLepto();

	const centroDoMapa: L.LatLngExpression = [-12.904071, -38.419334];

	const style = (feature: FeatureLepto) => {
		const indiceLepto = feature.properties.Lepto_2018 + feature.properties.Lepto_2019;
		let fillColor = 'gray';
		if (indiceLepto) {
			if (indiceLepto >= 21 && indiceLepto <= 25) {
				fillColor = '#ff0000'; // Vermelho
			} else if (indiceLepto >= 16 && indiceLepto < 21) {
				fillColor = '#ff6600'; // Laranja
			} else if (indiceLepto >= 11 && indiceLepto < 16) {
				fillColor = '#FFFF99'; // Amarelo Claro
			} else if (indiceLepto >= 6 && indiceLepto < 11) {
				fillColor = '#00ff2a'; // Ciano
			} else if (indiceLepto > 0 && indiceLepto < 6) {
				fillColor = '#00BFFF'; // Azul Claro
			} else {
				fillColor = 'gray'; // Caso `indiceLepto` seja negativo ou indefinido
			}
		}

		return {
			fillColor,
			weight: 0.5,
			opacity: 1,
			color: 'black',
			dashArray: 'none',
			fillOpacity: 2,
		};
	};

	const onEachFeature = (feature: Feature<Geometry, any>, layer: Layer) => {
		const leptoFeature = feature as FeatureLepto;
		// Formate o conteúdo do tooltip com o nome do bairro e os casos dos anos 2018 e 2019
		const tooltipContent = `
				<strong>Bairro:</strong> ${leptoFeature.properties.NomeBairro}<br>
				<strong>Casos em 2018:</strong> ${leptoFeature.properties.Lepto_2018}<br>
				<strong>Casos em 2019:</strong> ${leptoFeature.properties.Lepto_2019}
				`;
		layer.bindTooltip(tooltipContent, {
			sticky: true,
		});
	};

	const bounds = L.latLngBounds(
		[-13.053267, -38.537574], // Coordenadas do canto sudoeste
		[-12.745842, -38.277214], // Coordenadas do canto nordeste
		// pra cima é positivo pra direita é positivo
	);

	const descriçao = [
		{
			id: 0,
			color: 'fillColorRed',
			range: 'entre 21 a 25',
		},
		{
			id: 1,
			color: 'fillColorOrange',
			range: 'entre 16 a 21',
		},
		{
			id: 2,
			color: 'fillColorYellow',
			range: 'entre 11 a 16',
		},
		{
			id: 3,
			color: 'fillColorGreen',
			range: 'entre 6 a 11',
		},
		{
			id: 4,
			color: 'fillColorBlue',
			range: 'entre 1 a 6',
		},
		{
			id: 5,
			color: 'fillColorGray',
			range: 'Nenhum caso',
		},
	];

	return (
		data && (
			<div className='flex-grow basis-96 bg-white relative z-0 h-containerGraficoMapa outline-none rounded-2xl'>
				<h2 className='absolute z-10 pt-2 text-black text-2xl text-center font-bold w-full bg-white h-28 rounded'>
					Mapa de Leptospirose em Salvador 2018 e 2019
				</h2>
				<MapContainer
					className='w-full h-full z-0 rounded-2xl'
					maxZoom={13}
					zoom={11}
					minZoom={11}
					scrollWheelZoom={true}
					keyboard={false}
					center={centroDoMapa}
					maxBoundsViscosity={1.0} // Controla a suavidade do limite
					maxBounds={bounds}
					zoomControl={false} // Botão para dar zoom
					doubleClickZoom={false} // double click zoom
					dragging={true} // mexer o mapa
					touchZoom={true} // zoom de celular
				>
					<TileLayer
						attribution='Índice de leptospirose em Salvador'
						url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
						opacity={0}
					/>
					<GeoJSON
						data={data as GeoJsonObject}
						style={style as StyleFunction<any>}
						onEachFeature={onEachFeature}
					/>
				</MapContainer>
				<div className='absolute sm:right-6 sm:bottom-6 right-3 bottom-3 bg-white sm:p-4 p-2 rounded-xl flex flex-col gap-1 z-10'>
					<h4>Números de casos</h4>
					{descriçao.map((item) => {
						return (
							<span key={item.id} className='flex items-center gap-2'>
								<div className={`w-4 h-4 bg-${item.color} rounded-full`}></div>
								<p>{item.range}</p>
							</span>
						);
					})}
				</div>
			</div>
		)
	);
}
