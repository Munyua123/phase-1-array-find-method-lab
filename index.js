// code your solution here

    function superbowlWin(record) {
    const winRecord = record.find((array) => array.result ==="W"
    )
    if (winRecord) {
       return winRecord.year 
    }else{
        return undefined
    }
  }

