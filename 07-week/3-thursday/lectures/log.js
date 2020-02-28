let log = {
    info: (Info) => {
        console.log(`info is: ${info}`)
        
    },
    warning:(warning) => {
        console.log(`Warning: ${warning}`);
        
    },
    error: (error) => {
      console.log(`Error:${error}`);  
    }
}
module.exports = log;

