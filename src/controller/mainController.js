const path = require('path');

module.exports = {
    index: function(req, res) {
        res.sendFile(path.resolve('./views/index.html'));
    }
}