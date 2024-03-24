/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let low = 0;
    const n = letters.length;
    let high =  n-1;

    while(low<=high){
        let mid = (low+high) >> 1;
        let guess = letters[mid];
      //  incrementing low until it's greater than high. 
      // Then, it returns letters[low], which is the smallest character greater than target.
        if(guess > target){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low < n ? letters[low]: letters[0];
};
