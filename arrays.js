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
  console.log(array[index])
}
