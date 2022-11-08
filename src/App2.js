import "./App.css";

const servicesJson = {
  subscriptions: [
    {
      user: {
        user_id: "1",
        username: "Mohammad",
      },
      services: ["Netflix", "DisneyPlus", "HBO Max"],
    },
    {
      user: {
        user_id: "2",
        username: "Jana",
      },
      services: ["HHHHH"],
    },
    {
      user: {
        user_id: "3",
        username: "Mohammad3",
      },
      services: ["Netflix", "DisneyPlus", "HBO Max"],
    },
  ],
};

const App2 = () => {
  const servicesComps = servicesJson.subscriptions
    .filter((userSub) => {
      return userSub.services.length >= 2
      // if (userSub.services.length < 2) {
      //   return false;
      // } else {
      //   return true;
      // }
    })
    .map((userSub) => {
      return <Sub username={userSub.user.username}></Sub>;
    });
  return <div>{servicesComps}</div>;
};

const Sub = (props) => {
  return <div>{props.username}</div>;
};

export default App2;
