// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
let x = drivers.filter(function (c) {
  return c.revenue >= revenue

})
return x
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let y =[]
let x = drivers.filter(function (c) {
  if (revenue <= c.revenue){
    y.push(c.name)
  }else {
    []
  }

})
return y
}

function exactMatch(drivers, key) {

  let x = drivers.filter(function (c) {
let y =[]
   if (key.key === c.key ){
    y.push(c.key = key.key)
  }
  return  function (ar) {
    let z = x.filter(function (c) {
      return c.revenue >= revenue

    }))
    
  }
  })
  return x
  }
