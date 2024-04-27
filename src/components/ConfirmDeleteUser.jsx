import React from "react";

const ConfirmDeleteUser = ({onClose,onDelete}) => {
  return (
    <div>
      <h2 className="font-bold text-base mb-9">رکورد حذف شود؟</h2>
      <div className="flex justify-between items-center gap-x-12">
        <button
          className="btn btn--primary flex-1"
          onClick={() => onClose(false)}
        >
          خیر
        </button>
        <button className="btn btn--danger py-3 flex-1" onClick={onDelete}>بله</button>
      </div>
    </div>
  );
};

export default ConfirmDeleteUser;
