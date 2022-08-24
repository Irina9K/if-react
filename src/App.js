import SectionHomes from './components/SectionHomes';
import TopSection from './components/TopSection';
import SectionAvailable from './components/SectionAvailable';

function App() {
  return (
    <div>
      <TopSection />
      <main>
        <SectionAvailable />
        <SectionHomes />
      </main>
    </div>
  );
}

export default App;
