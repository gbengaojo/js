Todos.Router.map(function() {
   this.resource('todo', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
   model: function() {
      return this.store.find('todo');
   }
});
