import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Outlet />
    </div>
  );
};

export default App;
