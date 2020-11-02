import React from "react";
import { useParams } from "react-router-dom";


const Group = ({ data }) => {
  const { groupId } = useParams();
  const group = data.find(p => p.group_id === Number(groupId));
  let groupData;

  if (group) {
    groupData = (
      <div>
        <h3> {group.name} </h3>
        <p>{group.description}</p>
        <hr />
        <h4>Created: {group.create_date}</h4>
      </div>
    );
  } else {
    groupData = <h2> Sorry. Group doesn't exist </h2>;
  }

  return (
    <div>
      <div>{groupData}</div>
    </div>
  );
};

export default Group;