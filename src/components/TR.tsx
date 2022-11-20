import React from "react";

const TR: React.FunctionComponent<{
  name: string;
  type: string;
  base: number;
}> = ({ name, type, base }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>{base}</td>
    </tr>
  );
};

export default TR;
