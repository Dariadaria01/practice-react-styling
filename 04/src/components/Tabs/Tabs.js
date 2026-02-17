import React, { useState } from 'react';

const Tabs = ({ children, defaultActiveKey }) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const tabsArray = React.Children.toArray(children);

    return (
        <div className="tabs">
            <div className="tabs__nav">
                {tabsArray.map(tab => {
                    const { eventKey, title, disabled } = tab.props;

                    return (
                        <button
                            key={eventKey}
                            disabled={disabled}
                            className={
                                eventKey === activeKey
                                    ? 'tabs__button active'
                                    : 'tabs__button'
                            }
                            onClick={() => setActiveKey(eventKey)}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>

            <div className="tabs__content">
                {tabsArray.map(tab => {
                    if (tab.props.eventKey === activeKey) {
                        return tab.props.children;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Tabs;