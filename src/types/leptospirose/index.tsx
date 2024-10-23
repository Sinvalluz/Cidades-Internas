export type LeptoContextProps = {
	data: FeatureCollection | undefined;
};

export type Feature = {
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
	type: string;
	name: string;
	crs: {
		type: string;
		properties: {
			name: string;
		};
	};
	features: Feature[];
};
