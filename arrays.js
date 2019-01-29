function addElementToBeginningOfArray(array, element)
{
  var newArray = [element, ... array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array[1] = element
  return array
}
