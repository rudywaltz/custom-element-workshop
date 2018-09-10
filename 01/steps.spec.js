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
});
