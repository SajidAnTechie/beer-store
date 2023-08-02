import { useState } from "react";
import { Tab, Tabs, Button } from "@mui/material";
import TabContent from "./components/tabs/TabContent";
import { ALL_BEERS, MY_BEERS } from "./constants/appConstants";
function MainComponent() {
  const [activeTab, setTabValue] = useState(ALL_BEERS);

  const handleChange = (newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <div className="tab-menu">
        <div>
          <Tabs
            indicatorColor="primary"
            TabIndicatorProps={{ style: { bottom: 0, borderTop: "none" } }}
            textColor="inherit"
            value={activeTab}
            onChange={(_event, newValue) => handleChange(newValue)}
          >
            <Tab
              label="All Beers"
              value={ALL_BEERS}
              id="allBeers"
              style={{
                backgroundColor: "transparent",
              }}
            />
            <Tab
              label="My Beers"
              value={MY_BEERS}
              id="myBeers"
              style={{
                backgroundColor: "transparent",
              }}
            />
          </Tabs>
        </div>
        {activeTab === MY_BEERS && (
          <div>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className="mr-2"
              onClick={() => console.log("Hello world")}
            >
              Add a new beer
            </Button>
          </div>
        )}
      </div>
      <TabContent CurrentTabValue={activeTab} />
    </>
  );
}

export default MainComponent;
