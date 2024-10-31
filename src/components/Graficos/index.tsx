import dynamic from 'next/dynamic';
import GraficoBarras from './GraficoBarras';
const GraficoMapa = dynamic(() => import('./GraficoMapa'), {
	ssr: false,
});

export default function Graficos() {
	return (
		<div className='flex items-stretch gap-5 mb-10 flex-wrap min-h-containerGraficoMapa'>
			<GraficoBarras />
			<GraficoMapa />
		</div>
	);
}
