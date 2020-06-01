import React from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

/*export default function ToggleableTimerForm({ isOpen }) {
    
    return (

        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? <TimerForm /> : <TimerButton title="Add New" color="white" />}
        </View>

    );

}*/

//Add new form
export default class ToggleableTimerForm extends React.Component{
    
    state = {
        isOpen: false,
    };

    handleOpenForm = () => {
        this.setState({ isOpen: true });
    };

    handleCloseForm = () => {
        this.setState({ isOpen: false });
    }

    handleFormSubmit = timer => {
        const { onFormSubmit } = this.props;
        onFormSubmit(timer);
        this.setState({ isOpen: false });
    }

    render(){
        const { isOpen } = this.state;

        return (
            <View style={[styles.container, !isOpen && styles.buttonPadding]}>
                {isOpen ? <TimerForm onFormSubmit={this.handleFormSubmit} onCloseForm={this.handleCloseForm}/> : <TimerButton title="Add New" color="white" onPress={this.handleOpenForm} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});
