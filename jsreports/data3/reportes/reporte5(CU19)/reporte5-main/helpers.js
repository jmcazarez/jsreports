function now() {
    var date = new Date();
    var day = date.getDate();
    if (day < 10) {
        day = '0' +  day;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' +  month;
    }
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}

Handlebars.registerHelper('ifRanking', function(nEstrellas, nValor, options) {
  if(nEstrellas >= nValor) {
    return options.fn(this);
  }
  return options.inverse(this);
});
