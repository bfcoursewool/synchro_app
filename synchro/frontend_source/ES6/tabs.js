import EventsBase from './events_base';

export default class Tabbify extends EventsBase {
  constructor() {
    super();
    console.log('okay')
  }

  events() {
    return { 
      'click .tab': 'onClick'
    }
  }

  onClick(element) {

    console.log('clicked')

    const {tabId, tabName} = getTabData(element);

    hideTabs(tabId);
    showTabs(tabId, tabName);

  }

}

const getTabData = element => ({
  tabId: element.getAttribute('data-tabs'),
  tabName: element.getAttribute('id')
});

const hideTabs = tabId => $(`[data-tabs=${tabId}]`).removeClass('active');

const showTabs = (tabId, tabName) => $(`[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');

