// function selectionSort(arr) {
//   let n = arr.length
//   let temp
//   for (let i = 0; i < n; i++) {
//     // 寻找[i, n)区间里的最小值
//     let minIndex = i
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) { // 寻找最小值
//         minIndex = j // 保存最小值的索引
//       }
//     }
//     temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//   }
//   return arr
// }

// let A = [6, 3, 5, 2, 8, 7]
// console.log(selectionSort(A))

function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}

// 难点就是边界问题
// function bubble_sort(A){
//     for(let i = A.length -1; i>0 ; i--){
//         for(let j=0; j<i; j++){
//             A[j] > A[j+1] && swap(A, j, j+1)
//             // 循环结束j执行A[0]-A[j]中的最大值
//         }
//         console.log(A)
//         // 循环结束A[i]-A[n-1] 已排序
//     }
//     // return A
// }

function bubble_sort(arr) {
  let i, j, temp
  let len = arr.length
  for (i = 0; i < len - 1; i++) {
    // 循环len - 1次

    // 之所以是-i，是因为每一次j的循环都将最大的数冒出到最后，所以后面的i个数是已经完成了排序的
    for (j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // j+1会不会越界
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

function selection_sort(arr) {
  let len = arr.length
  let minIndex
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 交换 arr[i] 和 arr[minIndex]
    swap(arr, i, minIndex)
  }
  return arr
}

function insertion_sort(arr) {
  let len = arr.length

  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
  return arr
}

function insertion_sort2(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let temp = arr[i]
    for (let j = i; j > 0; j--) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1]
      }
    }
    arr[j - 1] = temp
  }
  return arr
}

function insertion_sort3(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1
    let current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

function merge_sort(arr) {
  // 对arr[l...r]的范围进行排序
  function __merge_sort(arr,l, r) {
    if (l >= r) {
      return
    }
    let mid = Math.floor((l + r) / 2)
    __merge_sort(arr, l, mid)
    __merge_sort(arr, mid + 1, r)
    __merge(arr, l, mid, r)
  }

  // 将arr[l...mid]和arr[mid+1...r]两部分进行归并
  function __merge(arr, l, mid, r) {
    let tempArr = [] // 重新复制一个新数组
    for (let i = l; i <= r; i++) {
      tempArr[i - l] = arr[i]
    }

    let i = l
    let j = mid + 1
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = tempArr[j - l]
        j++
      } else if (j > r) {
        arr[k] = tempArr[i - l]
        i++
      }

      else if (tempArr[i - l] < tempArr[j - l]) {
        arr[k] = tempArr[i - l]
        i++
      } else {
        arr[k] = tempArr[j - l]
        j++
      }
    }
  }

  __merge_sort(arr, 0, arr.length -1)
  return arr
}

// console.log(merge_sort([5, 8, 1, 3, 2]), 'merge_sort')

// function qSort(list){
//   if(list.length === 0){
//       return []
//   }

//   let lesser = []
//   let greater = []
//   let pivot = list[0]
//   for(let i=1; i<list.length; i++){
//       if(list[i] < pivot){
//           lesser.push(list[i])
//       }else{
//           greater.push(list[i])
//       }
//   }
//   return qSort(lesser).concat(pivot, qSort(greater))
// }

{
  function _partition(arr, l, r){
    let v = arr[l]

    // arr[l+1...j] < v ; arr[j+1...i) >
    let j = l
    for(let i = l+1; i<=r; i++){
        if(arr[i] < v){
            swap(arr, j+1, i)
            j++
        }
    }
    swap(arr, l, j)
    return j
}

function _qSort(arr, l, r){
    if(l >= r){
        return
    }
    let p = _partition(arr, l, r)
    _qSort(arr, l, p-1)
    _qSort(arr, p+1, r)
}

function qSort2(arr){
    let l = 0
    let r = arr.length -1
    _qSort(arr, l, r)
    return arr
}
console.log(qSort2([5,8,1,3,2]))
}


