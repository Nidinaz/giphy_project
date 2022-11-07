import "./App.css";

const giphyJson = require("./giphy.json");

function App() {
  const gj = giphyJson.data.map((giphy) => {
    return <Giphy giphy={giphy}></Giphy>;
  });
  return <div>{gj}</div>;
}

//making compnent using prop CL


//extra variable 'let user' om met een if conditie te checken of user bestaat
const Giphy = (props) => {
  let user
  if(props.giphy.user){
    user = (
      <div>
        <img
          src={props.giphy.user.avatar_url}
          alt="avatarpicture"
        />
        <span>{props.giphy.user.display_name}</span>
      </div>
    )
  }
//terniary embedded in code to check if user exists 
  return (
    <div>
      {user}
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
