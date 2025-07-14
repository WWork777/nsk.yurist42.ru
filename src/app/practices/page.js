import BreadCrumble from "@/components/common/breadCrumble/breadCrumble";
import ConsultationForm from "@/components/common/consultation-form/comsultation-form";
import YandexMap from "@/components/common/map/map";
import Quiz from "@/components/common/quiz/quiz";
import Practice from "@/components/practices-components/practice-list";

export const metadata = {
  title: "Наша практика | Решенные дела в Новосибирске",
  description:
    "Реальные примеры выигранных дел в судах Новосибирска. Опыт работы с 1997 года.",
  keywords: "контакты юриста, запись к юристу, юридическая консультация",
  alternates: {
    canonical: `https://nsk.yurist42.ru/practices`,
  },
  openGraph: {
    title: `Наша практика | Решенные дела в Новосибирске`,
    description: `Реальные примеры выигранных дел в судах Новосибирска. Опыт работы с 1997 года.`,
    url: `https://nsk.yurist42.ru/practices`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: `yurist42.ru`,
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
