import EventsBase from './events_base';

export default class Tabbify extends EventsBase {
  constructor() {
    super();
  }

  events() {
    return { 
      'click .tab': 'onClick'
    }
  }

  onClick(element) {
    const {tabId, tabName} = getTabData(element);

    hideTabs(tabId);
    showTabs(tabId, tabName);

  }

}

const getTabData = element => ({
  tabId: element.getAttribute('data-tabs'),
  tabName: element.getAttribute('id')
});

const hideTabs = tabId => {
  $(`.tab-pane[data-tabs=${tabId}]`).removeClass('active');

  $(`.tab-box[data-tabs=${tabId}]`).removeClass('active');

  $(`.tab[data-tabs=${tabId}]`).removeClass('active');
};

const showTabs = (tabId, tabName) => {
  $(`.tab-pane[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');

  $(`.tab-box[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');

  $(`.tab[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');
};