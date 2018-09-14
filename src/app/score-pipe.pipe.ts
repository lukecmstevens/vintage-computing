import { Pipe, PipeTransform } from '@angular/core';
import { Score } from './team';

@Pipe({
  name: 'scorePipe',
  pure: false
})
export class ScorePipePipe implements PipeTransform {

  transform(scores: Score[], top: number): Score[] {
    if(scores){
      let end = top >= scores.length? scores.length : top;
      return scores.sort((left, right) => right.score - left.score).slice(0, end);
    }
  }

}
