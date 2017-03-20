import DS from 'ember-data';

export default DS.Model.extend({                 //exports and saves the model to the database.
  owner: DS.attr(),                      //DS = data store and attr = attribute
    city: DS.attr(),
    type: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr()
});
