import Sidenav from "./components/Sidenav";
import DashboardManagement from "./components/Dashboard/DashboardManagement";
import UsersManagement from "./components/Users/UsersManagement"


function App() {
  return (
    <>
    <Sidenav />
     <main
     style={{
          marginLeft: "240px",
          padding: "24px",
        }}>
        <DashboardManagement />
        <UsersManagement/>
      </main>
    </>
  );
}

export default App;