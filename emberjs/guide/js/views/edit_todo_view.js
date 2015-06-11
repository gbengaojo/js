Todos.EditTodoView = Ember.TextField.extend({
   didIinsertElement: function() {
      this.$().focus();
   }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
