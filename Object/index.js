var book = {
  _year:2004,
  edition: 1
};
Object.defineProperty(book,"year",{
  configurable: true,
  enumerable: true,
  get:function(){
    return this._year;
  },
  set: function(neValue) {
    if(neValue>2004){
      this._year = neValue;
      this.edition += neValue-2004;
    }
  }
});

book.year = 2008
console.log(book.edition)