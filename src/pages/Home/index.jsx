import BannerRoutine from "../../components/BannerRoutine";
import CardsHighlights from "../../components/CardsHighlights";
import CardsInformations from "../../components/CardsInformations";
import Header from "../../components/Header";
import Recommendation from "../../components/Recommendation";

export function Home() {
  return (
    <>
      <Header />
      <BannerRoutine />
      <CardsHighlights />
      <CardsInformations />
      <Recommendation />
    </>
  )
}