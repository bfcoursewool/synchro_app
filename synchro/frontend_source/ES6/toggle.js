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
      this.setToggleId(toggleId, false);
    }

    return this.toggleIds[toggleId];
  }

  toggleContentById(e) {
    const targetId = e.getAttribute('data-toggle-id');

    if (this.isToggleOpen(targetId)) {
      this.closeToggle(targetId);
    }
    else {
      this.openToggle(targetId);
    }

  }

  closeToggle(toggleId) {
    this.closeToggleContent(toggleId);
    this.setToggleId(toggleId, false);
    this.rotateToggleOff(toggleId);
  }

  openToggle(toggleId) {
    this.closeAllOtherToggles(toggleId);
    this.openToggleContent(toggleId);
    this.setToggleId(toggleId, true);
    this.rotateToggleOn(toggleId);
  }

  openToggleContent(toggleId) {
    const selector = this.getContentSelector(toggleId);
    $(selector).closest('.extended-content').addClass('open');
    setTimeout(() => $(selector).slideDown(1000), 0);
  }

  closeToggleContent(toggleId) {
    const selector = this.getContentSelector(toggleId);
    $(selector).slideUp(1000, () => 
      $(selector).closest('.extended-content').removeClass('open')
    );
  }

  closeAllOtherToggles(toggleId) {

    // Get all toogleIds
    const otherToggles = Object.entries(this.toggleIds)
      .filter(([key, value]) => 
        key !== toggleId
      )
      .forEach(([key, value]) => {
        if (value) this.closeToggle(key);
      });
  }

  rotateToggleOn(toggleId) {
    const selector = this.getToggleSelector(toggleId);
    $(selector).addClass('opened');
  }

  rotateToggleOff(toggleId) {
    const selector = this.getToggleSelector(toggleId);
    $(selector).removeClass('opened');
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