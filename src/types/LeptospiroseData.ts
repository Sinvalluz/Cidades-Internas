export interface LeptoContextProps {
	data: FeatureCollection | undefined;
	isLoading: boolean;
}

export interface FeatureLepto {
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
}

export interface FeatureCollection {
	type: 'FeatureCollection';
	name: string;
	crs: {
		type: string;
		properties: {
			name: string;
		};
	};
	features: FeatureLepto[];
}

export interface BairrosECasos {
	NomeBairro: string;
	Lepto_2018: number;
	Lepto_2019: number;
}
