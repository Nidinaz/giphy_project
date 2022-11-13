import "./App.css";

const giphyJson = require("./giphy.json");

//rewrite the current function using .filter and redundancy variable
//filter voor map
//with the code below the giphys are just shown if there is a user
//no falsy game-play; better: use the concrete definition

function App() {
  const gj = giphyJson.data
    .filter((giphy) => {
      // return giphy.user !== undefined;
      //als een user niet aanwezig is, wordt false gereturned
      if (giphy.user === undefined) {
        return false;
      } else {
        return true;
      }

    })
    .map((giphy) => {
      return <Giphy giphy={giphy}></Giphy>;
    });
  return <div>{gj}</div>;
}

//extra variable 'let user' om met een if conditie te checken of user bestaat
const Giphy = (props) => {
  return (
    <div>
      <div>
        <img src={props.giphy.user.avatar_url} alt="avatarpicture" />
        <span>{props.giphy.user.display_name}</span>
      </div>
      {/* <div>
        <img
          src={props.giphy.user ? props.giphy.user.avatar_url : ""}
          alt="avatarpicture"
        />
        <span>{props.giphy.user ? props.giphy.user.display_name : ""}</span>
      </div> */}
      <img src={props.giphy.images.original.url} alt={props.giphy.title} />
      <video controls width={props.giphy.images.original.width}>
        <source src={props.giphy.images.original.mp4} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default App;
