export function date(x){
    let date = new Date(x);
    let timeMilliSeconds = date.getTime();
    const milliseconds = timeMilliSeconds;
  
    const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
    const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
    const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);
  
    const time = `${hours}:${minutes}:${seconds}`;
    return time
  }
  