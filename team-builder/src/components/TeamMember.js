import React from "react";

const TeamMember = props => {
  console.log(props);
  return (
    <div className="Team-list">
      {props.memberList.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h1>{member.name}</h1>
            <h2>{member.email}</h2>
            <h3>{member.role}</h3>
            <p>{member.info}</p>

          </div>
        );
      })}
    </div>
  );
};
export default TeamMember;