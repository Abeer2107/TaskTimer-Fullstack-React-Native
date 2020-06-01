//Page 125

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { uuidGen } from './utils/UUID';
import { newTimer } from './utils/TimerUtils';

export default class App extends React.Component {
  state = {
    timers: [
      /*{
        title: 'Mow the lawn',
        task: 'House Chores',
        id: uuidGen(),
        elapsed: 5456099,
        isRunning: true,
      },
      {
        title: 'Bake squash',
        task: 'Kitchen Chores',
        id: uuidGen(),
        elapsed: 1273998,
        isRunning: false,
      },*/
    ],
  };

  //Delete task
  handleRemovePress = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  //Create new task
  handleCreateFormSubmit = timer => {
    const { timers } = this.state;

    this.setState({
      timers: [newTimer(timer), ...timers],
    });
  }

  //Update
  handleFormSubmit = attrs => {
    const {timers} = this.state;

    this.setState({
      timers: timers.map(timer => {
        if(timer.id === attrs.id){
          const { title, task } = attrs;

          return {
            ...timer,
            title,
            task,
          };
        }

        return timer;
      })
    })
  }

  toggleTimer = timerId => {
    this.setState(prevState => {
      const {timers} = prevState;

      return {
        timers: timers.map(timer => {
          const {id,isRunning} = timer;

          if(id === timerId){
            return {
              ...timer,
              isRunning: !isRunning,
            };
          }

          return timer;
        }),
      };
    });
  };

  render(){

    const {timers} = this.state;

    return (
      <View style={styles.container}>
      
        <View style={styles.titleContainer}>

          <Text style={styles.title}>Task Timer</Text>

        </View>

        <ScrollView style={styles.timerList} showsVerticalScrollIndicator={false}>

          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />

          {timers.map(({title, task, id, elapsed, isRunning}) => (
            <EditableTimer
              key={id} id={id} title={title} task={task} elapsed={elapsed} isRunning={isRunning} onFormSubmit={this.handleFormSubmit} onRemovePress={this.handleRemovePress} onStartPress={this.toggleTimer} onStopPress={this.toggleTimer}
            />
          ))}

        </ScrollView>

      </View>
    );
  }

  componentDidMount(){ //Timer update
    const TIME_INTERVAL = 1000;

    this.intervalID = setInterval(() => {
      const { timers } = this.state;

      this.setState({
        timers: timers.map(timer => {
          const { elapsed, isRunning } = timer;

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      });

    }, TIME_INTERVAL);
  }

  componentWillUnmount(){
    //Stop timer
    clearInterval(this.intervalID);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 20,
    backgroundColor: '#2C6B96'
  },
});
