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
      services: [],
    },
  ],
};

const App2 = () => {
  const servicesComps = servicesJson.subscriptions.map((userSub) => {
    if (userSub.services.length === 0) {
        return null
    }

    return <Sub username={userSub.user.username}></Sub>;
  });
  return <div>{servicesComps}</div>;
};

const Sub = (props) => {
  return <div>{props.username}</div>;
};

export default App2;
