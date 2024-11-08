import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Rodape() {
	return (
		<footer className='w-full bg-white py-5 px-4'>
			<div className='flex gap-3 flex-wrap justify-center overflow-x-hidden'>
				<div className='flex-1 box-border basis-40'>
					<h4 className='font-bold mb-4'>Aviso legal:</h4>
					<p className='text-sm'>
						As informações apresentadas neste site têm caráter exclusivamente informativo e destinam-se a
						ampliar o entendimento sobre a leptospirose e sua ocorrência em Salvador. Os dados exibidos são
						coletados de fontes públicas e confiáveis, mas podem não refletir a situação atual devido a
						atualizações periódicas.
					</p>
				</div>
				<div className='flex-1  box-border basis-40 '>
					<h4 className='font-bold mb-4'>Fonte:</h4>
					<p className='text-sm'>
						Os dados desse site vieram do arquivo disponibilizado no LUSS (Laboratório UNIFACS de Soluções
						de Software) (Projeto de Extensão)
					</p>
				</div>
				<div className='flex-1  box-border basis-40'>
					<h4 className='font-bold mb-4'>Links úteis:</h4>
					<ul className='text-sm flex flex-col gap-2'>
						<li>
							<a
								href='https://cidades-internas.vercel.app/api/getLeptoData'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Api
							</a>
						</li>
						<li>
							<a
								href='https://github.com/Sinvalluz/Cidades-Internas'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Repositório
							</a>
						</li>
						<li>
							<a
								href='https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leptospirose'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Sobre a Leptospirose
							</a>
						</li>
					</ul>
				</div>
				<div className='flex-1  box-border basis-40'>
					<h4 className='font-bold mb-4'>Contato:</h4>
					<ul className='text-sm flex flex-col gap-2'>
						<li className='flex gap-1 items-center'>
							<GitHubLogoIcon />
							<a
								href='https://github.com/Sinvalluz'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Sinval Luz Souza Filho
							</a>
						</li>
						<li className='flex gap-1 items-center'>
							<GitHubLogoIcon />
							<a
								href='https://github.com/guibaa1'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Guilherme Costa Santos
							</a>
						</li>
						<li className='flex gap-1 items-center'>
							<GitHubLogoIcon />
							<a
								href='https://github.com/thiagosampaiog'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Thiago Galdino Sampaio
							</a>
						</li>
						<li className='flex gap-1 items-center'>
							<GitHubLogoIcon />
							<a
								href='https://github.com/Sinvalluz'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Sinval Luz
							</a>
						</li>
						<li className='flex gap-1 items-center'>
							<GitHubLogoIcon />
							<a
								href='https://github.com/Sinvalluz'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Sinval Luz
							</a>
						</li>
						<li className='flex gap-1 items-center'>
							<GitHubLogoIcon />
							<a
								href='https://github.com/Sinvalluz'
								target='_black'
								className='transition-all hover:text-blue-700 hover:text-base hover:font-semibold'>
								Sinval Luz
							</a>
						</li>
					</ul>
				</div>
				<div className='flex-1  box-border basis-40'>
					<h4 className='font-bold mb-4'>Créditos:</h4>
					<div>
						<h5 className='text-sm font-semibold mb-2'>Bibliotecas usadas:</h5>
						<ul className='text-sm grid gap-2 grid-cols-2'>
							<li>axios</li>
							<li>Leaflet</li>
							<li>Lucide-react</li>
							<li>Radix-ui</li>
							<li>React</li>
							<li>Recharts</li>
							<li>ShadcnUi</li>
							<li>Tanstack</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}