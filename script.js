function indexOfIgnoreCase(s1, s2) {
  // write your code here
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

	for(let i=0;i<s1.length;i++){
        let j=0;
		
	
	if(s1[i]==s2[j]){
    while(j<s2.length){
		if(s1[i+j]==s2[j]){
			j++
		}else{
			break;
		}
        
	}

		  if (j === s2.length) {
            return i;
        }

		
	}


}
		return -1;
}

	

// // Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
