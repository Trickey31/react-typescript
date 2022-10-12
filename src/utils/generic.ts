interface iRank<RankItem> {
  item: RankItem;
  rank: number;
}
const languages: { name: string; difficulty: number }[] = [
  {
    name: "React",
    difficulty: 60,
  },
  {
    name: "Vue",
    difficulty: 50,
  },
  {
    name: "Angular",
    difficulty: 80,
  },
];
function ranker<RankItem>(
  items: RankItem[],
  rankCallback: (value: RankItem) => number
): RankItem[] {
  const ranks: iRank<RankItem>[] = items.map((item) => ({
    item,
    rank: rankCallback(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
// console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
console.log(ranker(languages, (languages) => languages.difficulty));
