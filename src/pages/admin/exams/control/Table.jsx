import React from "react";
import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["Name", "ID", "al7an", "qbty", "taks", "hall"];
const TABLE_ROWS = [
  {
    name: "John Michael",
    id: "2452345",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "maximos",
  },
  {
    name: "John Michael",
    id: "234534",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "anba-karas",
  },
  {
    name: "John Michael",
    id: "345456",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "anba-karas",
  },
  {
    name: "John Michael",
    id: "45674",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "maximos",
  },
  {
    name: "John Michael",
    id: "6789",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "maximos",
  },
  {
    name: "John Michael",
    id: "789890",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "anba-karas",
  },
  {
    name: "John Michael",
    id: "565678",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "anba-karas",
  },
  {
    name: "John Michael",
    id: "698789",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "anba-karas",
  },
  {
    name: "John Michael",
    id: "978979",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "maximos",
  },
  {
    name: "John Michael",
    id: "79967",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "maximos",
  },
  {
    name: "John Michael",
    id: "456456",
    al7an: "true",
    qbty: "false",
    taks: "false",
    hall: "anba-karas",
  },
];
const Table = () => {
  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {TABLE_ROWS.map(({ name, id, al7an, qbty, taks, hall }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {al7an}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {qbty}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {taks}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {hall}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
