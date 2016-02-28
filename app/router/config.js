'use strict'

var Pages = require('../controllers/pages')

var PagesCRUD = new Pages()



module.exports = [

{ method:'post', path: '/pages', handler: PagesCRUD.createpage.bind( PagesCRUD ) },

// { method:'delete', path: '/users', handler: UserCRUD.deleteuser.bind( UserCRUD ) },

// { method:'post', path: '/task', handler: TaskCRUD.createtask.bind( TaskCRUD ) },

// { method:'delete', path: '/task', handler: TaskCRUD.delete_task.bind( TaskCRUD ) },

// { method:'get', path: '/task/:id', handler: TaskCRUD.getAllTasks.bind( TaskCRUD ) },

// { method:'put', path: '/task', handler: TaskCRUD.update_task.bind( TaskCRUD ) },

]