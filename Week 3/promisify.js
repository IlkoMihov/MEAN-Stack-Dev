






const request = require('request');

const foo = _ => {
    return new Promise((resolve, reject) => {

        let result = request('http://www.kidpub.com');
        if (result.isGood) {
            return result;

        } else {
            reject(new Error('bad request'));
        }


    });
}

foo.then(() => console.log(`nothing to see here`));
