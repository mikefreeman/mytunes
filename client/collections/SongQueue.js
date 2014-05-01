// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.remove(song);
    });

    this.on('remove', function() {
      if(this.length) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });

  },
  playFirst: function(){
    this.length && this.at(0).play();
  }
});
