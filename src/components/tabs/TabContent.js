import AllBeers from "./AllBeers";
import { ALL_BEERS, MY_BEERS } from "../../constants/appConstants";
function TabContent(props) {
  const { CurrentTabValue } = props;
  return (
    <div style={{ marginBottom: "40px", textAlign: "left", marginTop: "30px" }}>
      {CurrentTabValue === ALL_BEERS && <AllBeers />}
      {CurrentTabValue === MY_BEERS && <p>My custom beers</p>}
    </div>
  );
}

export default TabContent;
