import { FeatureCollection } from '@/types/leptospirose';
import axios from 'axios';

export async function getLepto(): Promise<FeatureCollection> {
	const { data } = await axios.get<FeatureCollection>('/api/getLeptoData');
	return data;
}
