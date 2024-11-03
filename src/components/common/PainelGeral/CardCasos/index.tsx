type CardCasosProps = {
	titulo: string;
	numeroDeCasos: number;
};

export default function CardCasos({ titulo, numeroDeCasos }: CardCasosProps) {
	return (
		<div className='bg-white flex-1 box-border p-8 rounded-xl items-stretch w-full shadow-card basis-72 overflow-hidden'>
			<h3 className='text-xl text-blue-700 font-bold mb-6'>{titulo}</h3>
			<div className='flex flex-col gap-1'>
				<p className='font-bold text-2xl'>{numeroDeCasos ? numeroDeCasos.toLocaleString('pt-BR') : '...'}</p>
				<span className='text-gray-500 text-sm'>Acumulado</span>
			</div>
		</div>
	);
}
