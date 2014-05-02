// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  className: 'table table-hover',
  tagName: 'table',


  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      }));

  }

});
