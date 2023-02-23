const getNotes = require('./note.js')
const yargs = require('yargs')

yargs.version('1.1.0')

// create
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe : 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe : 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        getNotes.addNote(argv.title, argv.body)
    } 
})

// delete
yargs.command({
    command: 'delete',
    describe: 'Delete note',
    builder: {
        title: {
            describe : 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        getNotes.delNote(argv.title)
    } 
})

// list
yargs.command({
    command: 'list',
    describe: 'Get notes list',
    handler: function () {
        console.log('Getting notes list')
    } 
})

// read
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function () {
        console.log('Reading note')
    } 
})

console.log(yargs.argv)