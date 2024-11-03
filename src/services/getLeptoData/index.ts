import { FeatureCollection } from '@/types/LeptospiroseData';
import axios from 'axios';

export async function getLeptoData(): Promise<FeatureCollection> {
	const { data } = await axios.get<FeatureCollection>('/api/getLeptoData');
	return data;
}
