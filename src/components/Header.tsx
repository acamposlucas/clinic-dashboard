export const Header = () => {
	return (
		<header>
			<div className="flex gap-4 items-center">
				<img
					src="src/assets/perfil-1.png"
					alt="Sônia"
					className="h-14 w-14 rounded-full"
				/>
				<div className="flex flex-col">
					<h1 className="text-2xl text-gray-900 font-bold">Olá, Sônia</h1>
					<span className="text-sm text-gray-300">Mais 4 consultas hoje</span>
				</div>
			</div>
		</header>
	);
};
