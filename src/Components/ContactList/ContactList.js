import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import styles from "./ContactList.module.css";
import contactItem from "../Animation/contactItem.module.css";
import { removeTask } from "../../redux/actions/contactsOperation";

import contactsSelectors from "../../redux/selectors/contactsSelectors";

function Contacts({ contacts, removeTask }) {
  return (
    <>
      <h2>Contacts</h2>
      <TransitionGroup component="ul" className={styles.contactList}>
        {contacts.map(({ id, items }) => (
          <CSSTransition key={id} classNames={contactItem} timeout={250}>
            <li className={styles.contactItem}>
              <span>{items.name}</span> <span>{items.number} </span>
              <button
                className={styles.btnClose}
                type="button"
                onClick={() => removeTask(id)}
              >
                &times;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  contacts: contactsSelectors.getContactList(state),
});

const mapDispatchToProps = {
  removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
