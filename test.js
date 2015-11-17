var prompt = require('prompt');

prompt.start();

prompt.get(['city', ], function(err, result){
    console.log(result);
    
    prompt.get(['country'], function(err, result){
        console.log(result);
    });    
});

