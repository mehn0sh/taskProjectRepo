import axios from "axios";
import React, { useEffect, useState } from "react";
import LoaderComponent from "../Loader/LoaderComponent";
import "./accordion.css";
const Accordion = ({ BASE_URL }) => {
  const [isOpen, setisOpen] = useState(null);
  const [query, setquery] = useState("");
  const [serachUser, setserachUser] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  let searchHandler = async () => {
    setisLoading(true);
    setisOpen(true);
    try {
      const { data } = await axios.get(`${BASE_URL}?name_like=${query}`);
      setserachUser(data);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="my-10 ">
      <div className="accordion">
        <div
          className={`p-3 accordion-item ${
            isOpen ? "accordion__expanded" : ""
          }`}
        >
          <b>جستجو</b>
          <div className="accordion-item__header">
            <div>
              <label htmlFor="name">نام</label>
              <input
                value={query}
                onChange={(e) => setquery(e.target.value)}
                id="name"
                type="text"
                className="border rounded-md mx-3"
              />
            </div>

            <button
              className="btn btn--primary"
              onClick={() => searchHandler()}
            >
              جستجو
            </button>
          </div>
          <div className="accordion-item__content">
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <div>
                {serachUser
                  ? serachUser.map((i) => (
                      <div key={i.id}>
                        <div className="flex space-x-3">
                          <b>نام : </b> <span className="mx-2">{i.name}</span>
                          <b>نام خانوادگی : </b> <span>{i.lastName}</span>
                          <b>کدملی: </b>
                          <span>{i.code}</span>
                        </div>
                      </div>
                    ))
                  : "کاربری یافت نشد"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
