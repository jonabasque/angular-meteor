import { Mongo } from 'meteor/mongo';

export const Partidos = new Mongo.Collection('partidos');


Partidos.allow({
 insert(userId, partido) {
   return userId && partido.owner === userId;
 },
 update(userId, party, fields, modifier) {
   return userId && partido.owner === userId;
 },
 remove(userId, partido) {
   return userId && partido.owner === userId;
 }
});
