import { Card } from "./Card";
import { getDay } from "date-fns";

const APPOINTMENTS = [
	{
		patient: "Luciana Dias",
		info: {
			date: new Date("2022-08-31T00:00"),
			typeOfAppointment: "remote",
			time: "14:00",
		},
	},
	{
		patient: "Larissa Santana",
		info: {
			date: new Date("2022-08-31T00:00"),
			typeOfAppointment: "local",
			time: "14:00",
		},
	},
	{
		patient: "Clara Lemos",
		info: {
			date: new Date("2022-09-01T00:00"),
			typeOfAppointment: "local",
			time: "15:00",
		},
	},
];

const formatDateToWeekDay = (day: number) => {
	switch (day) {
		case 0:
			return "Domingo";
			break;
		case 1:
			return "Segunda";
			break;
		case 2:
			return "Terça";
			break;
		case 3:
			return "Quarta";
			break;
		case 4:
			return "Quinta";
			break;
		case 5:
			return "Sexta";
			break;
		case 6:
			return "Sábado";
			break;
	}
};

export const Appointments = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{APPOINTMENTS.map(
					(appointment) =>
						appointment.info.date && (
							<>
								<strong className="text-gray-900 font-bold col-span-full">
									{formatDateToWeekDay(getDay(appointment.info.date))}
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
