Todos.Todo = DS.Model.extend({
   title: DS.attr('string'),
   isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
   {
      id: 1,
      title: 'Learn
