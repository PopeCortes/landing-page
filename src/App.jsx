import { ElementFooter } from "./components/ElementFooter";
import { Header } from "./components/Header";
import { ImagesMixApp } from "./components/ImagesMixApp";
import { Main } from "./components/Main";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Main />
      <Services />
      <Testimonials />
      <ImagesMixApp />
      <ElementFooter />
    </main>
  );
}

export default App;
