import { useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";

const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

const useShallowEqualSelectorToJS = (selector) => {
  const result = useSelector(selector, shallowEqual);
  return useMemo(() => result.toJS(), [result]);
};

export {
  useShallowEqualSelector,
  useShallowEqualSelectorToJS,
};
