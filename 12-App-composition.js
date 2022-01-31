import Bracket from './components/Composition/Bracket';
import Emoji from './components/Composition/Emoji';
import Text from './components/Composition/Text';

function App() {
  return (  // here, text, emoji er children hishabe asey
    <Emoji>
      { // desctructuring addEmoji
        ({addEmoji}) =>
          <Bracket>
            {
              ({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />
            }

            {/* without adding bracket, below code */}
            {/* {
              () => <Text addEmoji={addEmoji} />
            } */}
          </Bracket>
      }
    </Emoji>
    );
}

export default App;