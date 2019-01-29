function addElementToBeginningOfArray(array, element)
{
  var newArray = [element, ... array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}
function destructivelyAddElementToEndOfArray()
{
  var newArray = [array, ... element]
  return newArray
}
function accessElementInArray(array, index)
{
  var indexVal = array[index]
  return indexVal
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)
}
