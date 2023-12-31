import { useState } from "react";
import TabContent from "./Tabs/TabContent";
import { Tab, Tabs, Button } from "@mui/material";
import { ALL_BEERS, MY_BEERS } from "../constants/appConstants";

const MainComponent = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(ALL_BEERS);

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
      <div className="d-flex flex-row flex-between align-items-center tab-menu">
        <div>
          <Tabs
            indicatorColor="primary"
            TabIndicatorProps={{
              style: { bottom: 0, borderTop: "none", display: "none" },
            }}
            textColor="inherit"
            value={activeTab}
            sx={{ fontWeight: "bold" }}
            visibleScrollbar={false}
            onChange={handleChange}
          >
            <Tab
              label="All Beers"
              value={ALL_BEERS}
              id="allBeers"
              sx={{
                backgroundColor: "transparent",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="My Beers"
              value={MY_BEERS}
              id="myBeers"
              sx={{
                backgroundColor: "transparent",
                fontWeight: "bold",
                textTransform: "capitalize",
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
