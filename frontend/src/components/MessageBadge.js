import React from "react";

function NotifyBadge(props) {
  const { error, setError,bgColor } = props;

  setTimeout(() => {
    setError(null);
  }, 2000);

  return (
    <div className={`shadow-sm absolute top-0 left-1/2 mr-2 mt-2 rounded ${bgColor} py-1 px-2 transform -translate-x-1/2 `}>
      <p className="text-white">{error}</p>
    </div>
  );
}

export default NotifyBadge;
