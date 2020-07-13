const SystemHealthMonitor = require('system-health-monitor');
 
const monitorConfig = {
    checkIntervalMsec: 1000,
    mem: {
        thresholdType: 'none'
    },
    cpu: {
        calculationAlgo: 'last_value',
        thresholdType: 'none'
    }
};
const monitor = new SystemHealthMonitor(monitorConfig);
monitor.start();

const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();

monitor.stop();

//     .then(
//         // your code
//         monitor.stop();
//     )
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
// });