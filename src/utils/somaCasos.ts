import { FeatureCollection, FeatureLepto } from '@/types/LeptospiroseData';

export default function somaCasos(
	data: FeatureCollection | undefined,
): { casos2018: number; casos2019: number } | undefined {
	if (!data) return;
	const casos2018: number = data.features.reduce((sum: number, feature: FeatureLepto): number => {
		return sum + feature.properties.Lepto_2018;
	}, 0);
	const casos2019: number = data.features.reduce((sum: number, feature: FeatureLepto): number => {
		return sum + feature.properties.Lepto_2019;
	}, 0);

	return { casos2018, casos2019 };
}
