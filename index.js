/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(employeeData) {
    const employee = {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })

    return this
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })

    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(function (event) {
        return event.date === date
    })

    const timeOut = this.timeOutEvents.find(function (event) {
        return event.date === date
    })

    const hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    const wagesEarned = hoursWorked * this.payPerHour
    return wagesEarned
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(function (employee) {
        return employee.firstName === firstName
    })
}

function calculatePayroll(employees) {
    const totalWages = employees.reduce(function (total, employee) {
        return total + allWagesFor.call(employee)
    }, 0)

    return totalWages
}


