var component;
describe('wc-steps', function() {
  beforeEach(function(done) {
    component = document.createElement('wc-steps');
    document.body.insertBefore(component, document.body.firstChild);
    flush(done);
  });

  afterEach(function() {
    component.parentNode.removeChild(component);
  });

  it('Add basic design to component', function() {
    var steps = component.querySelector('.e-steps .e-steps__progress');
    expect(steps).not.to.be.null;
  });

  it('should not render step if not contains child component', function() {
    var step = component.querySelector('.e-steps__progress .e-steps__item');
    expect(step).to.be.null;
  });

  it('Add step to component', function(done) {
    var stepComponent = document.createElement('wc-steps-step');
    component.appendChild(stepComponent);
    flush(function() {
      var step = component.querySelector('.e-steps__progress .e-steps__item');
      expect(step).not.to.be.null;
      expect(step.textContent).to.equal('Step 1');
      done();
    })
  });

  it('should step title use from setter', function(done) {
    var stepComponent = document.createElement('wc-steps-step');
    stepComponent.label = 'Edit Content';
    component.appendChild(stepComponent);
    flush(function() {
      var step = component.querySelector('.e-steps__progress .e-steps__item');
      expect(step).not.to.be.null;
      expect(step.textContent).to.equal('Edit Content');
      done()
    })
  });

  it('should update the current step name', function(done) {
    var stepComponent = document.createElement('wc-steps-step');
    stepComponent.label = 'Edit Content';
    component.appendChild(stepComponent);
    flush(function() {
      stepComponent.label = 'Schedule';
      var step = component.querySelectorAll('.e-steps__progress .e-steps__item');
      expect(step.length).to.be.equal(1);
      expect(step[0].textContent).to.equal('Schedule');
      done();
    })
  });
});
