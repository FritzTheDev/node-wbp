import * as bcrypt from 'bcrypt';
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions
} from 'passport-jwt';
import { getRepository } from 'typeorm';
import { secret } from './jwtConfig';

const BCRYPT_SALT_ROUNDS = 10;

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(
  new JwtStrategy(options, (jwt_payload, done) => {
    getRepository().findOne();
  })
);
