'use strict'

var Pages = require('../controllers/pages')

var PagesCRUD = new Pages()

var Content = require('../controllers/contents')

var ContentCRUD = new Content()

var Photo = require('../controllers/images')

var PhotoCRUD = new Photo()

module.exports = [

{ method:'post', path: '/pages', handler: PagesCRUD.create_page.bind( PagesCRUD ) },

{ method:'get', path: '/pages', handler: PagesCRUD.getAllPages.bind( PagesCRUD ) },

{ method:'delete', path: '/pages', handler: PagesCRUD.delete_page.bind( PagesCRUD ) },

{ method:'put', path: '/pages', handler: PagesCRUD.update_page.bind( PagesCRUD ) },


{ method:'post', path: '/content', handler: ContentCRUD.create_content.bind( ContentCRUD ) },

{ method:'delete', path: '/content', handler: ContentCRUD.delete_text.bind( ContentCRUD ) },

{ method:'get', path: '/content/:id', handler: ContentCRUD.getAllContent.bind( ContentCRUD ) },

{ method:'put', path: '/content', handler: ContentCRUD.update_text.bind( ContentCRUD ) },


{ method:'post', path: '/photo', handler:PhotoCRUD.add_photo.bind( PhotoCRUD ) },

// { method:'delete', path: '/content', handler:PhotoCRUD.delete_text.bind( PhotoRUD ) },

// { method:'get', path: '/content/:id', handler:PhotoCRUD.getAllContent.bind(PhotoCRUD ) },

// { method:'put', path: '/content', handler:PhotoCRUD.update_text.bind(PhotoCRUD ) },

]