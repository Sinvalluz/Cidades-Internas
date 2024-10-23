import CardCasos from './CardCasos';
import Duvidas from './Duvidas';

export default function PainelGeral() {
	return (
		<section className='flex gap-4 w-full m-h-72 flex-wrap overflow-hidden'>
			<CardCasos numeroDeCasos={40000} titulo='Casos confirmados em 2018' />
			<CardCasos numeroDeCasos={50000} titulo='Casos confirmados em 2019' />
			<Duvidas />
		</section>
	);
}
