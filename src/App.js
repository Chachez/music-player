import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Artists from "pages/Artists";
import TopCharts from "pages/TopCharts";
import Playlists from "pages/Playlists";
import Podacasts from "pages/Podacasts";
import Footer from "components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Artist from "pages/Artist";

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/artist/:id" component={Artist} />
          <Route exact path="/albums" component={TopCharts} />
          <Route exact path="/playlists" component={Playlists} />
          <Route exact path="/podcasts" component={Podacasts} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
