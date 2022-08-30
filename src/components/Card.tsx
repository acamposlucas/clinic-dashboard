import { Chat, MapPin, VideoCamera } from "phosphor-react";

interface ICard {
	typeOfAppointment: string;
}

export const Card = ({ typeOfAppointment }: ICard) => {
	return (
		<div className="bg-white w-full rounded-lg">
			<div className="after:block after:w-full after:h-[1px] after:bg-gray-200">
				<div className="flex items-start p-4">
					<div className="flex gap-4 flex-1 items-center">
						<img
							src="src/assets/perfil-2.png"
							alt=""
							className="w-8 h-8 rounded-full"
						/>
						<div className="flex flex-col">
							<h2 className="text-gray-900 font-bold text-base">Luciana Dias</h2>
							{typeOfAppointment === "remote" ? (
								<span className="text-gray-300 text-sm flex gap-1 items-center">
									<VideoCamera
										size={16}
										color="#A3A3A3"
									/>{" "}
									Consulta Remota
								</span>
							) : (
								<span className="text-gray-300 text-sm flex gap-1 items-center">
									<MapPin
										size={16}
										color="#A3A3A3"
									/>{" "}
									Consulta Local
								</span>
							)}
						</div>
					</div>
					<a
						href="#"
						className="p-2 bg-gray-100 rounded-full">
						<Chat
							size={16}
							color="#4894FF"
						/>
					</a>
				</div>
			</div>
			<div className="p-4 flex flex-col gap-2">
				<strong className="text-gray-900 font-medium text-sm">
					14:00 - 15:00 (1 hora)
				</strong>
				{typeOfAppointment === "remote" ? (
					<div className="flex gap-4">
						<a
							href="#"
							className="font-medium text-sm p-3 flex flex-1 items-center justify-center border border-transparent bg-yellow-500 text-white rounded-lg shadow-default">
							Ligar por vídeo
						</a>
						<a
							href="#"
							className="font-medium text-sm p-3 flex flex-1 items-center justify-center border border-gray-200 rounded-lg text-gray-900">
							Ligar por áudio
						</a>
					</div>
				) : (
					<button
						type="button"
						className="bg-blue-500 text-sm flex items-center justify-center text-white p-3 rounded-lg shadow-default">
						Ver endereço
					</button>
				)}
			</div>
		</div>
	);
};
