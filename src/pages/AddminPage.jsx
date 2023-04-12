import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import CustomizedTables from "../components/CustomizedTables";
import { admimContext } from "../contexts/AdminContext";

const AddminPage = () => {
  const { clearState } = useContext(admimContext);
  useEffect(() => {
    clearState();
  }, []);

  return (
    <div>
      <div className="header">
        <Link to="/admin/add">
          <Button
            variant="contained"
            style={{ backgroundColor: "darkgreen", minWidth: "300px" }}
          >
            Добавить товар
          </Button>
        </Link>
      </div>
      <CustomizedTables />
    </div>
  );
};

export default AddminPage;
