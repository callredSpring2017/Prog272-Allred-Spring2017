var fs=require("fs");
var debug = require('debug')('get-address');

debug('Testing debug');

function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}

function getAddress(value, char) {
    'use strict';
    //console.log('LastIndex: ' + value.lastIndexOf(char));
    value.lastIndexOf()
    return value.substring(0, value.lastIndexOf(char) -1);
}

function getZip(value, char) {
    'use strict';
    // YOU WRITE IT
    // ITS THE SAME SINGLE CALL AS GET ADDRESS, BUT INDEXES ARE DIFFERENT
    // UNCOMMENT NEXT LINE AND MODIFY IT
    //value.substring(6)
    return value.substring(value.lastIndexOf(char) + 14, value.length - 5);  //14 = length of city, - 5 to remove the ZIP+4 part

}

function getCity(value, char, len) {
    'use strict';
    var start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    var comma = noComma ? '"' : '",';
    console.log('\t' + label, '"'+ value + comma)
};

readFile('address.json').then(function(text) {
    debug(text);
    var json = JSON.parse(text.result);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
    var gitUser = [];
    const unknown = 'unknown';
    for (var i = 0; i < json.objects.length; i++) {
        const open = (i === 0) ? '[\n\t{' : '\t{';
        console.log(open);
        writeIt('"firstName":', json.objects[i].person.firstname);
        writeIt('"lastName":', json.objects[i].person.lastname);
        writeIt('"street":', getAddress(json.objects[i].extra.address, 'W'));
        writeIt('"city":', getCity(json.objects[i].extra.address, 'W', 13));  //13 is the length of 'Washington DC'
        writeIt('"state":', json.objects[i].state);
        writeIt('"zipCode":', getZip(json.objects[i].extra.address, 'W'));
        writeIt('"phone":', json.objects[i].phone);
        writeIt('"website":', json.objects[i].website);
        writeIt('"email":', '');
        writeIt('"contact":', json.objects[i].extra.contact_form || '', true);
        const close = i < json.objects.length - 1 ? '\t},' : '\t}\n]';
        console.log(close);
    }
    //console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});
