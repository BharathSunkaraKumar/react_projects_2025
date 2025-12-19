import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const feureFlagContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});
  const fetchFlags = async () => {
    try {
      setLoading(true);
      const resp = await featureFlagsDataServiceCall();
      console.log(resp);
      setEnableFlags(resp);
      setLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  // console.log("hi");
  useEffect(() => {
    fetchFlags();
  }, []);
  return (
    <feureFlagContext.Provider value={{ loading, enableFlags }}>
      {children}
    </feureFlagContext.Provider>
  );
};

export default FeatureFlagGlobalState;
