import React from "react";
import { FaRegEye, FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import LoaderComponent from "../ui/Loader/LoaderComponent";

const Table = ({ onDeleteOpen, onMapOpen, users,setuserToEdit, setmapCenter, isLoading ,onEditOpen,onUserInfoOpen}) => {
  let mapHandler = (item) => {
    onMapOpen(),
    setmapCenter([item.lat, item.lng]);
  };

  return (
    <div className="mt-8">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="overflow-x-auto  m-auto">
          <table>
            <thead>
              <tr className="title-row">
                <th>ردیف</th>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>کد ملی</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item, index) => {
                return (
                  <tr className="bg-white " key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.code}</td>
                    <td>
                      <div className="flex justify-between ">
                        <span onClick={(e)=>onUserInfoOpen(e,item)}>
                          <FaRegEye size="20" />
                        </span>
                        <span onClick={(e)=>{onEditOpen(e,item)}}>
                          <FaRegEdit size="20" />
                        </span>
                        <span onClick={() => mapHandler(item)}>
                          <FaMapLocationDot size="20" />
                        </span>
                        <span onClick={(e)=>onDeleteOpen(e,item.id)}>
                          <FaTrashAlt size="20" />
                        </span>
                        <span>
                          <ImStatsBars size="20" />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
