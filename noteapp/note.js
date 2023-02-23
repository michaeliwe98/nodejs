const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes ...'
}

const addNote = function (title, body) {
    const note = loadNote()

    // filter
    const duplicate = note.filter(function (note) {
        return note.title === title
    })

    if (duplicate.length === 0) {
        note.push({
            title: title,
            body: body
        })
    
        saveNote(note)
        console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Title Duplicate, please use another title'))
    }
}

const delNote = function (title) {
    const note = loadNote()

    const newNote = note.filter(function (note) {
        return note.title !== title
    })

    if (note.length !== newNote.length) {
        console.log(chalk.green.inverse('Note deleted'))
        saveNote(newNote)
    } else {
        console.log(chalk.red.inverse('Title not found, please use correct title'))
    }

}

const saveNote = function (note) {
    const jsonData = JSON.stringify(note)
    fs.writeFileSync('note.json', jsonData)
}

const loadNote = function () {
    const dataBuffer = fs.readFileSync('note.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    delNote: delNote,
}