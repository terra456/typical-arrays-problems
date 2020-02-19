
exports.min = function min (array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        for (var i = 0; i < array.length; i++)
        {
            var minValue = array[i];
            for (var j = 0; j < array.length; j++) {
                if (array[j] < minValue) {
                    minValue = array[j];
                }
            }   
        }
        return minValue;
    }
}

exports.max = function max (array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        for (var i=0; i<array.length; i++) {
            var maxValue = array[i];
            for (var j=0; j<array.length; j++) {
                if (array[j] > maxValue) {
                    maxValue = array[j]
                }
            }
        }
        return maxValue;
    }
    
}

exports.avg = function avg (array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        var arraySum = 0;
        for (i=0; i<array.length; i++) {
            arraySum = arraySum + array[i];
        }
        var averageValue = arraySum / array.length;
        return averageValue;
    }
  
}

