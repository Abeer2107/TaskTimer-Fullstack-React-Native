import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { msToHMS } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

//Single task block
export default class Timer extends React.Component {
        
    //Start
    handleStartPress = () => {
        const { id, onStartPress } = this.props;
        onStartPress(id);
    };

    //Stop
    handleStopPress = () => {
        const { id, onStopPress } = this.props;
        onStopPress(id);
    }

    //Delete
    handleRemove = () => {
        const {id, onRemovePress } = this.props;
        onRemovePress(id);
    };

    renderActionButton(){
        const {isRunning} = this.props;

        if(isRunning){
            return (
                <TimerButton color="#BA3F24" title="Stop" onPress={this.handleStopPress}/>
            );
        }

        return (
            <TimerButton color = "#5598AF" title="Start" onPress={this.handleStartPress}/>
        );
    }

    render(){
        const {elapsed, title, task, onEditPress} = this.props;
        const elapsedString = msToHMS(elapsed);

        return (
            <View style={styles.timerContainer}>
    
                <Text style={styles.title}>{title}</Text>
                <Text>{task}</Text>
                <Text style={styles.elapsedTime}>{elapsedString}</Text>
    
                <View style={styles.buttonGroup}>
                    <TimerButton color="#BA3F24" small title="Edit" onPress={onEditPress} />
                    <TimerButton color="#BA3F24" small title="Delete" onPress={this.handleRemove}/>
                </View>
    
                {/*<TimerButton color="#5598AF" title="Start" />*/}
                {this.renderActionButton()}
    
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: 'white',
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});