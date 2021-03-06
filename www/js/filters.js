angular.module('app.filters', [])

.filter('searchLocations', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) { if (letterMatch.test(item.title.substring(0, query.length))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  };						
});