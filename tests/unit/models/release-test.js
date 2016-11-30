import { moduleForModel, test } from 'ember-qunit';

moduleForModel('release', 'Unit | Model | release', {
  // Specify the other units that are required for this test.
  needs: ['model:artist', 'model:track']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
