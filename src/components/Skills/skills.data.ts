export type SkillCard = {
  num: string;
  title: string;
  body: string;
  meta: string;
  tag: string;
};

export const skillCards: SkillCard[] = [
  {
    num: "01",
    title: "Frontend Development",
    body: "Создание и развитие современных frontend-приложений: архитектура, компоненты, технические решения.",
    meta: "Архитектура · Компоненты · Качество кода",
    tag: "Развитие frontend-платформы",
  },
  {
    num: "02",
    title: "Team Lead",
    body: "Техническое лидерство, декомпозиция задач, code review, mentoring.",
    meta: "Code review · Mentoring · Ответственность",
    tag: "Развитие разработчиков",
  },
  {
    num: "03",
    title: "AI for Development",
    body: "Использование и настройка AI-инструментов для разработки, тестирования и рефакторинга.",
    meta: "Анализ кода · Документация · Автоматизация",
    tag: "Рутина — на автоматику",
  },
  {
    num: "04",
    title: "Engineering Processes",
    body: "Помощь командам в выстраивании эффективного процесса разработки.",
    meta: "Постановка задач · Workflow",
    tag: "Разработка · продукт · бизнес",
  },
  {
    num: "05",
    title: "Scrum & Agile",
    body: "Внедрение Scrum с нуля: планирование, регулярные встречи, ретроспективы.",
    meta: "Прозрачность · Ретроспективы",
    tag: "Улучшение процессов",
  },
  {
    num: "06",
    title: "Product & Business",
    body: "Умение понимать бизнес-задачу и переводить её в техническое решение.",
    meta: "Скорость · Качество · Техдолг",
    tag: "Баланс решений",
  },
];
