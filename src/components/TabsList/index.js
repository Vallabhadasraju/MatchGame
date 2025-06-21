import './index.css'

const TabsList = ({tabsList, activeTabId, onTabClick}) => (
  <ul className="tabs-container">
    {tabsList.map(tab => {
      const isActive = tab.tabId === activeTabId
      const tabClass = isActive ? 'tab-item active' : 'tab-item'

      return (
        <li key={tab.tabId}>
          <button
            className={tabClass}
            onClick={() => onTabClick(tab.tabId)}
            type="button"
          >
            {tab.displayText}
          </button>
        </li>
      )
    })}
  </ul>
)

export default TabsList
