import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import styles from "./App.module.css";
import logoAppear from "./Animation/LogoAppear.module.css";
import { fetchTasks } from "../redux/actions/contactsOperation";
import contactsSelectors from "../redux/selectors/contactsSelectors";

class App extends Component {
  componentDidMount() {
    // fetch
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={styles.formBlock}>
        {this.props.isLoading && <h1>LOADING...</h1>}
        <CSSTransition
          in={true}
          appear={true}
          classNames={logoAppear}
          timeout={500}
          unmountOnExit
        >
          <h1 className={styles.logo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
