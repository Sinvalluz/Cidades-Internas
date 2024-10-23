import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Duvidas() {
	return (
		<div className='flex-1 bg-white h-full box-border p-8 rounded-xl flex flex-col gap-6 items-stretch basis-72 overflow-hidden'>
			<h3 className='text-xl text-blue-700 font-bold shadow-card'>Dúvidas ?</h3>
			<p>
				Se tiver alguma dúvida, não se preocupe! Acesse a nossa página Sobre. Lá, você encontrará explicações
				detalhadas sobre termos e informações que podem ajudar a esclarecer todas as suas questões.
			</p>
			<Link href={'/sobre'}>
				<Button className='bg-blue-600'>Sobre</Button>
			</Link>
		</div>
	);
}
