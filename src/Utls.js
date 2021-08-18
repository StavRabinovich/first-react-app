// const isArrayEmpty = (arr) => {
export const isArrayEmpty = (arr) => {
  if (arr !== undefined && arr !== null && arr.lenght > 0){
    return true;
  }
  return false;
}

// const dumpLogs = (message) => {
export const dumpLogs = (message) => {
  console.log(message);
  // Send it to a tool for tracking
}

// export { isArrayEmpty, dumpLogs}