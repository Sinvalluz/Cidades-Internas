import Navegacao from '../Navegacao';

export default function Cabecalho() {
	return (
		<header className='bg-white py-5 px-11 flex justify-between items-center flex-wrap'>
			<div>
				<h1 className='text-2xl'>Cidades Internas</h1>
			</div>
			<Navegacao />
		</header>
	);
}
