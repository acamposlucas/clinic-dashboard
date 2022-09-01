import { MapPin, Plus, VideoCamera } from "phosphor-react";
import { useState } from "react";

export const FloatingMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div className="fixed bottom-3 right-3 flex flex-col gap-4">
			<div
				className={`flex-col gap-4 items-end justify-center ${
					showMenu ? "flex" : "hidden"
				}`}>
				<div className={showMenu ? `shadow-overlay` : ``}></div>
				<div className="flex gap-4 items-center">
					<span className="bg-white text-gray-900 px-2 text-sm h-max rounded-lg">
						Nova consulta na casa do paciente
					</span>
					<button
						type="button"
						className="rounded-full flex items-center justify-center bg-blue-500 p-4 shadow-md">
						<MapPin
							size={24}
							color="#ffffff"
						/>
					</button>
				</div>
				<div className="flex gap-4 items-center">
					<span className="bg-white text-gray-900 px-2 text-sm h-max rounded-lg">
						Nova consulta por vídeo
					</span>
					<button
						type="button"
						className="rounded-full flex items-center justify-center bg-blue-500 p-4 shadow-md">
						<VideoCamera
							size={24}
							color="#ffffff"
						/>
					</button>
				</div>
			</div>
			<button
				type="button"
				onClick={handleShowMenu}
				className="rounded-full flex items-center justify-center bg-blue-500 p-4 ml-auto self-end shadow-md">
				<Plus
					size={24}
					color="#ffffff"
				/>
			</button>
		</div>
	);
};
