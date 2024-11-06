import Graficos from '../Graficos';
import PainelDownload from '../PainelDownload';
import PainelGeral from '../PainelGeral';

export default function PainelMain() {
	return (
		<>
			<main className='w-11/12 mx-auto mt-10 flex flex-col gap-9 max-w-11/12'>
				<PainelDownload />
				<PainelGeral />
				<Graficos />
			</main>
		</>
	);
}
