var fs, should;

should = require('should');

fs = require('fs');

eval(fs.readFileSync('strftime.js', 'utf-8'));

describe('strftimeのテスト', function() {
  var date;
  date = new Date(2009, 11, 5);
  it('年の取得', function() {
    return date.strftime('%Y').should.equal('2009');
  });
  it('月の取得', function() {
    return date.strftime('%m').should.equal('12');
  });
  it('日の取得', function() {
    return date.strftime('%d').should.equal('05');
  });
  return it('年(省略形)の取得', function() {
    return date.strftime('%y').should.equal('9');
  });
});
