import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class CustomDatePicker extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            date: this.props.value ? this.props.value : new Date()
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (newValue) => {
        const { onChange, value } = this.props;
        console.log(newValue);
        if (value !== newValue) {
            onChange(newValue)
        }

        this.setState({date: newValue})
    }

    render() {
        return (
            <DatePicker
                selected={this.state.date}
                onCange={date => this.setState(date)}
                className='filter-main-input -name form-control'
                placeholder='213'
            />
        )
    }
}

export default CustomDatePicker;