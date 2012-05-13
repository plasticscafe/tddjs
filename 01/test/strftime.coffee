should = require 'should'

fs = require 'fs'
eval fs.readFileSync '01/strftime.js', 'utf-8'

describe 'strftimeのテスト', ->
  date = new Date 2009, 11, 5
  it '年の取得', ->
    date.strftime('%Y').should.equal '2009'
  it '月の取得', ->
    date.strftime('%m').should.equal '12'
  it '日の取得', ->
    date.strftime('%d').should.equal '05'
  it '年(省略形)の取得', ->
    date.strftime('%y').should.equal '9'
