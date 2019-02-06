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

    it('should send uuid', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      flush(function() {
        expect(eventSpy.getCall(0).args[0].detail.uuid).not.to.be.undefined;
        done();
      })
    });

    it('should send itself', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      flush(function() {
        expect(eventSpy.getCall(0).args[0].detail.component).to.equal(component);
        done();
      })
    });

    it('should fire if disable setted', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      flush(function() {
        component.disabled = true;
        expect(eventSpy.getCall(1).args[0].detail.disabled).to.equal(true);
        done();
      })
    });

    it('should fire if disable attribute changed', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('update', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      component.setAttribute('disabled', true);
      flush(function(){
        expect(eventSpy.getCall(1).args[0].detail.disabled).to.equal(true);
        done();
      })
    });
  });

  context('delete event', function() {
    it('should fire event if component removed', function(done) {
      var eventSpy = sinon.spy();
      component.addEventListener('delete', eventSpy);
      document.body.insertBefore(component, document.body.firstChild);
      document.body.removeChild(component);
      flush(function() {
        expect(eventSpy.getCall(0).args[0].detail).not.to.be.null;
        done();
      })
    });
  });

  it('should disabled false by default', function(done) {
    var eventSpy = sinon.spy();
    component.addEventListener('update', eventSpy);
    document.body.insertBefore(component, document.body.firstChild);
    flush(function(){
      expect(eventSpy.getCall(0).args[0].detail.disabled).to.equal(false);
      done();
    })
  });
});
