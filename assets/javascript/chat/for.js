var myMath = {
    f : function(n) {
        var result = 1;
        for (var i = 2; i < n + 1; i++) {
            result = result * i;
        }
        return result;
    }
};