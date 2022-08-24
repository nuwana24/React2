import React from 'react'
import "../../css/contact-page.scss";
import editIcon from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";

type Props = {
  contactHandler: (contact: object) => void;
  contactList: any;
  contactupdateHandler: (contact: object) => void;
  handleEdit: (use: object) => void;
  deleteHandler: (use: object) => void;
  formUpdate?: boolean;
  updateData?: any;
  closeHandler: () => void;
}


const ContactList = (props: Props) => {

    const contactList = props.contactList;
    console.log(contactList)

  return (
    <div className="contact-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>Alternate Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {contactList.length > 0 &&
                      contactList.map((item: any) => (
              <tr>
                <td>{item.title}.{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.altEmail}</td>
                <td>
                  <button className="transparent-button">
                    <img src={editIcon} />
                  </button>
                  <button className="transparent-button"
                    onClick={() => props.deleteHandler(item)}
                  >
                    <img src={deleteIcon} />
                  </button>
                </td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
  )
}
export default ContactList