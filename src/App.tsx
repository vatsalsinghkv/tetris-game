import { Footer, Header } from '@/components/layout';

function App() {
  return (
    <main className='bg-radial text-text-base bg-bg-primary min-h-screen flex flex-col'>
      <Header />
      <main className='container flex-1 border border-bg-secondary'></main>
      <Footer />
    </main>
  );
}

export default App;
