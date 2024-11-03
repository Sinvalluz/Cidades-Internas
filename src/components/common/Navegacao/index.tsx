'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navegacao() {
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;
	return (
		<nav>
			<ul className='flex gap-8 text-navigationBtns'>
				<li>
					<Link
						href={'/'}
						className={isActive('/') ? 'text-black border-b-2 border-black pb-1' : 'text-gray-500'}>
						Painel Geral
					</Link>
				</li>
				<li>
					<Link
						href={'/sobre'}
						className={isActive('/sobre') ? 'text-black border-b-2 border-black pb-1' : 'text-gray-500'}>
						Sobre
					</Link>
				</li>
			</ul>
		</nav>
	);
}
