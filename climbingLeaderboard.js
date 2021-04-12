function climbingLeaderboard(scores, alice) {
    scores = Array.from(new Set(scores));
    const player_ranks = [];
    for (const score of alice) {
        while (scores && score >= scores[scores.length - 1]) scores.pop()
        player_ranks.push(scores.length + 1)
    }
    return player_ranks
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))