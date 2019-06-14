const UserControll = require('../controller/user');
exports.user_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Author list');
}
exports.user_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail:' + req.params.id);
}
exports.user_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
}
exports.user_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
}
exports.user_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
}
exports.user_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};
exports.user_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};
exports.user_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};