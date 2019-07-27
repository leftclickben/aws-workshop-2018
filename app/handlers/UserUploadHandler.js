"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fileUploaded(event, context, done) {
    var key = event.Records[0].s3.object.key;
    console.log("Got event from object key \"" + key + "\"");
    done();
}
exports.fileUploaded = fileUploaded;
