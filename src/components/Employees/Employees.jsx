import styles from "../assets/styles/styles";
import React from "react";

const Employees = (props) => {
    return (
        <div>
            <div style={styles.Header}>
                <div style={styles.HeaderTitle}>
                    Сотрудники
                </div>
            </div>
            <div style={styles.Page}>
                <div style={styles.Card}>
                    {
                        props.employees.map(employee => <div key={employee.id}>
                              <span>{employee.name ? employee.name : "Аноним"}</span>
                              <span>{employee.surname}</span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
};

export default Employees;