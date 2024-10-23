'use client';

import { Download } from 'lucide-react';
import { Button } from '../ui/button';

export default function PainelDownload() {
	const baixarArquivo = () => {
		const link = document.createElement('a');
		link.href = '/leptolat.json';
		link.download = 'leptolat.json';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section className='flex w-full sm:justify-between  sm:flex-row flex-col justify-center items-center sm:gap-0 gap-4 overflow-hidden'>
			<div className='sm:text-start text-center'>
				<p className='text-blue-600 font-semibold'>Leptospirose</p>
				<h2 className='text-2xl semibold'>
					<strong className='text-blue-800 font-black'>Painel</strong> Leptospirose
				</h2>
				<span className='block text-gray-500 text-sm'>Regiões Urbanas de Salvador</span>
			</div>
			<Button className='flex gap-3 justify-center items-center bg-blue-600' onClick={baixarArquivo}>
				<Download />
				Arquivo Geojson
			</Button>
		</section>
	);
}
