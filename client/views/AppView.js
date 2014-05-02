// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  className: 'container',

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    var $jumbotron = $('<div></div>').addClass('jumbotron').append('<h3> Now Playing: <span class="nowPlaying"></span> </h3>').append(this.playerView.$el);
    var $libview = $('<div></div>').addClass('col-md-6').append(this.libraryView.$el);
    var $songqueueview = $('<div></div>').addClass('col-md-6').append(this.songQueueView.$el);
    var $row = $('<div></div>').addClass('row').html([$libview, $songqueueview]);
    return this.$el.html([$jumbotron, $row]);
  }

});
