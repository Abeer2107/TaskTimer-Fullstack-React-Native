import { uuidGen } from './UUID';

//Converts milliseconds to HH:MM:SS format
export const msToHMS = ms => {
    const s = Math.floor((ms / 1000) % 60);
    const m = Math.floor((ms / 1000 / 60) % 60);
    const h = Math.floor((ms / 1000 / 60 / 60));

    const formatted = [pad(h.toString(), 2), pad(m.toString(), 2), pad(s.toString(), 2)].join(':');

    return formatted;
}

const pad = (num, size) => {
    let padded = num;

    while(padded.length < size){
        padded = `0${padded}`;
    }

    return padded;
}

export const newTimer = (attrs = {}) => {

    const timer = {
        title: attrs.title || 'Timer',
        task: attrs.task || 'Task',
        id: uuidGen(),
        elapsed: 0,
        isRunning: false,
    };


    return timer;
}