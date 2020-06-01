import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

/*export default function EditableTimer({id, title, task, elapsed, isRunning, editFormOpen}){
    
    if(editFormOpen){
        return <TimerForm id={id} title={title} task={task} />;
    }
    
    return (
        <Timer id={id} title={title} task={task} elapsed={elapsed} isRunning={isRunning} />
    );
}*/

export default class EditableTimer extends React.Component{
    state = {
        editFormOpen: false,
    };

    handleEditPress = () => {
        this.openForm();
    };
    
    handleFormClose = () => {
        this.closeForm();
    };
    
    handleSubmit = timer => {
        const { onFormSubmit } = this.props;
        onFormSubmit(timer);
        this.closeForm();
    };
    
    closeForm = () => {
        this.setState({ editFormOpen: false });
    };
    
    openForm = () => {
        this.setState({ editFormOpen: true });
    };
        

    render(){
        const { id, title, task, elapsed, isRunning, onRemovePress, onStartPress, onStopPress } = this.props;
        const { editFormOpen } = this.state;

        if(editFormOpen){
            return <TimerForm id={id} title={title} task={task} onFormSubmit={this.handleSubmit} onCloseForm={this.handleFormClose} />;
        }

        return(
            <Timer id={id} title={title} task={task} elapsed={elapsed} isRunning={isRunning} onEditPress={this.handleEditPress} onRemovePress={onRemovePress} onStartPress={onStartPress} onStopPress={onStopPress}/>
        );
    }
}