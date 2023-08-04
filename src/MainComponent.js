import { useState } from "react";
import { Tab, Tabs, Button } from "@mui/material";
import TabContent from "./components/tabs/TabContent";
import { ALL_BEERS, MY_BEERS } from "./constants/appConstants";

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState(ALL_BEERS);
  const [isModelOpen, setModelOpen] = useState(false);

  const handleOpenModel = () => {
    setModelOpen(true);
  };

  const handleCloseModel = () => {
    setModelOpen(false);
  };

  const handleChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <div className="d-flex flex-row flex-between align-items-center">
        <div>
          <Tabs
            indicatorColor="primary"
            TabIndicatorProps={{ style: { bottom: 0, borderTop: "none" } }}
            textColor="inherit"
            value={activeTab}
            onChange={handleChange}
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
              onClick={handleOpenModel}
            >
              Add a new beer
            </Button>
          </div>
        )}
      </div>
      <TabContent
        CurrentTabValue={activeTab}
        handleCloseModel={handleCloseModel}
        handleOpenModel={handleOpenModel}
        isModelOpen={isModelOpen}
      />
    </>
  );
};

export default MainComponent;
