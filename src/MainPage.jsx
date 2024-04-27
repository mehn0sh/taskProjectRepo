import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNewUserForm from "./components/AddNewUserForm";
import ConfirmDeleteUser from "./components/ConfirmDeleteUser";
import Map from "./components/Map";
import Modal from "./components/Modal";
import Table from "./components/Table";
import UserInfo from "./components/UserInfo";
import { DeleteHandler } from "./servises";
import Accordion from "./ui/Accordion/Accordion";

const MainPage = () => {
  const [isAddNewUserOpen, setisAddNewUserOpen] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [isMapOpen, setisMapOpen] = useState(false);
  const [isUserInfo, setisUserInfo] = useState(false);
  const [mapCenter, setmapCenter] = useState([52, 4.3]);
  const [usersList, setusersList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [userId, setuserId] = useState("");
  const [userInfo, setuserInfo] = useState({});
  const [userToEdit, setuserToEdit] = useState({});
  const BASE_URL = "https://polite-lizard-temple.glitch.me/users";
  useEffect(() => {
    async function fetchUsersData() {
      setisLoading(true);
      try {
        const { data } = await axios.get(BASE_URL);
        setusersList(data);
      } catch (error) {
      } finally {
        setisLoading(false);
      }
    }
    fetchUsersData();
  }, [data]);

  let onDelete =  () => {
    DeleteHandler(userId,usersList,setusersList,setisDelete);
  };
  let onDeleteOpen = (e, id) => {
    setisDelete(true);
    setuserId(id);
  };
  let onEditOpen = (e, user) => {
    setisEdit(true);
    setuserToEdit(user);
  };
  let onUserInfoOpen=(e,user)=>{
    setisUserInfo(true)
    setuserInfo(user)
  }
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-xl m-auto flex-col ">
      <Accordion BASE_URL={BASE_URL}/>
      <div className="flex ">
        <button
          className="btn btn--primary "
          onClick={() => setisAddNewUserOpen(true)}
        >
          افزودن
        </button>
      </div>

      <Table
        onDeleteOpen={onDeleteOpen}
        onMapOpen={() => setisMapOpen(true)}
        onEditOpen={onEditOpen}
        users={usersList}
        setmapCenter={setmapCenter}
        isLoading={isLoading}
        onUserInfoOpen={onUserInfoOpen}
        setuserToEdit={setuserToEdit}
      />
      <Modal
        title={"افزودن کاربر"}
        open={isAddNewUserOpen}
        onClose={() => setisAddNewUserOpen(false)}
      >
        <AddNewUserForm
          onClose={() => setisAddNewUserOpen(false)}
          setusersList={setusersList}
          usersList={usersList}
          setisAddNewUserOpen={setisAddNewUserOpen}
          BASE_URL={BASE_URL}
        />
      </Modal>
      <Modal open={isDelete} title={`حذف `} onClose={() => setisDelete(false)}>
        <ConfirmDeleteUser
          onClose={() => setisDelete(false)}
          onDelete={onDelete}
        />
      </Modal>
      <Modal
        open={isMapOpen}
        title={`نقشه `}
        onClose={() => setisMapOpen(false)}
      >
        <Map mapCenter={mapCenter} />
      </Modal>
      <Modal open={isEdit} title={`ویرایش `} onClose={() => setisEdit(false)}>
        <AddNewUserForm
          userToEdit={userToEdit}
          onClose={() => setisEdit(false)}
          setusersList={setusersList}
          usersList={usersList}
          setisEdit={setisEdit}
          BASE_URL={BASE_URL}
        />
      </Modal>
      <Modal open={isUserInfo}  onClose={() => setisUserInfo(false)}>
        <UserInfo userInfo={userInfo} onClose={() => setisUserInfo(false)}/>
      </Modal>
    </div>
  );
};

export default MainPage;
