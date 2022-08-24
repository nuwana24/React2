import React, { useEffect, useState } from "react";
import "../../css/contact-form.scss";
import { v4 as uuidv4 } from 'uuid';
import api from "../../api/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Props = {
  // contactHandler: (contact: object) => void;
  // contactList: any;
  // contactupdateHandler: (contact: object) => void;
  formUpdate?: boolean;
  updateData?: any;
  // closeHandler: () => void;
};
interface State {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  altEmail: string;
  mobileNumber: number;
  email: string;
  password: string;
  marketingPref: string;
}

const ContactForm = (props: Props) => {
  const [contactList, setContactList] = useState<State[]>([]);
  const [contacts, setContacts] = useState<State[]>([]);


  const id = uuidv4()
  // const [title, setTitle] = useState('')
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [altEmail, setAltEmail] = useState('')
  // const [mobileNumber, setMobileNumber] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [password2, setPassword2] = useState('')
  // const [marketingPref, setMarketingPref] = useState('')


  const postData = async (contact: any) => {
    setContactList(contactList.concat(contact));
    console.log(contact);
    const request = contact;

    const response = await api
      .post("/contact", request)
      .then((res: any) => {
        setContactList([...contactList, res.data]);
        setContacts([...contactList, res.data]);
      })
      .catch((error: any) => {
        console.log(error);
      });
    return response;
  };


  // const postData = () =>{
  //   axios.post("/contact", {
  //     id,
  //     title,
  //     firstName,
  //     lastName,
  //     altEmail,
  //     mobileNumber,
  //     email,
  //     password,
  //     password2,
  //     marketingPref
  //   }).catch((error: any) => {
  //     console.log(error);
  //   });

  // }
  return (
    <>
      <body>
        <div className="page-title">
          <div className="title">
            <h1>Add New Contact</h1>
          </div>
          <div className="page-description">
            <div className="page-description-left">
              <h3>
                Manage team member roles for BT accounts and services swiftly
                and easily
              </h3>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <h2 className="form-heading">Please set you login details</h2>
            <div className="form-row">
              <label>Title:</label>
              <br />
              {/* <input type="text" id="fname" name="fname" /> */}
              <select id="title" name="title" onChange={(e) => setContactList(e.target.value)}>
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
                <option value="Rev">Rev</option>
              </select>
            </div>
            <div className="form-row">
              <label>First Name:</label>
              <br />
              <input type="text" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value )}/>
            </div>
            <div className="form-row">
              <label>Last Name:</label>
              <br />
              <input type="text" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value )}/>
            </div>
            <div className="form-row">
              <label>Mobile Number:</label>
              <br />
              <input type="text" id="mobileNumber" name="mobileNumber" onChange={(e) => setMobileNumber(e.target.value )}/>
            </div>
            <div className="form-row">
              <label>Alternative Email(Optional):</label>
              <br />
              <input type="text" id="altEmail" name="altEmail" onChange={(e) => setAltEmail(e.target.value )}/>
            </div>

            <h2 className="form-heading">Please set you login details</h2>

            <div className="form-row">
              <label>Username / Email:</label>
              <br />
              <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value )}/>
            </div>
            <div className="form-row">
              <label>Password:</label>
              <br />
              <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value )}/>
            </div>
            <div className="form-row">
              <label>Confirm Password:</label>
              <br />
              <input type="password" id="password2" name="password2" onChange={(e) => setPassword2(e.target.value )}/>
            </div>

            <h2 className="form-heading">Matching Preferences</h2>
            <p>Please select your preferred contact method:</p>
            <div>
              <input
                type="radio"
                id="marketingPref"
                name="marketingPref"
                value="Yes"
                onChange={(e) => setMarketingPref(e.target.value )}
              />
              <label>Yes</label>

              {/* <input
                type="radio"
                id="marketingPref"
                name="marketingPref"
                value="No"
                onChange={(e) => setMarketingPref(e.target.value )}
              /> */}
              <label>No</label>
            </div>
            <div>
              <button>Cancel</button>
              <button  onClick={postData} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </body>
    </>
  );
};
export default ContactForm;
