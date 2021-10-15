// Objects
// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     provideInfo() {
//         return(`I am ${this.model} and my current energy level is ${this.energyLevel}`)
//     }
// }
// 
// console.log(robot.provideInfo())

// arrow function and this
// const robot = {
//     energyLevel: 100,
//     checkEnergy() {
//         console.log(`Energy is currently at ${this.energyLevel}%`);
//     }
// }
// robot.checkEnergy()


// Privacy
// const robot = {
//     _energyLevel: 100,
//     recharge() {
//         this._energyLevel += 30
//         console.log(`Recharged! Energy is currently at ${this._energyLevel}%`);
//     }
// }

// robot._energyLevel = 'high'

// robot.recharge()

// Getters
// const robot = {
//     _model: '1E78VZ',
//     _energyLevel: 100,
//     get energyLevel() {
//         if (typeof this._energyLevel === 'number') {
//             return `My current energy level is ${this._energyLevel}`
//         } else {
//             return `System malfuncton: cannot retrieve energy level`
//         }
//     }
// }
// console.log(robot.energyLevel)

// Setters
// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     _numOfSensors: 15,
//     get numOfSensors() {
//         if (typeof this._numOfSensors === 'number') {
//             return this._numOfSensors
//         } else {
//             return 'Sensors are currently down'
//         }
//     },
//     set numOfSensors (num) {
//         if (typeof num === 'number' && num >= 0) {
//             this._numOfSensors = num
//         } else {
//             console.log('Pass in a number that is greater than or equal to 0');
//         }
//     }
// }

//  robot.numOfSensors = 100
//  console.log(robot.numOfSensors);

// // Factory functions with parameters
// const robotFactory = (model, mobile) => {
//     return {
//         model: model,
//         mobile: mobile,
//         beep () {
//             console.log('Beep Boop')
//         }
//     }
// }

// const tinCan = robotFactory('P-500', true)
// console.log(tinCan.model)

// Property Value Shorthand
// const robotFactory = (model, mobile) => {
//     return {
//         model,
//         mobile,
//         beep () {
//             console.log('Beep Boop')
//         }
//     }
// }

// const tinCan = robotFactory('P-500', true)
// console.log(tinCan)


// Destructured Assignment
// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     functionality: {
//         beep() {
//             console.log('Beep Boop')
//         },
//         firelase() {
//             console.log('Pew Pew')
//         }
//     }
// }
// // const { beep } = robot.functionality
// const {functionality} = robot
// functionality.beep()


// Built-in Object Method
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
}

const robotKeys = Object.keys(robot)
console.log(robotKeys)

const robotEntries = Object.entries(robot)
console.log(robotEntries)

const newRobot = Object.assign({}, robot, {laserBlaster: true, voiceRecognition: true})
console.log(newRobot)