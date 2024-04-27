import React from "react";

const UserInfo = ({ userInfo,onClose }) => {
  return (
    <div className="space-y-4">
      <p>
        <b>نام</b> : {userInfo.name}
      </p>
      <p>
        <b> نام خانوادگی </b>: {userInfo.lastName}
      </p>
      <p>
        <b> کد ملی </b>: {userInfo.code}
      </p>
      <button className="btn btn--danger" onClick={onClose}>بستن</button>
    </div>
  );
};

export default UserInfo;
