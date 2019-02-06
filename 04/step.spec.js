var component;
describe('wc-steps-step', function() {
  beforeEach(function(done) {
    component = document.createElement('wc-steps-step');
    flush(done);
  });

  afterEach(function() {
    component.parentNode.removeChild(component);
  });

  context('update event', function() {
    it('should fire after attached', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      flush(function() {
        expect(eventSpy).to.calledOnce;
        expect(eventSpy.getCall(0).args[0].detail.label).to.equal('Step 1');
        done();
      })
    });

    it('should fire if "label" setted', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      component.label = 'Create Campaign';
      flush(function() {
        expect(eventSpy.getCall(1).args[0].detail.label).to.equal('Create Campaign');
        done();
      })
    });
    it('should fire if "label" attribute changed', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      component.setAttribute('label', 'Create Campaign');
      flush(function() {
        expect(eventSpy.getCall(1).args[0].detail.label).to.equal('Create Campaign');
        done();
      })
    });

    it('should send uuid in update event', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      flush(function() {
        expect(eventSpy.getCall(0).args[0].detail.uuid).not.to.be.undefined;
        done();
      })
    });
  });
});
