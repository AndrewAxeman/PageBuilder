'use strict'

var User = require('../controllers/users')
var Tasks = require('../controllers/task')
// var delete_user = require('../controllers/users/deleteuser')
// var get_one_user = require('../controllers/users/getoneuser')
// var get_user_id = require('../controllers/users/getuserid')


var login_user = require('../controllers/login/login')
var out_user = require('../controllers/login/out')

var UserCRUD = new User()
var TaskCRUD = new Tasks()


module.exports = [

// { method:'get', path: '/createtask/:text', handler: create_task },
// { method:'get', path: '/deletetask/:id', handler: delete_task },
// { method:'get', path: '/gettaskid/:id', handler: get_task_id },
// { method:'get', path: '/deletetodo/:text', handler: get_task },

{ method:'post', path: '/users', handler: UserCRUD.createuser.bind( UserCRUD ) },

{ method:'delete', path: '/users', handler: UserCRUD.deleteuser.bind( UserCRUD ) },

{ method:'post', path: '/task', handler: TaskCRUD.createtask.bind( TaskCRUD ) },

{ method:'delete', path: '/task', handler: TaskCRUD.delete_task.bind( TaskCRUD ) },

{ method:'get', path: '/task/:id', handler: TaskCRUD.getAllTasks.bind( TaskCRUD ) },

{ method:'put', path: '/task', handler: TaskCRUD.update_task.bind( TaskCRUD ) },

// { method:'get', path: '/getuser/:text', handler: UserCRUD.createuser.bind( UserCRUD ) },
// { method:'get', path: '/getuserid/:id', handler: UserCRUD.createuser.bind( UserCRUD ) },
{ method:'post', path: '/login', handler: login_user },
{ method:'put', path: '/login', handler: out_user }

]