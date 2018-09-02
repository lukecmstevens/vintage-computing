export class Team {
  name : string;
  members : string[];
  tagline : string;
  gif1 : string;
  gif2 : string;
  machineImages : MachineImage[];
  scores : Score[];
  parts : Part[];
}

export class MachineImage{
  img : string;
  caption : string;
}

export class Score{
  score : number;
  date : string;
  img : string;
}

export class Part{
  name : string;
  cost : number;
}
