import SectionHomes from './components/SectionHomes';
import SectionFormTop from './components/SectionFormTop';
import SectionFooter from './components/SectionFooter';

function App() {
  return (
    <div>
      <SectionFormTop />
      <main>
        <SectionHomes />
      </main>
      <SectionFooter />
    </div>
  );
}

export default App;
