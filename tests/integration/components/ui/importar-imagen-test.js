import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | ui/importar-imagen', function(hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, "es");

  test('it renders', async function(assert) {
    await render(hbs`{{ui/importar-imagen}}`);
    assert.ok(this.element);
  });
});
