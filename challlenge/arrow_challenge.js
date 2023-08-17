const tasks = {
    tasks: [
        {
            text: 'Beli makan',
            complete: true
        },
        {
            text: 'Nyapu',
            complete: false
        },
        {
            text: 'Ngepel',
            complete: true
        }
    ],
    getTaskTodo() {
        return this.tasks.filter((task) => task.complete == false)
    }
}

console.log(tasks.getTaskTodo())