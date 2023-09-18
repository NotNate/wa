import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GameService } from 'game/game.service';
import { UserService } from 'user/user.service';
import { MongoId } from 'utils/mongo';
import { Player } from './player.schema';
import { Model } from 'mongoose';
import { GameStatus } from 'game/game.schema';
import {
  GameStatusNotValidException,
  PlayerAlreadyRegisteredException,
} from 'utils/exceptions';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name) private model: Model<Player>,
    private gme: GameService,
    private usr: UserService,
  ) {}

  /**
   * Register a given user to play a game.
   * @param gameId The game in question
   * @param userId The user to register for the game in question
   */
  async register(userId: MongoId, gameId: MongoId) {
    const game = await this.gme.findById(gameId);

    // Only allow for player's to register while the game is in setup mode
    if (game.status != GameStatus.SETUP) {
      throw new GameStatusNotValidException(gameId, game.status);
    }

    // Make sure the player isn't already registered
    if ((await this.find(userId, gameId)) !== null) {
      throw new PlayerAlreadyRegisteredException(userId, gameId);
    }

    const player = new this.model();
    player.gameId = gameId;
    player.userId = userId;
    player.save();
  }

  async find(userId: MongoId, gameId: MongoId): Promise<Player | null> {
    return await this.model
      .find({ gameId: gameId, userId: userId })
      .findOne()
      .exec();
  }
}
