import { GeoJsonObject } from 'geojson';

export type LeptoContextProps = {
	data: FeatureCollection | undefined;
	isLoading: boolean;
};

export type FeatureLepto = {
	type: string;
	properties: {
		NomeBairro: string;
		Area: number;
		Cod_Bairro: number;
		Lepto_2018: number;
		Lepto_2019: number;
	};
	geometry: {
		type: string;
		coordinates: number[][][][];
	};
};

export type FeatureCollection = {
	type: 'FeatureCollection';
	name: string;
	crs: {
		type: string;
		properties: {
			name: string;
		};
	};
	features: FeatureLepto[];
};
