import React from "react";

const BasicInfo = ({ person }) => {
  // const person  = props;
  console.log(person);

  return person.map((data) => {
    return (
      <div key={data._id}>
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Mobile Number: {data.phone}</p>
        <p>Birthday: {data.birthday}</p>
      </div>
    );
  });
};

export default BasicInfo;
