import React from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/todoActions";
import contactsSelectors from "../../redux/selectors/contactsSelectors";

function Filter({ filter, setFilter }) {
  return (
    <div className={styles.form}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        type="search"
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  filter: contactsSelectors.getFilter(state),
});

export default connect(mapStateToProps, { setFilter })(Filter);
