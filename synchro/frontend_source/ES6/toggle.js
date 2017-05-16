import EventsBase from './events_base';

export default class Togglify extends EventsBase {
  constructor(selector) {
    super();
    this.toggleIds = {}
  }

  events() {
    return { 
      'click [data-toggle-id]': 'toggleContentById'
    }
  }

  isToggleOpen(toggleId) {
    const isOpen = this.toggleIds[toggleId];

    if (typeof isOpen !== "boolean") {
      this.setToggleId(toggleId, false)
    }

    return this.toggleIds[toggleId];
  }

  toggleContentById = (e) => {
    const targetId = e.getAttribute('data-toggle-id');

    if (this.isToggleOpen(targetId)) {
      this.closeToggle(targetId)
      this.setToggleId(targetId, false);
    }
    else {
      this.openToggle(targetId);
      this.setToggleId(targetId, true);
    }

  }

  openToggle(toggleId) {
    const selector = this.getContentSelector(toggleId);
    $(selector).slideDown();
  }

  closeToggle(toggleId) {
    const selector = this.getContentSelector(toggleId);
    $(selector).slideUp();
  }

  setToggleId = (toggleId, value) => {
    this.toggleIds[toggleId] = value
  }

  getContentSelector = (toggleId) => `[data-toggle-content='${toggleId}']`

}
