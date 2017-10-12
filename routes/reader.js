function get_json(url, callback) {
    http.get(url, function(res){
        var body = '';
        res.on('data', function(chunk) {
            body = body + chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
            callback(response);
        });
    });
}
