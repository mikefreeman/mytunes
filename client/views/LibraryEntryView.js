// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('play', function(song){
      this.render();
    }, this);
    this.render();
  },

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %><span class="badge pull-right alert-info"><%= count %></span></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
