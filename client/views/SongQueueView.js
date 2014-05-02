// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  className: 'table table-hover',
  tagName: 'table',

  initialize: function() {
    this.collection.on('add', function(song){
      this.render();
    }, this);
    this.collection.on('remove', function(song){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
