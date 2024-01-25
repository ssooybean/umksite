import CasesList from "@/widgets/Cases/CasesList";
import IntroText from "@/widgets/Introduce/IntroText";
import Preloader from "@/widgets/Preloader/Preloader";

export default function Home() {
  return (
    <main className="flex justify-between relative ">
      <Preloader />
      <section className="container m-auto w-full justify-between h-[100vh] flex items-center">
        <div>3d</div>
        <IntroText />
      </section>
      <CasesList />
    </main>
  );
}
