import React, { useState } from "react";
import Container from "@mui/material/Container";
import ListsSection from "./ListsSection";
import BoardNav from "./BoardNav";
import EditCardItemModal from "./EditCardItemModal";

const BoardContent = () => {
 

  return (
    <React.Fragment>
      {/* sonrasında css ayrı bir dosyada verilebilir  component yapabilirsin ileride*/}
      
      <BoardNav />

      <section>
        {/* This component contains our lists belonging to the selected board. */}
        <ListsSection />
      </section>

      <EditCardItemModal />

    </React.Fragment>
  );
};

export default BoardContent;
