var test = require('tape')
var rc = require('../index.js')

test('returns rgb array', function (t) {
  t.plan(11)
  t.true(rc() instanceof Array, 'it\'s an array')
  t.equal(rc().length, 3, 'it\'s got three elements')
  rc().map(function(e, i) {
    t.equal(typeof e, 'number', 'index ' + i + ' is number')
    t.equal(e >= 0, true, 'index ' + i + ' >= 0 ')
    t.equal(e <= 255, true, 'index ' + i + ' <= 255')
  })
})

test('returns fresh arrays', function (t) {
  t.plan(1)
  var first = rc()
  var second = rc()
  t.notDeepEqual(first, second, 'multiple calls return different arrays')
})
