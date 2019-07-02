import Service from '@ember/service';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

export default class SomeData extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @service
  store!: DS.Store;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'some-data': SomeData;
  }
}
