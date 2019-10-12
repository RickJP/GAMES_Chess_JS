$(function() {
  init();
  console.log('Main Init called');
});

function InitFilesRankBrd() {
  let index = 0;
  let files = FILES.FILE_A;
  let rank = RANKS.RANK_1;
  let sq = SQUARES.A1;

  for (index = 0; index < BRD_SQ_NUM; ++index) {
    FilesBrd[index] = SQUARES.OFF_BOARD;
    RanksBrd[index] = SQUARES.OFF_BOARD;
  }

  for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
    for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
      sq = FR2SQ(file, rank);
      FilesBrd[sq] = file;
      RanksBrd[sq] = rank;
    }
  }

  console.log('FilesBrd[0]: ' + FilesBrd[0] + "RanksBrd[0]: " + RanksBrd[0]);
  console.log('FilesBrd[SQUARES.A1]: ' + FilesBrd[SQUARES.A1] + "RanksBrd[SQUARES.A1]: " + RanksBrd[SQUARES.A1]);
  console.log('FilesBrd[SQUARES.E8]: ' + FilesBrd[SQUARES.E8] + "RanksBrd[SQUARES.E8]: " + RanksBrd[SQUARES.E8]);

}

function init() {
  console.log('Init() called');
 InitFilesRankBrd();
}