import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

window.currentSecond = 0;
window.currentRepeat = 0;

Template.hello.onCreated(function helloOnCreated() {

  const instance = Template.instance();

   function frame() {
    instance.find('#time2').innerHTML = TimeSync.offset;
    const time1 = instance.find('#time1');
    const date = moment(TimeSync.now());
    const s = date.format('s');
    if (s !== window.currentSecond) {
      time1.className = 'blink';
      window.currentSecond = s;
      window.currentRepeat = 0;
    } else {
        window.currentRepeat += 1;
        if (window.currentRepeat === 50) {
            time1.className = '';
        }
    }
    time1.innerHTML = date.format('HH:mm:ss.SSS');
    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);

  TimeSync.startTimeChangeDetection();
});
