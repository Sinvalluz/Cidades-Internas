import { alunos } from '@/app/constants/alunos';

export default function MainSobre() {
	return (
		<main className='flex items-center justify-center min-h-screen w-full py-10 box-border'>
			<div className='w-11/12 bg-white rounded-lg shadow-lg p-8'>
				<h1 className='text-2xl font-bold mb-4 text-blue-700'>Sobre o Site</h1>

				<p className='mb-6 text-gray-700'>
					Este site foi desenvolvido como parte do projeto de extensão do
					<strong> LUSS (Laboratório UNIFACS de Soluções de Software)</strong>, com o objetivo de informar,
					através de dados, sobre a disseminação da leptospirose em Salvador, BA.
				</p>

				<h2 className='text-xl font-semibold mb-3 text-blue-600'>Sobre a Leptospirose</h2>
				<p className='mb-6 text-gray-700'>
					A leptospirose é uma infecção bacteriana causada pela exposição à urina de animais infectados,
					especialmente roedores. É uma doença que pode causar sintomas graves e, sem tratamento adequado,
					pode até levar a complicações fatais. Informar as autoridades e a população sobre quais locais de
					Salvador precisam de mais atenção em relação aos casos de leptospirose, facilitando ações de
					prevenção e controle são metas fundamentais deste projeto.
				</p>

				<h2 className='text-xl font-semibold mb-3 text-blue-600'>Origem dos Dados e Manipulação</h2>
				<p className='mb-6 text-gray-700'>
					Os dados apresentados neste site foram obtidos através de uma API desenvolvida por nossa equipe.
					Essa API fornece informações detalhadas sobre a incidência da leptospirose em diversos bairros de
					Salvador. Manipulamos esses dados para gerar visualizações intuitivas e informativas, incluindo
					cards com as quantidades de casos, gráficos de barras e mapas interativos que ajudam na compreensão
					geográfica dos índices da doença.
				</p>

				<h2 className='text-xl font-semibold mb-3 text-blue-600'>Créditos</h2>
				<div className='text-gray-700'>
					Agradecemos a todos que contribuíram para a realização deste projeto:
					<ul className='list-disc ml-8 mb-4'>
						{alunos.map((aluno) => (
							<li key={aluno.id}>{aluno.nome}</li>
						))}
					</ul>
					E um agradecimento especial ao nosso professor orientador
					<strong> Sérgio Sampaio Spinola</strong>, que nos guiou durante todo o desenvolvimento do projeto.
				</div>
			</div>
		</main>
	);
}
