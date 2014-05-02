// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.set('count', 0);
  },

  increaseCount: function() {
    var currentCount = this.get('count');
    this.set('count', currentCount + 1);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.increaseCount();
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  }

});
