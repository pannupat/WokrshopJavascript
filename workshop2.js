function sortNum(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }

  const sortArr = sortNum (5);
  console.log(sortArr);