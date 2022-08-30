import { Card } from "./Card";

// const dateIsToday = () => {
// 	return new Date().toLocaleString().split(",")[0];
// };

const APPOINTMENTS = [
	{
		patient: "Luciana Dias",
		info: {
			date: new Date("2022-08-30"),
			typeOfAppointment: "remote",
			time: "14:00",
		},
	},
	{
		patient: "Larissa Santana",
		info: {
			date: new Date("2022-08-30"),
			typeOfAppointment: "local",
			time: "14:00",
		},
	},
	{
		patient: "Clara Lemos",
		info: {
			date: new Date("2022-08-31"),
			typeOfAppointment: "local",
			time: "15:00",
		},
	},
];

export const Appointments = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{/**
				 * Criar um campo para cada dia de atendimento
				 * filtrar a agenda de acordo com o dia
				 * adicionar paciente no dia correto
				 */}
				{APPOINTMENTS.map(
					(appointment) =>
						appointment.info.date && (
							<>
								<strong className="text-gray-900 font-bold col-span-full">
									{
										appointment.info.date
											.toLocaleString("pt-br", { weekday: "long" })
											.split(",")[0]
									}
								</strong>
								<Card
									typeOfAppointment={appointment.info.typeOfAppointment}
									key={appointment.patient}
								/>
							</>
						)
				)}
			</div>
		</div>
	);
};
