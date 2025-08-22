import BreadCrumble from "@/components/common/breadCrumble/breadCrumble";
import ConsultationForm from "@/components/common/consultation-form/comsultation-form";
import YandexMap from "@/components/common/map/map";
import Quiz from "@/components/common/quiz/quiz";
import Practice from "@/components/practices-components/practice-list";

export const metadata = {
  title: "Наша практика | Выигранные дела юристов в Новосибирске",
  description:
    "Примеры выигранных судебных дел в Новосибирске. Более 27 лет успешной практики в арбитражных, гражданских и уголовных делах.",
  keywords:
    "юридическая практика Новосибирск, выигранные дела, судебные кейсы юриста, арбитражные дела Новосибирск, примеры судебных решений, опытный юрист Новосибирск",
  alternates: {
    canonical: `https://nsk.yurist42.ru/practices`,
  },
  openGraph: {
    title: `Наша практика | Выигранные дела юристов в Новосибирске`,
    description: `Реальные примеры решённых судебных дел в Новосибирске. Более 27 лет юридической практики и успешных кейсов.`,
    url: `https://nsk.yurist42.ru/practices`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: `Практика юристов в Новосибирске - yurist42.ru`,
      },
    ],
  },
};


export default function Practices() {
  const breadcrumbs = [{ label: "Главная", path: "/" }, { label: "Практики" }];
  return (
    <>
      <section className="section-main secondary-page">
        <BreadCrumble items={breadcrumbs} />
        <h1>Решенные дела</h1>
        <Practice />
      </section>
      <Quiz />
      <ConsultationForm
        consultationTitle="Получите консультацию"
        consultationText="Оценим шансы, предложим решение и стоимость"
      />
      <YandexMap />
    </>
  );
}
