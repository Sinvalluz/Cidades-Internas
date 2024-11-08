import Navegacao from '../Navegacao';
import Link from 'next/link';

export default function Cabecalho() {
	return (
		<header className='bg-white sm:px-11 py-5 px-4 flex sm:justify-between md:flex-row justify-center flex-col items-center overflow-hidden shadow-cabecalho gap-4 sm:gap-0'>
			<Link href={'/'}>
				<h1 className='text-3xl text-center'>Cidades Internas | Leptospirose</h1>
			</Link>
			<Navegacao />
		</header>
	);
}
