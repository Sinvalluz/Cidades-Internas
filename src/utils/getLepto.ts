import { FeatureCollection } from '@/types/leptospirose';
import axios from 'axios';

export async function getLepto(): Promise<FeatureCollection> {
	const { data } = await axios.get<FeatureCollection>('http://localhost:3000/api/cordenadas');
	return data;
}
