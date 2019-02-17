import jwt from 'jsonwebtoken';

import User from '../models/User';
import constants from '../config/constants';

export async function requireAuth(user) {
  if (!user || !user._id) {
    throw new Error('Unauthorized');
  }

  const me = await User.findById(user._id);

  if (!me) {
    throw new Error('Unauthorized');
  }

  return me;
}

export async function decodeToken(token) {
  const arr = token.split(' ');

  if (arr[0] === 'Bearer') {
    console.log("VERIFICANDO EL TOKEN -->"+ arr)
    return await jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error('Token not valid! review the header.authorization');
}