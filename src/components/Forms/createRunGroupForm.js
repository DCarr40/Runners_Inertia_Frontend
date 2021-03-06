import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createRunGroupAction } from "../Redux/RunGroup/rungroupActions";
import "./style.css";

export const CreateRunGroupForm = () => {
  const dispatch = useDispatch();
  const [groupData, setGroupData] = useState({ name: "", groupType: "" });

  useEffect(() => (document.title = "Create Run Group - Runner's Inertia"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRunGroupAction(groupData));
    window.location.assign("/homepage");
  };

  return (
    <div className="container z-depth-2 hoverable">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Group</h5>
        <div className="inputbox">
          <label htmlFor="title">Group Name</label>
          <input
            type="text"
            id="name"
            value={groupData.name}
            onChange={(e) =>
              setGroupData({ ...groupData, name: e.target.value })
            }
          />
        </div>
        <div className="inputbox">
          <label htmlFor="title">Group Type</label>
          <input
            type="text"
            id="groupType"
            value={groupData.groupType}
            onChange={(e) =>
              setGroupData({ ...groupData, groupType: e.target.value })
            }
          />
        </div>
        <div className="inputbox">
          <button className="btn purple lighten-0 z-depth-2">Submit</button>
        </div>
      </form>
    </div>
  );
};
