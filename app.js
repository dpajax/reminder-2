const records = {
    monday: '7AM',
    tuesday: '4AM',
    wednesday: '4AM',
    thursday: '4AM',
    friday: '4AM',
    saturday: '8AM',
    sunday: '8AM'
}

// let input = prompt('Enter day of week').toLowerCase()

// if (!records[input]) {
//     alert('Invalid day of week')
// } else {
//     alert(`You woke up at ${records[input]} on ${input}`)
// }

const reminderForm = document.querySelector('#reminder-form')
const reminderInput = document.querySelector('#reminder-input')
const resultsBox = document.querySelector('.results')

reminderForm.onsubmit = function (evt) {
    evt.preventDefault()
    let input = reminderInput.value.toLowerCase()
    
    if (!records[input]) {
        resultsBox.innerHTML = `Invalid day of week`
    } else {
        resultsBox.innerHTML = `You woke up at ${records[input]} on ${input}`
    }

    reminderInput.value = ''
}