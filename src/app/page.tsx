import Cabecalho from '@/components/common/Cabecalho';
import PainelMain from '@/components/common/PainelMain';
import Rodape from '@/components/common/rodape';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<>
			<Cabecalho />
			<PainelMain />
			<Rodape />
		</>
	);
}
