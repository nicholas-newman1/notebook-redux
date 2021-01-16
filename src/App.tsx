import Header from './components/Header/Header';
import NotesList from './components/NotesList/NotesList';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NotesList />
    </div>
  );
};

export default App;
