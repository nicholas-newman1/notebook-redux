import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import NewNoteBtn from './components/NewNoteBtn/NewNoteBtn';
import NewNoteForm from './components/NewNoteForm/NewNoteForm';
import NotesList from './components/NotesList/NoteList';
import ViewNote from './components/ViewNote/ViewNote';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className='main'>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <NotesList />
              <NewNoteBtn />
            </Route>
            <Route exact path='/new-note' component={NewNoteForm} />
            <Route exact path='/notes/:id' component={ViewNote} />
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
