function Modal(el) {
  this.initialize(el);
}

Modal.prototype.initialize = function(el) {
  this.$el = el;
  this.$container = $('#modal');
  this.$contents = $('#modal-contents');
  this.$close = $('#modal-close');
  this.$next = $('#modal-next');
  this.$prev = $('#modal-prev');
  this.$overlay = $('#modal-overlay');
  this.$window = $(window);
  this.index = 0;
  this.handleEvents();
};

Modal.prototype.handleEvents = function() {
  var self = this;
  this.$el.on("click", function(e) {
    self.show(e);
    return false;
  });
};
