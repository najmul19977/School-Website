import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import GovHoliday from "../GovHoliday/GovHoliday";

const ReactTab = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onButtonClick = () => {
    const pdfUrl = "https://www.soundczech.cz/temp/lorem-ipsum.pdf";
    const newWindow = window.open(pdfUrl, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center mt-5  mb-5">
      <Box sx={{ width: "100%" }}>
        <Tabs className="mt-5" 
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Dhanmundi Branch" />
          <Tab value="two" label="Gulshan Branch" />
          <Tab value="three" label="Badda Branch" />
        </Tabs>
        <div role="tabpanel" hidden={value !== "one"}>
          <div className="mx-auto">
            <div className="grid grid-cols-3 mt-8">
              <div className="text-left font-semibold">
                Ramadan Class Routine 2023
              </div>
              <div>Dhanmundi Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Final Term Examination 2023
              </div>
              <div>Dhanmundi Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">Revised Notice</div>
              <div>Dhanmundi Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Orientation Day, Session 2023-24
              </div>
              <div>Dhanmundi Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Admission Notice 2024
              </div>
              <div>Dhanmundi Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
          </div>
        </div>
        <div role="tabpanel" hidden={value !== "two"}>
          <div>
            <div className="grid grid-cols-3 mt-8">
              <div className="text-left font-semibold">
                Ramadan Class Routine 2023
              </div>
              <div>Gulshan Branch</div>
              <button className="btn btn-primary">Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Final Term Examination 2023
              </div>
              <div>Gulshan Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">Revised Notice</div>
              <div>Gulshan Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Orientation Day, Session 2023-24
              </div>
              <div>Gulshan Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Admission Notice 2024
              </div>
              <div>Gulshan Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
          </div>
        </div>
        <div role="tabpanel" hidden={value !== "three"}>
          <div>
            <div className="grid grid-cols-3 mt-8">
              <div className="text-left font-semibold">
                Ramadan Class Routine 2023
              </div>
              <div>Badda Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Final Term Examination 2023
              </div>
              <div>Badda Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">Revised Notice</div>
              <div>Badda Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Orientation Day, Session 2023-24
              </div>
              <div>Badda Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="text-left font-semibold">
                Admission Notice 2024
              </div>
              <div>Badda Branch</div>
              <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
            </div>
          </div>
        </div>
      </Box>
      <GovHoliday></GovHoliday>
    </div>
  );
};

export default ReactTab;
