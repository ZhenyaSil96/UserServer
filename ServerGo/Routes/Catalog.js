var express = require('express');
var router = express.Router();

var user_controller = require('../Controllers/UserController');

router.get('/user/create', user_controller.user_create_get);
router.post('/user/create', user_controller.user_create_post);
router.get('/user/:id/delete', user_controller.user_delete_get);
router.post('/user/:id/delete', user_controller.user_delete_post);
router.get('/user/:id/update', user_controller.user_update_get);
router.post('/user/:id/update', user_controller.user_update_post);
router.get('/user/:id', user_controller.user_detail);
router.get('/users', user_controller.user_list);

module.exports = router;