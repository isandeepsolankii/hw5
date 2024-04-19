import { useState } from "react";

import "./App.css";

function App() {
  const [activity, setActivity] = useState("");

  const getActivity = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity");
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error("Error fetching random activity:", error);
      setActivity("Error fetching activity");
    }
  };

  return (
    <>
      <div className="body_container">
        <h1>Let's find you something to do</h1>
        <button onClick={getActivity} className="TaskButton">
          Click me{" "}
        </button>
        <h3 className="activity">{activity}</h3>
      </div>
    </>
  );
}

export default App;
