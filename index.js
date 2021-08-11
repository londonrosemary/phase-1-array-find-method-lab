function superbowlWin(recordArr) {
    let winningYear = recordArr.find((recordArr) => recordArr.result === 'W')
    if (winningYear) {
        return winningYear.year;
    }
}