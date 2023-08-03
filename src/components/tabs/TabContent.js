import AllBeers from "./AllBeers";
import { ALL_BEERS, MY_BEERS } from "../../constants/appConstants";
import MyBeers from "./MyBeers";
const TabContent = (props) => {
  const { CurrentTabValue, handleCloseModel, isModelOpen } = props;
  return (
    <div style={{ marginTop: "30px" }}>
      {CurrentTabValue === ALL_BEERS && <AllBeers />}
      {CurrentTabValue === MY_BEERS && (
        <MyBeers
          handleCloseModel={handleCloseModel}
          isModelOpen={isModelOpen}
        />
      )}
    </div>
  );
};

export default TabContent;
