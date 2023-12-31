import MyBeers from "./MyBeers";
import AllBeers from "./AllBeers";
import { ALL_BEERS, MY_BEERS } from "../../constants/appConstants";

const TabContent = (props) => {
  const { CurrentTabValue, handleCloseModel, isModelOpen, handleOpenModel } =
    props;
  return (
    <div style={{ marginTop: "17px" }}>
      {CurrentTabValue === ALL_BEERS && <AllBeers />}
      {CurrentTabValue === MY_BEERS && (
        <MyBeers
          handleCloseModel={handleCloseModel}
          handleOpenModel={handleOpenModel}
          isModelOpen={isModelOpen}
        />
      )}
    </div>
  );
};

export default TabContent;
