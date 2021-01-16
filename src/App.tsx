import Header from './components/Header/Header';
import NotesList from './components/NotesList/NotesList';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <div className='container'>
          <NotesList />
        </div>
      </main>
    </div>
  );
};

export default App;
