import Navegacao from '../Navegacao';
import Link from 'next/link';

export default function Cabecalho() {
	return (
		<header className='bg-white sm:px-11 py-5 px-4 flex sm:justify-between md:flex-row justify-center flex-col items-center overflow-hidden shadow-cabecalho'>
			<div>
				<Link href={'/'}>
					<h1 className='text-3xl text-center'>Cidades Internas | Leptospirose</h1>
				</Link>
			</div>
			<Navegacao />
		</header>
	);
}
