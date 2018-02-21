/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var n=0;
	var isolatedIndexes=[];
	var count=0;
  //console.log(preferences.length);
	while(n < preferences.length) {
		if (isolatedIndexes.filter(function(index) {
			return index===preferences[n];
		}).length === 0) {
		var a=preferences[n];
		var b=preferences[a-1];
		var c=preferences[b-1];
		if(a===preferences[c-1] && n!==(a-1) && (a-1)!==(b-1)) {
			count++; 
			isolatedIndexes.push(a);
			isolatedIndexes.push(b);
			isolatedIndexes.push(c);
      //console.log('isolatedIndexe ' + isolatedIndexes.toString())
		}}
	n++;
}
return count;
}
  
