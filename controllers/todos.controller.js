let todos = [
    {id: 1, content: ' fg'}, 
{id: 2, content: 'gbfbbf'},
{id: 3, content: 'gfsyjym strah'},]

exports.getAllTodos =(req, res, next) => {
    res.status(200).json({status: 'succes', data: {todos}})
};
exports.createTodo = (req,res, next) => {
    //get todo content from req.body
    const {content} = req.body;

    //create new todo with id content
    const lastestId = todos[todos.length - 1].id;

    const newTodo = {
        id: lastestId + 1,
        content
    };

    //push new todo to array
    todos.push(newTodo);

    //send new todo to client

    res.status(201).json({status: 'succes', data: {newTodo}})
};

exports.updateTodo = (req, res, next) => {
    //get id from route
    const {id} = req.params;

    //get todo content from req.body
    const {content} = req.body;

    //find indez of todo
    todoIndex = todos.findIndex((todo=> todo.id == id));

    //update todo content
    todos[todoIndex].content = content;

    //send updated todo to client
    res.status(201).json({status: 'succes', data: todos[todoIndex]})

};

exports.deleteTodo = (req, res, next) => {
    //get id from route
    const {id} = req.params;

    //filter todos by id 
    todos = todos.filter(todo => todo.id != id)

    //send deleted todos to client
    res.status(200).json({status: 'succes'})

};