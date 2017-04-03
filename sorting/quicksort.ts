// Quicksort (Unoptimized)
function quicksort(list){
  // TODO: Split list at the middle
  if (list.length < 2){
    return list
  }
  let pivot = list[0],
      less: number[] = list.slice(1).filter(x => x <= pivot ),
      more: number[] = list.slice(1).filter(x => x > pivot );
  return quicksort(less).concat(pivot).concat(quicksort(more))
}

var list = [10,7,34,6,2,6,93,400,9,11];
console.log(`quicksorted: ${quicksort(list)}`);
