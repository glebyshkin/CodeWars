function filter_list(l) {
    let sortArray = l.filter(function(el) {
      return Number.isFinite(el);
    })
    return sortArray;

  }