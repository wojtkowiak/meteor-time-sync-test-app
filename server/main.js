import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  TimeSync.configure();
});
