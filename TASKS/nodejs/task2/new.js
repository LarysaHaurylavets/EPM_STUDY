(function(){
    getJSON('output.txt', function(data) {
            for(var i=0;i<data.results.length;i++){
                console.log(data.results[i].name + ' ' + data.results[i].url);
            }
    });
});