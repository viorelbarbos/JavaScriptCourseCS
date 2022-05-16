import { useEffect, useState } from "react";
const Loading = (props) => {
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  if (!props.withLoading && !Loaded) return <div>Loading, please wait</div>;
  else {
    return <div>Finished loading</div>;
  }
};
 
export default Loading;