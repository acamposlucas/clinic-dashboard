import { v4 as uuidv4 } from "uuid";
import { Card } from "./Card";
import { getDate, getDay } from "date-fns";

const APPOINTMENTS = [
	{
		id: uuidv4(),
		patient: "Luciana Dias",
		info: {
			date: new Date("2022-09-01T00:00"),
			typeOfAppointment: "remote",
			time: "14:00",
		},
	},
	{
		id: uuidv4(),
		patient: "Lucas Dias",
		info: {
			date: new Date("2022-09-01T00:00"),
			typeOfAppointment: "remote",
			time: "14:00",
		},
	},
	{
		id: uuidv4(),
		patient: "Larissa Santana",
		info: {
			date: new Date("2022-09-02T00:00"),
			typeOfAppointment: "local",
			time: "14:00",
		},
	},
	{
		id: uuidv4(),
		patient: "Clara Lemos",
		info: {
			date: new Date("2022-09-03T00:00"),
			typeOfAppointment: "local",
			time: "15:00",
		},
	},
];

const today = getDay(new Date());

const formatDateToWeekDay = (day: number) => {
	if (day === today) return "Hoje";
	if (day === today + 1) return "Amanhã";
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
				<strong className="text-gray-900 font-bold col-span-full">
					{formatDateToWeekDay(today)}
				</strong>
				{APPOINTMENTS.map((appointment) =>
					getDay(appointment.info.date) === today ? (
						<Card
							key={appointment.id}
							typeOfAppointment={appointment.info.typeOfAppointment}
						/>
					) : null
				)}
				<strong className="text-gray-900 font-bold col-span-full">
					{formatDateToWeekDay(today + 1)}
				</strong>
				{APPOINTMENTS.map((appointment) =>
					getDay(appointment.info.date) === today + 1 ? (
						<Card
							key={appointment.id}
							typeOfAppointment={appointment.info.typeOfAppointment}
						/>
					) : null
				)}
				<strong className="text-gray-900 font-bold col-span-full">
					{formatDateToWeekDay(today + 2)}
				</strong>
			</div>
		</div>
	);
};
