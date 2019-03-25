var component;
describe('wc-steps-step', function() {
  beforeEach(function(done) {
    component = document.createElement('wc-steps-step');
    flush(done);
  });

  afterEach(function() {
    component.parentNode.removeChild(component);
  });

  it.skip('should fire update event', function() {
    var eventSpy = sinon.spy();
    component.addEventListener('update', eventSpy);
    document.body.insertBefore(component, document.body.firstChild);
    // expect
  });
});
