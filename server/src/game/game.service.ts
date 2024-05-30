import { Injectable } from '@nestjs/common';

// @Injectable()
// export class GameService {}

// import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  create(game: Game): Promise<Game> {
    return this.gamesRepository.save(game);
  }

  findAll(): Promise<Game[]> {
    return this.gamesRepository.find();
  }
}
