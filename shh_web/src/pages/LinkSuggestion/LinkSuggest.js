import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  CTLoading, useLoading, useLink, useStore,
} from "../../components";
import LinkSuggestView from "./LinkSuggestView";

const LinkSuggest = ({ location }) => {
  const { linkPost } = useLink();
  const { store, storeGet } = useStore();
  const { loading, setLoading } = useLoading(true);

  if (location.state === undefined) {
    document.location.href = "/";
  }

  const { receiver } = location.state;

  const storeId = sessionStorage.getItem("currentStoreId");

  const fetch = async () => {
    try {
      await storeGet(storeId);
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState({
    proposerId: storeId,
    receiverId: receiver.storeId,
    content: "",
  });

  const postLink = async () => {
    try {
      if (data.content.length === 0) {
        await linkPost({
          proposerId: data.proposerId,
          receiverId: data.receiverId,
          content: `${store.name}(이)가 ${receiver.name}(과)와의 제안을 원합니다`,
        });
      } else {
        await linkPost({
          proposerId: data.proposerId,
          receiverId: data.receiverId,
          content: data.content,
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    // eslint-disable-next-line no-alert
    alert(`${receiver.name}에 연계 신청을 보냈습니다`);
  };

  return (
    loading ? (
      <CTLoading />
    ) : (
      <LinkSuggestView
        proposer={store}
        insert={postLink}
        receiver={receiver}
        data={data}
        setData={setData}
      />
    )
  );
};

LinkSuggest.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object,

};

LinkSuggest.defaultProps = {
  location: {},
};

export default LinkSuggest;
