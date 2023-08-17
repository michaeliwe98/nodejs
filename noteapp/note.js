const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    console.log(chalk.white('Your notes...'))

    const note = loadNote()

    note.forEach(element => {
        console.log(element.title)
    });

}

const readNotes = (title) => {
    const notes = loadNote()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log("Title not found")
    }
}

const addNote = (title, body) => {
    const note = loadNote()
    const duplicate = note.filter((note) => note.title === title)

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

const delNote = (title) => {
    const note = loadNote()
    const newNote = note.filter((note) => note.title !== title)

    if (note.length !== newNote.length) {
        console.log(chalk.green.inverse('Note deleted'))
        saveNote(newNote)
    } else {
        console.log(chalk.red.inverse('Title not found, please use correct title'))
    }
}

const saveNote = (note) => {
    const jsonData = JSON.stringify(note)
    fs.writeFileSync('note.json', jsonData)
}

const loadNote = () => {
    const dataBuffer = fs.readFileSync('note.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    delNote: delNote,
    readNotes: readNotes,
}