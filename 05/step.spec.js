var component;
describe('wc-steps-step', function() {
  beforeEach(function(done) {
    component = document.createElement('wc-steps-step');
    flush(done);
  });

  afterEach(function() {
    if(component.parentNode){
      component.parentNode.removeChild(component);
    }
  });

  context('update event', function() {
    it('should fire after attached', function() {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      expect(eventSpy).to.calledOnce;
      expect(eventSpy.getCall(0).args[0].detail.label).to.equal('Step 1');
    });

    it('should fire if "label" setted', function() {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      component.label = 'Create Campaign';
      expect(eventSpy.getCall(1).args[0].detail.label).to.equal('Create Campaign');
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

    it('should send uuid', function() {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      expect(eventSpy.getCall(0).args[0].detail.uuid).not.to.be.undefined;
    });

    it('should send itself', function() {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      expect(eventSpy.getCall(0).args[0].detail.component).to.equal(component);
    });
  });

  context('delete event', function() {
    it('should fire event if component removed', function() {
      var eventSpy = sinon.spy();
      component.addEventListener('delete', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      document.body.removeChild(component);
      expect(eventSpy.getCall(0).args[0].detail).not.to.be.null;
    });
  });

});
