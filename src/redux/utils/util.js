/**
 * 针对操作reducer的工具
 **/

/**
 * 通过数组下标删除数组指定下标的元素
 * Param: { index: Number, arr: Array}
 * Return: { Array }
 **/
export let deleteArrayByIndex = (index, arr) => {
  return arr.slice(0, index).concat(arr.slice(parseInt(index) + 1, arr.length));
}
