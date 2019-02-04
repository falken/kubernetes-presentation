"use strict"

module.exports = (context, callback) => {
    callback(undefined, { result: 'Hello ' + context.name});
}
