module.exports = function reverse (n) {
    let ret = n.toString();
	let buf = '';
	for(let i = ret.length-1; i >= 0; i--){
		buf = buf + ret[i]
	}
	let num = parseInt(buf);
	return num;
}
