import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='easy' targetTime={1}/>
        <TimerChallenge title='Not easy' targetTime={5}/>
        <TimerChallenge title='Getting tough' targetTime={10}/>
        <TimerChallenge title='Pros Only' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
