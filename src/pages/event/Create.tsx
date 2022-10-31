import React from "react";
import Head from "next/head";

import EventForm from "@pages/event/components/eventform/EventForm";
import LayOut from "@layout/LayOut";
import HeaderMetaData from "@common/MetaData/HeaderMetaData";

const Create = () => {
  return (
    <LayOut>
    <div>
      <HeaderMetaData/>
      <EventForm />
    </div>
    </LayOut>
  );
};

export default Create;
