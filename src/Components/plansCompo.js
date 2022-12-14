import React from "react";
import { Container } from "react-bootstrap";
import check from "../assets/images/check.png";
export const Plans = () => {
  return (
    <section className="py-md-5">
      <Container>
        <h2 className="plansss fs-1 mb-5   mx-auto text-center" id="plans">
          Plans
        </h2>

        <table className="w-100">
          <thead>
            <tr>
              <th className="features-th text-center ">
                <span>Features</span>
              </th>
              <th className="text-center">
                <span style={{ width: "69px" }}>Silver</span>
              </th>
              <th className="text-center">
                <span style={{ width: "59px" }}>Gold</span>
              </th>
              <th className="text-center">
                <span style={{ width: "75px" }}>Super</span>
              </th>
              <th className="text-center">
                <span style={{ width: "56px" }}>Elite</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="admin-user">
              <td style={{ backgroundColor: "#E4E4E4" }}>Admin Users</td>
              <td>2 Admins</td>
              <td>3 Admins</td>
              <td>5 Admins</td>
              <td>2 Admins</td>
            </tr>

            <tr className="sales">
              <td>Sales</td>
              <td>1 to 9</td>
              <td>10 to 49</td>
              <td>50 to 99</td>
              <td>Unlimited</td>
            </tr>
            <tr className="admin-user">
              <td style={{ backgroundColor: "#E4E4E4" }}>Keep Data</td>
              <td>3 Month</td>
              <td>3 Month</td>
              <td>3 Month</td>
              <td>Unlimited</td>
            </tr>
            <tr className="sales">
              <td>Daily Report</td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
            </tr>
            <tr className="admin-user">
              <td style={{ backgroundColor: "#E4E4E4" }}>
                Find Sales Location
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
            </tr>
            <tr className="sales">
              <td>Route</td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
            </tr>
            <tr className="admin-user">
              <td style={{ backgroundColor: "#E4E4E4" }}>Route Check Report</td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
            </tr>
            <tr className="sales">
              <td>Route Map Report</td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
              <td>
                {" "}
                <img src={check} alt="check"></img>
              </td>
            </tr>
            <tr className="admin-user ">
              <td style={{ backgroundColor: "#E4E4E4" }}>Price Per Sales</td>
              <td className="price">
                4.99 $ <span>per month</span>
              </td>
              <td className="price">
                3.99 $ <span>per month</span>
              </td>
              <td className="price">
                2.99 $ <span>per month</span>
              </td>
              <td></td>
            </tr>
            <tr >
              {" "}
              <td></td>
              <td className="mx-auto text-center">
                <td className="orders mx-auto text-center"> Order</td>
              </td>
              <td className="mx-auto text-center">
                <td className="orders mx-auto text-center">Order</td>
              </td>
              <td className="mx-auto text-center">
                <td className="orders mx-auto text-center">Order</td>
              </td>
              <td className=" mx-auto text-center">
                <td className="orders mx-auto text-center">Contact Us</td>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
  );
};
