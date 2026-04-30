const { useState, useEffect } = require("react");

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  //   what its take input and what it return
  // no Input just check status and return boolean status Online or offline
  useEffect(() => {
    window.addEventListener("online", (e) => {
      setStatus(true);
    });
    window.addEventListener("offline", (e) => {
      setStatus(false);
    });
  }, []);
  return status ;
};
export default useOnlineStatus ;