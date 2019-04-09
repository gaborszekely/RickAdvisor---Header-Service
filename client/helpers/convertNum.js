const convertNum = num => {
  num = num.toString().split('');
  let res = '';
  let count = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    res = count % 3 === 0 && count !== 0 ? num[i] + ',' + res : num[i] + res;
    count++;
  }

  return res;
};

export default convertNum;

/*
return num
    .toString()
    .split('')
    .reduceRight(
      (acc, item) => {
        let last = acc[acc.length - 1];
        if (last.length % 3 === 0 && acc[0].length > 0) {
          acc.push(item);
        } else {
          acc[acc.length - 1] += item;
        }
        return acc;
      },
      ['']
    )
    .reverse()
    .join(',');
*/
