function isPermutation(word1, word2){
    if(word1.length != word2.length) return false;
    word1 = word1.toLowerCase().split('');
    word1 = word1.sort();
    word2 = word2.toLowerCase().split('');
    word2 = word2.sort();
    if(word1.join('') != word2.join('')) return false;
    
    return true;
}

console.log(isPermutation('11002', '01013'));
