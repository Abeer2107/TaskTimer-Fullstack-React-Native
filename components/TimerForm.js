import React from 'react';
import {StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

/*export default function TimerForm({id, title, task}){
    const submitText = id ? 'Update' : 'Create';

    return (
        <View style = {styles.container}>

            <View style = {styles.attrContainer}>

                <Text style={styles.textInputTitle}>Title</Text>

                <View style={styles.textInputContainer}>

                    <TextInput style={styles.textInput} underlineColorAndroid="transparent" defaultValue={title} />

                </View>

            </View>

            <View style={styles.attrContainer}>

                <Text style={styles.textInputTitle}>Task</Text>

                <View style={styles.textInputContainer}>

                    <TextInput style={styles.textInput} underlineColorAndroid="transparent" defaultValue={task} />

                </View>

            </View>

            <View style={styles.buttonGroup}>

                <TimerButton small color="#5598AF" title={submitText} />
                <TimerButton small color="#BA3F24" title="Cancel" />
            
            </View>

        </View>
        
    );
}*/

export default class TimerForm extends React.Component{
    constructor(props){
        super(props);

        const {id, title, task } = props;

        this.state = {
            title: id ? title : '',
            task: id ? task : '',
        };
    }

    handleChangeTitle = title => {
        this.setState({ title });
    }

    handleChangeTask = task => {
        this.setState({ task });
    }

    handleSubmit = () => {
        const { onFormSubmit, id } = this.props;
        const { title, task } = this.state;

        onFormSubmit({ id, title, task });
    };

    render(){
        const { id, onCloseForm } = this.props;
        const { title, task } = this.state;
        const submitText = id ? 'Update' : 'Create';

        return (
            <View style = {styles.container}>
    
                <View style = {styles.attrContainer}>
    
                    <Text style={styles.textInputTitle}>Title</Text>
    
                    <View style={styles.textInputContainer}>
    
                        <TextInput style={styles.textInput} underlineColorAndroid="transparent" onChangeText={this.handleChangeTitle} value={title} />
    
                    </View>
    
                </View>
    
                <View style={styles.attrContainer}>
    
                    <Text style={styles.textInputTitle}>Task</Text>
    
                    <View style={styles.textInputContainer}>
    
                        <TextInput style={styles.textInput} underlineColorAndroid="transparent"  onChangeText={this.handleChangeTask} value={task} />
    
                    </View>
    
                </View>
    
                <View style={styles.buttonGroup}>
    
                    <TimerButton small color="#5598AF" title={submitText} onPress={this.handleSubmit} />
                    <TimerButton small color="#BA3F24" title="Cancel" onPress={onCloseForm}/>
                
                </View>
    
            </View>
            
        );

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
    },
    attrContainer: {
        marginVertical: 5,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 3,
        borderWidth: 2,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

