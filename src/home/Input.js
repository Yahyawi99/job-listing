import React, { useState, useRef, useEffect } from "react";
// Icons
import { FaSearch } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
// CSS
import "./Input.css";
// Context
import { useItGlobally } from "../useContext";
// Data
import { Data } from "../data";

const Input = () => {
  const { showModal, setShowModal, setJobs, setSearchMode } = useItGlobally();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const refCheckBox = useRef(null);

  const searchHandller = (e) => {
    e.preventDefault();

    setShowModal(false);
    setSearchMode(true);
    document.body.style.overflow = "visible";

    if (!title && !location) {
      setJobs(Data);
    } else {
      setJobs(() => {
        return Data.filter((job) => {
          if (
            job.location
              .toLocaleLowerCase()
              .includes(location.toLocaleLowerCase()) &&
            job.position.toLocaleLowerCase().includes(title.toLocaleLowerCase())
          ) {
            return job;
          }
        });
      });
    }

    if (isFullTime && !title && !location) {
      setJobs(() => {
        return Data.filter((job) => job.contract === "Full Time");
      });
    } else if (isFullTime && (title || location)) {
      setJobs((value) => {
        return value.filter((job) => job.contract === "Full Time");
      });
    }

    if (!title && !location && !isFullTime) {
      setJobs(Data.slice(0, 9));
      setSearchMode(false);
    }

    setTitle("");
    setLocation("");
    setIsFullTime(false);

    refCheckBox.current.checked = false;
  };

  return (
    <>
      <form className="form">
        <div className="title-input-controle">
          <span className="icon">
            <FaSearch />
          </span>

          <input
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            type="text"
            placeholder="Filter by title..."
          />
        </div>

        <div className="location-input-controle">
          <span className="icon">
            <MdLocationPin />
          </span>

          <input
            value={location}
            onChange={(e) => {
              setLocation(e.currentTarget.value);
            }}
            type="text"
            placeholder="Filter by location..."
          />
        </div>

        <div className="checkBox-container">
          <input
            ref={refCheckBox}
            value={isFullTime}
            onChange={() => {
              setIsFullTime(!isFullTime);
            }}
            type="checkbox"
          />
          <p>Full Time</p>
        </div>

        <span
          className="torch-icon"
          onClick={() => {
            setShowModal(true);
            window.scrollTo({
              top: 0,
            });
            document.body.style.overflow = "hidden";
          }}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fill="#6E8098"
              fillRule="nonzero"
            />
          </svg>
        </span>

        <button className="search-btn" onClick={searchHandller}>
          {window.innerWidth < 350 ? <FaSearch /> : "Search"}
        </button>
      </form>

      <Modal
        conditon={showModal}
        location={location}
        setLocation={setLocation}
        isFullTime={isFullTime}
        setIsFullTime={setIsFullTime}
        searchFunction={searchHandller}
        refCheckBox={refCheckBox}
      />
    </>
  );
};

const Modal = ({
  conditon,
  location,
  setLocation,
  isFullTime,
  setIsFullTime,
  searchFunction,
  refCheckBox,
}) => {
  return (
    <article className={`modal-container ${conditon && "showModal"}`}>
      <section className="modal">
        <div className="location-input-controle">
          <span className="icon">
            <MdLocationPin />
          </span>

          <input
            value={location}
            onChange={(e) => {
              setLocation(e.currentTarget.value);
            }}
            type="text"
            placeholder="Filter by location..."
          />
        </div>
        <div className="checkBox-container">
          <input
            ref={refCheckBox}
            type="checkbox"
            value={isFullTime}
            onChange={(e) => {
              setIsFullTime(!isFullTime);
            }}
          />
          <p>Full Time</p>
        </div>
        <button className="search-btn" onClick={searchFunction}>
          Search
        </button>
      </section>
    </article>
  );
};

export default Input;
