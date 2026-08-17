export type Project = {
  num: string;
  name: string;
  desc: string;
  role: string;
  stack: string;
  scope: string;
  result: string;
  slotHint: string;
};

export const projects: Project[] = [
  {
    num: "01",
    name: "Газпромнефть",
    desc: "Описание проекта будет добавлено. Placeholder для реального кейса.",
    role: "Frontend Developer",
    stack: "Frontend · Архитектура",
    scope: "—",
    result: "—",
    slotHint: "Превью проекта — интерфейс / дашборд",
  },
  {
    num: "02",
    name: "Московская биржа",
    desc: "Описание проекта будет добавлено. Placeholder для реального кейса.",
    role: "Frontend Developer",
    stack: "Frontend · Процессы",
    scope: "—",
    result: "—",
    slotHint: "Превью проекта — интерфейс / таблицы данных",
  },
  {
    num: "03",
    name: "ТПК",
    desc: "Описание проекта будет добавлено. Placeholder для реального кейса.",
    role: "Team Lead",
    stack: "Team Lead · Scrum",
    scope: "—",
    result: "—",
    slotHint: "Превью проекта — интерфейс",
  },
];
