import Qs from "query-string";
import React, { useEffect } from "react";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkAlarmView from "./LinkAlarmView";

const LinkAlarmHistory = () => {
  const {
    links, linkGetAlarm, linkPutAlarm, linkPutAlarmReturn,
  } = useLink();
  const userId = sessionStorage.getItem("sessionId");

  const fetch = async () => {
    await linkGetAlarm(2);
  };

  useEffect(() => {
    fetch();
  }, []);

  const updateAlarm = async (storeid) => {
    await linkPutAlarm(storeid);
  };

  const updateAlarmReturn = async (storeid) => {
    await linkPutAlarmReturn(storeid);
  };

  return (
    <LinkAlarmView
      storeId={2}
      total={links.total}
      results={links.results}
      alarmU={updateAlarm}
      alarmR={updateAlarmReturn}
    />

  );
};

export default LinkAlarmHistory;
