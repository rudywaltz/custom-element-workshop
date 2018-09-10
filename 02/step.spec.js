var component;
describe('wc-steps-step', function() {
  beforeEach(function(done) {
    component = document.createElement('wc-steps-step');
    flush(done);
  });

  afterEach(function() {
    component.parentNode.removeChild(component);
  });

  it('should fire update event', function() {
    var eventSpy = sinon.spy();
    component.addEventListener('update', eventSpy);
    document.body.insertBefore(component, document.body.firstChild);
    expect(eventSpy).to.calledOnce;
    expect(eventSpy.getCall(0).args[0].detail).to.equal('Step 1');
  });
});
