import Navegacao from '../Navegacao';

export default function Cabecalho() {
	return (
		<header className='bg-white sm:px-11 py-5 px-4 flex sm:justify-between sm:flex-row justify-center flex-col items-center overflow-hidden shadow-cabecalho'>
			<div>
				<h1 className='text-3xl text-center'>Cidades Internas | Leptospirose</h1>
			</div>
			<Navegacao />
		</header>
	);
}
