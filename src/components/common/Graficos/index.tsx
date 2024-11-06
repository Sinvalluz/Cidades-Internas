import dynamic from 'next/dynamic';
import GraficoBarras from './GraficoBarras';
const GraficoMapa = dynamic(() => import('./GraficoMapa'), {
	ssr: false,
});

export default function Graficos() {
	return (
		<section className='flex items-stretch gap-5 mb-10 flex-wrap min-h-containerGraficoMapa max-w-full box-border'>
			<GraficoBarras />
			<GraficoMapa />
		</section>
	);
}
