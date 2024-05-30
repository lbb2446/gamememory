import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() game: Game) {
    return this.gameService.create(game);
  }

  @Get()
  findAll() {
    return this.gameService.findAll();
  }
}
