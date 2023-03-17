import React from "react";

const TR: React.FunctionComponent<{
  name: string;
  type: string;
  base: number;
}> = ({ name, type, base }) => {
  return (
    <tr>
      <td className="font-cstm p-2 text-base">{name}</td>
      <td className="font-cstm p-2 text-base">{type}</td>
      <td className="font-cstm p-2 text-base">{base}</td>
    </tr>
  );
};

export default TR;
