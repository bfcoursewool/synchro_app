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

  toggleContentById(e) {
    const targetId = e.getAttribute('data-toggle-id');

    if (this.isToggleOpen(targetId)) {
      this.closeToggle(targetId)
      this.setToggleId(targetId, false);
      this.rotateToggleOff(targetId);
    }
    else {
      this.openToggle(targetId);
      this.setToggleId(targetId, true);
      this.rotateToggleOn(targetId);
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

  rotateToggleOn(toggleId) {
    const selector = this.getToggleSelector(toggleId);
    $(selector).addClass('opened');
    console.log('rotateToggleOn');
  }

  rotateToggleOff(toggleId) {
    const selector = this.getToggleSelector(toggleId);
    $(selector).removeClass('opened');
    console.log('rotateToggleOff');
  }


  setToggleId(toggleId, value) {
    this.toggleIds[toggleId] = value
  }

  getContentSelector(toggleId) {
    return `[data-toggle-content='${toggleId}']`;
  }

  getToggleSelector(toggleId) {
    return `[data-toggle-id='${toggleId}']`;
  }

}