import logo from './logo.svg';
import './App.css';
import Joke from './Joke'
function App() {
  return (
    <div>
      <Joke 
        setup="joke1-lorem ipsum is how things tarted in jokes"
        punchline="punch-1 lorem ipusum ofjokes "
        isPun = {true}
        upvotes ={10}/>
      <Joke 
        setup="joke2-lorem ipsum is how things tarted in jokes"
        punchline="punch-2 lorem ipusum ofjokes "
        isPun = {false}
        upvotes ={10}
        downVotes = {2}
        comments ={[{author: "", body: "", title: ""}]}/>
      <Joke 
        setup="joke3-lorem ipsum is how things tarted in jokes"
        punchline="punch-3 lorem ipusum ofjokes "
        isPun = {true}
        upvotes ={10}/>
      <Joke 
        setup="joke4-lorem ipsum is how things tarted in jokes"
        punchline="punch-4 lorem ipusum ofjokes "
        isPun = {true}
        upvotes ={10}/>
      <Joke 
        setup="joke5-lorem ipsum is how things tarted in jokes"
        punchline="punch-5 lorem ipusum ofjokes "
        isPun = {true}
        upvotes ={10}/>
    </div>
  );
}

export default App;
