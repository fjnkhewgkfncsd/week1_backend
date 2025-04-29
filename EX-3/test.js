import { RaceResultsService } from './service/RaceResultsService.js'

const hello = new RaceResultsService();
hello.saveToFile("./data/raceScores.json")
