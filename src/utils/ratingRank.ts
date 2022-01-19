export function RatingRank(rating: number) {
  switch (rating) {
    case 5:
      return {
        scoreMessage: 'Excellent',
        scoreColor: 'green.500',
      };
    case 4:
      return {
        scoreMessage: 'Very good',
        scoreColor: 'green.300',
      };
    case 3:
      return {
        scoreMessage: 'Good',
        scoreColor: 'yellow.300',
      };
    case 2:
      return {
        scoreMessage: 'Average',
        scoreColor: 'orange.500',
      };
    case 1:
      return {
        scoreMessage: 'Not good',
        scoreColor: 'red.300',
      };
    default:
      return {
        scoreMessage: '',
        scoreColor: '',
      };
  }
}
